import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
    RadiographicEvidence as Entity,
    PatientFile,
} from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { addRadiographicEvidenceSchema as schema } from "../../../validations";
import { addRadiographicEvidencePage as strings } from "../../../../constants/strings/fa";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import {
    setPagePropsAction,
    setPageTitleAction,
} from "../../../../state/page/pageActions";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        super("AddRadiographicEvidence", strings, form);
        this.entity = new Entity();
        this.initialPageProps = {
            file: null,
        };
        this.callbackUrl = `${BASE_PATH}/r_evidences/${this.pageState?.params?.patientFileId}`;
    }

    onLoad() {
        this.navigateIfNotValidateParams();
        super.onLoad();
        this.fillForm(this.pageState.params);
    }

    navigateIfNotValidateParams() {
        this.navigateIfNotValidId(this.pageState?.params?.patientFileId);
    }

    async fillForm(data) {
        try {
            this.dispatch(setLoadingAction(true));
            const result = await this.fetchPatientFile(data.patientFileId);
            this.navigateIfItemNotFound(result);
            this.handleFetchResult(result);
        } catch {
        } finally {
            this.dispatch(setLoadingAction(false));
        }
    }

    async fetchPatientFile(id) {
        const patientFile = new PatientFile();
        return await patientFile.get(id);
    }

    handleFetchResult(result) {
        this.dispatch(
            setPageTitleAction(
                `${strings._title} [ ${result.item.fileNo} - ${result.item.name} ${result.item.family}, ${result.item.nationalNo} ]`,
                strings._subTitle
            )
        );
    }

    onChangeFile(e) {
        const f = e?.target?.files[0];
        if (f) {
            this.dispatch(setPagePropsAction({ file: f }));
        }
    }

    async onSubmit(data) {
        const promise = this.entity.store(
            this.pageState.params.patientFileId,
            data.radiographicEvidence,
            this.pageState?.props?.file
        );
        super.onModifySubmit(promise);
    }
}
