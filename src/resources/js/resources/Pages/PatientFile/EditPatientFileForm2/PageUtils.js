import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PatientFile as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import {
    BASE_PATH,
    LESION_CLASSIFICATION,
    SPECIAL_LESION_CLASSIFICATION,
} from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editPatientFileForm2Schema as schema } from "../../../validations";
import { editPatientFileForm2 as strings } from "../../../../constants/strings/fa";
import {
    setPagePropsAction,
    setPageTitleAction,
} from "../../../../state/page/pageActions";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        super("EditPatientFileForm2", strings, form);
        this.entity = new Entity();
        this.callbackUrl = `${BASE_PATH}/p_files`;
    }

    onLoad() {
        this.navigateIfNotValidateParams();
        super.onLoad();
        this.fillForm(this.pageState.params);
    }

    navigateIfNotValidateParams() {
        this.navigateIfNotValidId(this.pageState.params.patientFileId);
    }

    async fillForm(data) {
        try {
            this.dispatch(setLoadingAction(true));
            const result = await this.fetchItem(data.patientFileId);
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
            })
        );
        this.dispatch(
            setPageTitleAction(
                `${strings._title} [ ${result.item.fileNo} - ${result.item.name} ${result.item.family}, ${result.item.nationalNo} ]`,
                strings._subTitle
            )
        );
        this.useForm.setValue(
            "lesionClassification",
            result.item.lesionClassification
        );
        this.useForm.setValue("patientReferal", result.item.patientReferal);
        this.useForm.setValue(
            "specialLesionClassification",
            result.item.specialLesionClassification
        );
        this.useForm.setValue("chiefCompliant", result.item.chiefCompliant);
        this.useForm.setValue(
            "chiefCompliantHistory",
            result.item.chiefCompliantHistory
        );
        this.useForm.setValue("timeInterval", result.item.timeInterval);
        this.useForm.setValue("referalHistory", result.item.referalHistory);
        this.useForm.setValue("treatmentHistory", result.item.treatmentHistory);
    }

    async onSubmit(data) {
        let lesionClassification =
            data.lesionClassification?.length > 0
                ? data.lesionClassification.filter(
                      (item) => item in LESION_CLASSIFICATION
                  )
                : null;
        lesionClassification =
            lesionClassification?.length > 0
                ? lesionClassification
                      .map((item) => LESION_CLASSIFICATION[item])
                      .join("|")
                : null;
        let specialLesionClassification =
            data.specialLesionClassification?.length > 0
                ? data.specialLesionClassification.filter(
                      (item) => item in SPECIAL_LESION_CLASSIFICATION
                  )
                : null;
        specialLesionClassification =
            specialLesionClassification?.length > 0
                ? specialLesionClassification
                      .map((item) => SPECIAL_LESION_CLASSIFICATION[item])
                      .join("|")
                : null;
        const promise = this.entity.updateForm2(
            this.pageState.params.patientFileId,
            lesionClassification,
            data.patientReferal,
            specialLesionClassification,
            data.chiefCompliant,
            data.chiefCompliantHistory,
            data.timeInterval,
            data.referalHistory,
            data.treatmentHistory
        );
        super.onModifySubmit(promise);
    }
}
