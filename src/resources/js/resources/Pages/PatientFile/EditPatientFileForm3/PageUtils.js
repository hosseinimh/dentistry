import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PatientFile as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import {
    BASE_PATH,
    FAMILIAL_HISTORY,
    SYSTEMIC_DISEASE_HISTORY,
} from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editPatientFileForm3Schema as schema } from "../../../validations";
import { editPatientFileForm3 as strings } from "../../../../constants/strings/fa";
import {
    setPagePropsAction,
    setPageTitleAction,
} from "../../../../state/page/pageActions";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        super("EditPatientFileForm3", strings, form);
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
            "systemicDiseaseHistory",
            result.item.systemicDiseaseHistory
        );
        this.useForm.setValue("bloodDiseaseType", result.item.bloodDiseaseType);
        this.useForm.setValue(
            "hospitalizationReason",
            result.item.hospitalizationReason
        );
        this.useForm.setValue("continuingDrug", result.item.continuingDrug);
        this.useForm.setValue("weeklyDrug", result.item.weeklyDrug);
        this.useForm.setValue("cancerType", result.item.cancerType);
        this.useForm.setValue("radiationPlace", result.item.radiationPlace);
        this.useForm.setValue("pregnancyWeek", result.item.pregnancyWeek);
        this.useForm.setValue("pregnancyNum", result.item.pregnancyNum);
        this.useForm.setValue("pregnancyRank", result.item.pregnancyRank);
        this.useForm.setValue("adExplanation", result.item.adExplanation);
        this.useForm.setValue("sleepStatus", result.item.sleepStatus);
        this.useForm.setValue(
            "functionalCapacity",
            result.item.item35Description
        );
        this.useForm.setValue("tobaccoUsage", result.item.tobaccoUse);
        this.useForm.setValue(
            "useTobaccoDuration",
            result.item.useTobaccoDuration
        );
        this.useForm.setValue("useTobaccoType", result.item.useTobaccoType);
        this.useForm.setValue("drugUsage", result.item.drugUse);
        this.useForm.setValue("useDrugDuration", result.item.useDrugDuration);
        this.useForm.setValue("useDrugType", result.item.useDrugType);
        this.useForm.setValue("alcoholUsage", result.item.alcohol);
        this.useForm.setValue("pulse", result.item.pulse);
        this.useForm.setValue("bodyTemp", result.item.bodyTemp);
        this.useForm.setValue("bloodPressure", result.item.bloodPressure);
        this.useForm.setValue("resporate", result.item.resporate);
        this.useForm.setValue("weight", result.item.weight);
        this.useForm.setValue("height", result.item.height);
        this.useForm.setValue("bmi", result.item.bmi);
        this.useForm.setValue("familialHistory", result.item.familialHistory);
        this.useForm.setValue("fcaType", result.item.fcaType);
    }

    onSetItem(item, value) {
        let props = this.pageState?.props;
        props[item] = value;
        this.dispatch(setPagePropsAction(props));
    }

    async onSubmit(data) {
        let systemicDiseaseHistory =
            data.systemicDiseaseHistory?.length > 0
                ? data.systemicDiseaseHistory.filter(
                      (item) => item in SYSTEMIC_DISEASE_HISTORY
                  )
                : null;
        systemicDiseaseHistory =
            systemicDiseaseHistory?.length > 0
                ? systemicDiseaseHistory
                      .map((item) => SYSTEMIC_DISEASE_HISTORY[item])
                      .join("|")
                : null;
        let familialHistory =
            data.familialHistory?.length > 0
                ? data.familialHistory.filter(
                      (item) => item in FAMILIAL_HISTORY
                  )
                : null;
        familialHistory =
            familialHistory?.length > 0
                ? familialHistory
                      .map((item) => FAMILIAL_HISTORY[item])
                      .join("|")
                : null;
        const promise = this.entity.updateForm3(
            this.pageState.params.patientFileId,
            systemicDiseaseHistory,
            systemicDiseaseHistory?.includes("blood_disease")
                ? data.bloodDiseaseType
                : "",
            systemicDiseaseHistory?.includes("hospitalization_history")
                ? data.hospitalizationReason
                : "",
            data.continuingDrug,
            data.weeklyDrug,
            systemicDiseaseHistory?.includes("cancer") ? data.cancerType : "",
            systemicDiseaseHistory?.includes("chemotherapy")
                ? data.radiationPlace
                : "",
            systemicDiseaseHistory?.includes("pregnancy")
                ? data.pregnancyWeek
                : "",
            systemicDiseaseHistory?.includes("pregnancy")
                ? data.pregnancyNum
                : "",
            systemicDiseaseHistory?.includes("pregnancy")
                ? data.pregnancyRank
                : "",
            systemicDiseaseHistory?.includes("artificial_device")
                ? data.adExplanation
                : "",
            data.sleepStatus,
            data.functionalCapacity,
            data.tobaccoUsage ? 1 : 0,
            data.tobaccoUsage ? data.useTobaccoDuration : "",
            data.tobaccoUsage ? data.useTobaccoType : "",
            data.drugUsage ? 1 : 0,
            data.drugUsage ? data.useDrugDuration : "",
            data.drugUsage ? data.useDrugType : "",
            data.alcoholUsage ? 1 : 0,
            data.pulse,
            data.bodyTemp,
            data.bloodPressure,
            data.resporate,
            data.weight,
            data.height,
            data.bmi,
            familialHistory,
            familialHistory?.includes("fca") ? data.fcaType : ""
        );
        super.onModifySubmit(promise);
    }
}
