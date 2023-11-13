import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RadiographicEvidence as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editRadiographicEvidenceSchema as schema } from "../../../validations";
import { editRadiographicEvidencePage as strings } from "../../../../constants/strings/fa";
import {
    setPagePropsAction,
    setPageTitleAction,
} from "../../../../state/page/pageActions";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        super("EditRadiographicEvidence", strings, form);
        this.entity = new Entity();
        this.initialPageProps = {
            item: null,
            patientFile: null,
            file: null,
        };
        this.callbackUrl = `${BASE_PATH}/r_evidences/${this.pageState?.props?.patientFile?.id}`;
    }

    onLoad() {
        this.navigateIfNotValidateParams();
        super.onLoad();
        this.fillForm(this.pageState.params);
    }

    navigateIfNotValidateParams() {
        this.navigateIfNotValidId(
            this.pageState?.params?.radiographicEvidenceId
        );
    }

    async fillForm(data) {
        try {
            this.dispatch(setLoadingAction(true));
            const result = await this.fetchItem(data.radiographicEvidenceId);
            this.navigateIfItemNotFound(result);
            this.handleFetchResult(result);
        } catch {
        } finally {
            this.dispatch(setLoadingAction(false));
        }
    }

    async fetchItem(id) {
        return await this.entity.get(id);
    }

    handleFetchResult(result) {
        this.dispatch(
            setPagePropsAction({
                item: result.item,
                patientFile: result.patientFile,
            })
        );
        this.dispatch(
            setPageTitleAction(
                `${strings._title} [ ${result.patientFile.fileNo} - ${result.patientFile.name} ${result.patientFile.family}, ${result.patientFile.nationalNo} ]`,
                strings._subTitle
            )
        );
        this.useForm.setValue(
            "radiographicEvidence",
            result.item.radiographicEvidence
        );
    }

    onChangeFile(e) {
        const f = e?.target?.files[0];
        if (f) {
            this.dispatch(setPagePropsAction({ file: f }));
        }
    }

    async onSubmit(data) {
        const promise = this.entity.update(
            this.pageState?.params?.radiographicEvidenceId,
            data.radiographicEvidence,
            this.pageState?.props?.file
        );
        super.onModifySubmit(promise);
    }
}
