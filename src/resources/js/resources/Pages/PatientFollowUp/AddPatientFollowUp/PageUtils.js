import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
    PatientFollowUp as Entity,
    PatientFile,
} from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { addPatientFollowUpSchema as schema } from "../../../validations";
import { addPatientFollowUpPage as strings } from "../../../../constants/strings/fa";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { setPageTitleAction } from "../../../../state/page/pageActions";
import utils from "../../../../utils/Utils";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        super("AddPatientFollowUp", strings, form);
        this.entity = new Entity();
        this.initialPageProps = {
            relationships: null,
        };
        this.callbackUrl = `${BASE_PATH}/p_f_ups/${this.pageState?.params?.patientFileId}`;
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
        this.useForm.setValue(
            "date",
            utils.toNumericLocaleDateString(Date.now())
        );
    }

    async onSubmit(data) {
        const promise = this.entity.store(
            this.pageState.params.patientFileId,
            data.date.replaceAll("/", ""),
            data.result
        );
        super.onModifySubmit(promise);
    }
}
