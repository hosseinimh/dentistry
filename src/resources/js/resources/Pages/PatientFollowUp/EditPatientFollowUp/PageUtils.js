import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PatientFollowUp as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editPatientFollowUpSchema as schema } from "../../../validations";
import { editPatientFollowUpPage as strings } from "../../../../constants/strings/fa";
import {
    setPagePropsAction,
    setPageTitleAction,
} from "../../../../state/page/pageActions";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        super("EditPatientFollowUp", strings, form);
        this.entity = new Entity();
        this.initialPageProps = {
            item: null,
            patientFile: null,
        };
        this.callbackUrl = `${BASE_PATH}/p_f_ups/${this.pageState?.props?.patientFile?.id}`;
    }

    onLoad() {
        this.navigateIfNotValidateParams();
        super.onLoad();
        this.fillForm(this.pageState.params);
    }

    navigateIfNotValidateParams() {
        this.navigateIfNotValidId(this.pageState?.params?.patientFollowUpId);
    }

    async fillForm(data) {
        try {
            this.dispatch(setLoadingAction(true));
            const result = await this.fetchItem(data.patientFollowUpId);
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
        this.useForm.setValue("date", result.item.date);
        this.useForm.setValue("result", result.item.result);
    }

    async onSubmit(data) {
        const promise = this.entity.update(
            this.pageState?.params?.patientFollowUpId,
            data.date.replaceAll("/", ""),
            data.result
        );
        super.onModifySubmit(promise);
    }
}
