import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PatientFile as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import {
    BASE_PATH,
    LESION_CLASSIFICATION,
    SPECIAL_LESION_CLASSIFICATION,
    SYSTEMIC_DISEASE_HISTORY,
} from "../../../../constants";
import utils from "../../../../utils/Utils";
import { searchPatientFileSchema as schema } from "../../../validations";
import {
    general,
    patientFilesPage as strings,
} from "../../../../constants/strings/fa";
import { setShownModalAction } from "../../../../state/layout/layoutActions";
import { setPagePropsAction } from "../../../../state/page/pageActions";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        super("PatientFiles", strings, form);
        this.entity = new Entity();
        this.initialPageProps = {
            pageNumber: 1,
            itemsCount: 0,
            item: null,
            items: null,
            action: null,
            fileNo: "",
            name: "",
            family: "",
            birthDate: "",
            lesionClassification: null,
            specialLesionClassification: null,
            systemicDiseaseHistory: null,
            bloodDiseaseType: "",
            hospitalizationReason: "",
            continuingDrug: null,
            weeklyDrug: "",
            cancerType: "",
            radiationPlace: "",
            pregnancyWeek: "",
            pregnancyNum: "",
            pregnancyRank: "",
            adExplanation: "",
            sleepStatus: "",
            functionalCapacity: "",
            tobaccoUsage: null,
            useTobaccoDuration: "",
            useTobaccoType: "",
            drugUsage: null,
            useDrugDuration: "",
            useDrugType: "",
            alcoholUsage: "",
            retromolarArea: "",
            gums: "",
            toothlessRidge: "",
            hardSoftPalate: "",
            tongueDorsal: "",
            tongueVentral: "",
            tonguePharyngeal: "",
            neurologicalChanges: "",
            salivaryGrandExamination: "",
            dentalChangesExamination: "",
            probableDiagnosis: "",
            difinitiveDiagnosis: "",
            finalTreatmentPlan: "",
            assistant: "",
            master: "",
        };
        this.onExcel = this.onExcel.bind(this);
        this.handlePromptSubmit = this.handlePromptSubmit.bind(this);
    }

    onLoad() {
        super.onLoad();
        this.fillForm();
    }

    onAction(props) {
        switch (props.action) {
            case "SET_PAGE":
                props.action = null;
                this.onSubmit({
                    fileNo: this.useForm.getValues("fileNo") ?? "",
                    name: this.useForm.getValues("name") ?? "",
                    family: this.useForm.getValues("family") ?? "",
                    birthDate: this.useForm.getValues("birthDate") ?? "",
                    lesionClassification: this.useForm.getValues(
                        "lesionClassification"
                    ),
                    specialLesionClassification: this.useForm.getValues(
                        "specialLesionClassification"
                    ),
                    systemicDiseaseHistory: this.useForm.getValues(
                        "systemicDiseaseHistory"
                    ),
                    bloodDiseaseType:
                        this.useForm.getValues("bloodDiseaseType") ?? "",
                    hospitalizationReason:
                        this.useForm.getValues("hospitalizationReason") ?? "",
                    continuingDrug:
                        this.useForm.getValues("continuingDrug") ?? "",
                    weeklyDrug: this.useForm.getValues("weeklyDrug") ?? "",
                    cancerType: this.useForm.getValues("cancerType") ?? "",
                    radiationPlace:
                        this.useForm.getValues("radiationPlace") ?? "",
                    pregnancyWeek:
                        this.useForm.getValues("pregnancyWeek") ?? "",
                    pregnancyNum: this.useForm.getValues("pregnancyNum") ?? "",
                    pregnancyRank:
                        this.useForm.getValues("pregnancyRank") ?? "",
                    adExplanation:
                        this.useForm.getValues("adExplanation") ?? "",
                    sleepStatus: this.useForm.getValues("sleepStatus") ?? "",
                    functionalCapacity:
                        this.useForm.getValues("functionalCapacity") ?? "",
                    tobaccoUsage: this.useForm.getValues("tobaccoUsage"),
                    useTobaccoDuration:
                        this.useForm.getValues("useTobaccoDuration") ?? "",
                    useTobaccoType:
                        this.useForm.getValues("useTobaccoType") ?? "",
                    drugUsage: this.useForm.getValues("drugUsage"),
                    useDrugDuration:
                        this.useForm.getValues("useDrugDuration") ?? "",
                    useDrugType: this.useForm.getValues("useDrugType") ?? "",
                    alcoholUsage: this.useForm.getValues("alcoholUsage") ?? "",
                });

                break;
        }

        super.onAction(props);
    }

    onSetItem(item, value) {
        let props = this.pageState?.props;
        props[item] = value;
        this.dispatch(setPagePropsAction(props));
    }

    onExcel() {
        window
            .open(
                `${BASE_PATH}/excel/p_files/?file_no=${this.pageState?.props?.fileNo}&name=${this.pageState?.props?.name}&family=${this.pageState?.props?.family}`,
                "_blank"
            )
            .focus();
    }

    onRemove(e, item) {
        e.stopPropagation();
        this.promptItem = item;
        this.dispatch(
            setShownModalAction("promptModal", {
                title: strings.removeMessageTitle,
                description: `${item.name} ${item.family} - ${item.nationalNo}`,
                submitTitle: general.yes,
                cancelTitle: general.no,
                onSubmit: this.handlePromptSubmit,
            })
        );
    }

    onRadiographicEvidences(item) {
        this.navigate(`${BASE_PATH}/r_evidences/${item.id}`);
    }

    onPatientFollowUps(item) {
        this.navigate(`${BASE_PATH}/p_f_ups/${item.id}`);
    }

    addAction() {
        this.navigate(`${BASE_PATH}/p_files/add`);
    }

    editAction({ id }) {
        if (utils.isId(id)) {
            this.navigate(`${BASE_PATH}/p_files/edit/form1/${id}`);
        }
    }

    async fillForm(data = null) {
        this.data = data;
        let lesionClassification =
            data?.lesionClassification?.length > 0
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
            data?.specialLesionClassification?.length > 0
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
        let systemicDiseaseHistory =
            data?.systemicDiseaseHistory?.length > 0
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
        const promise = this.entity.getPaginate(
            data?.fileNo,
            data?.name,
            data?.family,
            data?.birthDate?.replaceAll("/", ""),
            lesionClassification,
            specialLesionClassification,
            systemicDiseaseHistory,
            systemicDiseaseHistory?.includes("blood_disease")
                ? data.bloodDiseaseType
                : "",
            systemicDiseaseHistory?.includes("hospitalization_history")
                ? data.hospitalizationReason
                : "",
            data?.continuingDrug,
            data?.weeklyDrug,
            systemicDiseaseHistory?.includes("cancer") ? data?.cancerType : "",
            systemicDiseaseHistory?.includes("chemotherapy")
                ? data?.radiationPlace
                : "",
            systemicDiseaseHistory?.includes("pregnancy")
                ? data?.pregnancyWeek
                : "",
            systemicDiseaseHistory?.includes("pregnancy")
                ? data?.pregnancyNum
                : "",
            systemicDiseaseHistory?.includes("pregnancy")
                ? data?.pregnancyRank
                : "",
            systemicDiseaseHistory?.includes("artificial_device")
                ? data?.adExplanation
                : "",
            data?.sleepStatus,
            data?.functionalCapacity,
            data?.tobaccoUsage ? 1 : 0,
            data?.tobaccoUsage ? data?.useTobaccoDuration : "",
            data?.tobaccoUsage ? data?.useTobaccoType : "",
            data?.drugUsage ? 1 : 0,
            data?.drugUsage ? data?.useDrugDuration : "",
            data?.drugUsage ? data?.useDrugType : "",
            data?.alcoholUsage ? 1 : 0,
            data?.retromolarArea,
            data?.gums,
            data?.toothlessRidge,
            data?.hardSoftPalate,
            data?.tongueDorsal,
            data?.tongueVentral,
            data?.tonguePharyngeal,
            data?.neurologicalChanges,
            data?.salivaryGrandExamination,
            data?.dentalChangesExamination,
            data?.probableDiagnosis,
            data?.difinitiveDiagnosis,
            data?.finalTreatmentPlan,
            data?.assistant,
            data?.master,
            this.pageState.props?.pageNumber ?? 1
        );
        super.fillForm(promise);
    }

    propsIfOK(result) {
        try {
            return {
                items: result.items,
                itemsCount: result.count,
                fileNo: this.data?.fileNo ?? "",
                name: this.data?.name ?? "",
                family: this.data?.family ?? "",
                birthDate: this.data?.birthDate ?? "",
                lesionClassification: this.data.lesionClassification,
                specialLesionClassification:
                    this.data.specialLesionClassification,
                systemicDiseaseHistory: this.data.systemicDiseaseHistory,
                bloodDiseaseType: this.data?.bloodDiseaseType ?? "",
                hospitalizationReason: this.data?.hospitalizationReason ?? "",
                continuingDrug: this.data?.continuingDrug ?? "",
                weeklyDrug: this.data?.weeklyDrug ?? "",
                cancerType: this.data?.cancerType ?? "",
                radiationPlace: this.data?.radiationPlace ?? "",
                pregnancyWeek: this.data?.pregnancyWeek ?? "",
                pregnancyNum: this.data?.pregnancyNum ?? "",
                pregnancyRank: this.data?.pregnancyRank ?? "",
                adExplanation: this.data?.adExplanation ?? "",
                sleepStatus: this.data?.sleepStatus ?? "",
                functionalCapacity: this.data?.functionalCapacity ?? "",
                tobaccoUsage: this.data.tobaccoUsage ? 1 : 0,
                useTobaccoDuration: this.data?.useTobaccoDuration ?? "",
                useTobaccoType: this.data?.useTobaccoType ?? "",
                drugUsage: this.data.drugUsage ? 1 : 0,
                useDrugDuration: this.data?.useDrugDuration ?? "",
                useDrugType: this.data?.useDrugType ?? "",
                alcoholUsage: this.data?.alcoholUsage ? 1 : 0,
            };
        } catch {}
    }

    handlePromptSubmit(result) {
        if (result === true) {
            const promise = this.entity.delete(this.promptItem?.id);
            super.onSelfSubmit(promise, {
                pageNumber: 1,
            });
        }
    }
}
