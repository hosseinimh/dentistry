import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PatientFile as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH, SYSTEMIC_DISEASE_HISTORY } from "../../../../constants";
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
        this.initialPageProps = {
            item8: false,
        };
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
                `${strings._title} [ ${result.item.name} ${result.item.family} - ${result.item.fileNo} ]`,
                strings._subTitle
            )
        );
        this.useForm.setValue(
            "systemicDiseaseHistory",
            result.item.systemicDiseaseHistory
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
        const promise = this.entity.updateForm3(
            this.pageState.params.patientFileId,
            systemicDiseaseHistory,
            systemicDiseaseHistory?.includes("item_8")
                ? data.item8Description
                : "",
            systemicDiseaseHistory?.includes("item_15")
                ? data.item15Description
                : "",
            systemicDiseaseHistory?.includes("item_16")
                ? data.item16Description
                : "",
            systemicDiseaseHistory?.includes("item_17")
                ? data.item17Description
                : "",
            systemicDiseaseHistory?.includes("item_20")
                ? data.item20Description
                : "",
            systemicDiseaseHistory?.includes("item_21")
                ? data.item21Description
                : "",
            systemicDiseaseHistory?.includes("item_25")
                ? data.item25_1Description
                : "",
            systemicDiseaseHistory?.includes("item_25")
                ? data.item25_2Description
                : "",
            systemicDiseaseHistory?.includes("item_25")
                ? data.item25_3Description
                : "",
            systemicDiseaseHistory?.includes("item_30")
                ? data.item30Description
                : "",
            systemicDiseaseHistory?.includes("item_32")
                ? data.item32Description
                : "",
            systemicDiseaseHistory?.includes("item_34")
                ? data.item34Description
                : "",
            data.tobaccoUse ? 1 : 0,
            data.tobaccoUse ? data.useTobaccoDuration : "",
            data.tobaccoUse ? data.useTobaccoType : "",
            data.drugUse ? 1 : 0,
            data.drugUse ? data.useDrugDuration : "",
            data.drugUse ? data.useDrugType : "",
            data.alcohol ? 1 : 0,
            data.pulse,
            data.bodyTemp,
            data.bloodPressure,
            data.resporate,
            data.weight,
            data.height,
            data.bmi
        );
        super.onModifySubmit(promise);
    }
}
