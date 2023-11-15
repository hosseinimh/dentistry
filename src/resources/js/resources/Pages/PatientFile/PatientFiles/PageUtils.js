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
            searchFields: null,
        };
        this.onExcel = this.onExcel.bind(this);
        this.handlePromptSubmit = this.handlePromptSubmit.bind(this);
    }

    onLoad() {
        super.onLoad();
        this.fillForm(this.getSearchFields());
    }

    onAction(props) {
        switch (props.action) {
            case "SET_PAGE":
                props.action = null;
                this.onSubmit(this.getSearchFields());

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
        let searchFields = this.pageState?.props?.searchFields;
        let url = `${BASE_PATH}/excel/p_files?file_no=${searchFields?.fileNo}&name=${searchFields?.name}&family=${searchFields?.family}&blood_disease_type=${searchFields?.bloodDiseaseType}&hospitalization_reason=${searchFields?.hospitalizationReason}&continuing_drug=${searchFields?.continuingDrug}&weekly_drug=${searchFields?.weeklyDrug}&cancer_type=${searchFields?.cancerType}&radiation_place=${searchFields?.radiationPlace}&pregnancy_week=${searchFields?.pregnancyWeek}&pregnancy_num=${searchFields?.pregnancyNum}&pregnancy_rank=${searchFields?.pregnancyRank}&ad_explanation=${searchFields?.adExplanation}&sleep_status=${searchFields?.sleepStatus}&functional_capacity=${searchFields?.functionalCapacity}&use_tobacco_duration=${searchFields?.useTobaccoDuration}&use_tobacco_type=${searchFields?.useTobaccoType}&use_drug_duration=${searchFields?.useDrugDuration}&use_drug_type=${searchFields?.useDrugType}&retromolar_area=${searchFields?.retromolarArea}&gums=${searchFields?.gums}&toothless_ridge=${searchFields?.toothlessRidge}&hard_soft_palate=${searchFields?.hardSoftPalate}&tongue_dorsal=${searchFields?.tongueDorsal}&tongue_ventral=${searchFields?.tongueVentral}&tongue_pharyngeal=${searchFields?.tonguePharyngeal}&neurological_changes=${searchFields?.neurologicalChanges}&salivary_grand_examination=${searchFields?.salivaryGrandExamination}&dental_changes_examination=${searchFields?.dentalChangesExamination}&probable_diagnosis=${searchFields?.probableDiagnosis}&difinitive_diagnosis=${searchFields?.difinitiveDiagnosis}&final_treatment_plan=${searchFields?.finalTreatmentPlan}&assistant=${searchFields?.assistant}&master=${searchFields?.master}`;
        if (searchFields?.birthDate) {
            url = `${url}&birth_date=${searchFields.birthDate}`;
        }
        if (searchFields?.lesionClassification) {
            url = `${url}&lesion_classification=${searchFields.lesionClassification}`;
        }
        if (searchFields?.specialLesionClassification) {
            url = `${url}&special_lesion_classification=${searchFields.specialLesionClassification}`;
        }
        if (searchFields?.systemicDiseaseHistory) {
            url = `${url}&systemic_disease_history=${searchFields.systemicDiseaseHistory}`;
        }
        if (searchFields?.tobaccoUse) {
            url = `${url}&tobacco_use=${searchFields.tobaccoUse}`;
        } else {
            url = `${url}&tobacco_use=0`;
        }
        if (searchFields?.drugUse) {
            url = `${url}&drug_use=${searchFields.drugUse}`;
        } else {
            url = `${url}&drug_use=0`;
        }
        if (searchFields?.alcohol) {
            url = `${url}&alcohol=${searchFields.alcohol}`;
        } else {
            url = `${url}&alcohol=0`;
        }
        window.open(url, "_blank").focus();
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

    getSearchFields = () => {
        let searchFields = {
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
            bloodDiseaseType: this.useForm.getValues("bloodDiseaseType") ?? "",
            hospitalizationReason:
                this.useForm.getValues("hospitalizationReason") ?? "",
            continuingDrug: this.useForm.getValues("continuingDrug") ?? "",
            weeklyDrug: this.useForm.getValues("weeklyDrug") ?? "",
            cancerType: this.useForm.getValues("cancerType") ?? "",
            radiationPlace: this.useForm.getValues("radiationPlace") ?? "",
            pregnancyWeek: this.useForm.getValues("pregnancyWeek") ?? "",
            pregnancyNum: this.useForm.getValues("pregnancyNum") ?? "",
            pregnancyRank: this.useForm.getValues("pregnancyRank") ?? "",
            adExplanation: this.useForm.getValues("adExplanation") ?? "",
            sleepStatus: this.useForm.getValues("sleepStatus") ?? "",
            functionalCapacity:
                this.useForm.getValues("functionalCapacity") ?? "",
            tobaccoUsage: this.useForm.getValues("tobaccoUsage"),
            useTobaccoDuration:
                this.useForm.getValues("useTobaccoDuration") ?? "",
            useTobaccoType: this.useForm.getValues("useTobaccoType") ?? "",
            drugUsage: this.useForm.getValues("drugUsage"),
            useDrugDuration: this.useForm.getValues("useDrugDuration") ?? "",
            useDrugType: this.useForm.getValues("useDrugType") ?? "",
            alcoholUsage: this.useForm.getValues("alcoholUsage"),
            retromolarArea: this.useForm.getValues("retromolarArea") ?? "",
            gums: this.useForm.getValues("gums") ?? "",
            toothlessRidge: this.useForm.getValues("toothlessRidge") ?? "",
            hardSoftPalate: this.useForm.getValues("hardSoftPalate") ?? "",
            tongueDorsal: this.useForm.getValues("tongueDorsal") ?? "",
            tongueVentral: this.useForm.getValues("tongueVentral") ?? "",
            tonguePharyngeal: this.useForm.getValues("tonguePharyngeal") ?? "",
            neurologicalChanges:
                this.useForm.getValues("neurologicalChanges") ?? "",
            salivaryGrandExamination:
                this.useForm.getValues("salivaryGrandExamination") ?? "",
            dentalChangesExamination:
                this.useForm.getValues("dentalChangesExamination") ?? "",
            probableDiagnosis:
                this.useForm.getValues("probableDiagnosis") ?? "",
            difinitiveDiagnosis:
                this.useForm.getValues("difinitiveDiagnosis") ?? "",
            finalTreatmentPlan:
                this.useForm.getValues("finalTreatmentPlan") ?? "",
            assistant: this.useForm.getValues("assistant") ?? "",
            master: this.useForm.getValues("master") ?? "",
        };
        searchFields.birthDate = searchFields.birthDate.replaceAll("/", "");
        if (searchFields.birthDate === "") {
            searchFields.birthDate = undefined;
        }
        searchFields.lesionClassification =
            searchFields.lesionClassification?.length > 0
                ? searchFields.lesionClassification.filter(
                      (item) => item in LESION_CLASSIFICATION
                  )
                : null;
        searchFields.lesionClassification =
            searchFields.lesionClassification?.length > 0
                ? searchFields.lesionClassification
                      .map((item) => LESION_CLASSIFICATION[item])
                      .join("|")
                : null;
        searchFields.specialLesionClassification =
            searchFields.specialLesionClassification?.length > 0
                ? searchFields.specialLesionClassification.filter(
                      (item) => item in SPECIAL_LESION_CLASSIFICATION
                  )
                : null;
        searchFields.specialLesionClassification =
            searchFields.specialLesionClassification?.length > 0
                ? searchFields.specialLesionClassification
                      .map((item) => SPECIAL_LESION_CLASSIFICATION[item])
                      .join("|")
                : null;
        searchFields.systemicDiseaseHistory =
            searchFields.systemicDiseaseHistory?.length > 0
                ? searchFields.systemicDiseaseHistory.filter(
                      (item) => item in SYSTEMIC_DISEASE_HISTORY
                  )
                : null;
        searchFields.systemicDiseaseHistory =
            searchFields.systemicDiseaseHistory?.length > 0
                ? searchFields.systemicDiseaseHistory
                      .map((item) => SYSTEMIC_DISEASE_HISTORY[item])
                      .join("|")
                : null;
        searchFields.bloodDiseaseType =
            searchFields.systemicDiseaseHistory?.includes("blood_disease")
                ? searchFields.bloodDiseaseType
                : "";
        searchFields.hospitalizationReason =
            searchFields.systemicDiseaseHistory?.includes(
                "hospitalization_history"
            )
                ? searchFields.hospitalizationReason
                : "";
        searchFields.cancerType = searchFields.systemicDiseaseHistory?.includes(
            "cancer"
        )
            ? searchFields.cancerType
            : "";
        searchFields.radiationPlace =
            searchFields.systemicDiseaseHistory?.includes("chemotherapy")
                ? searchFields.radiationPlace
                : "";
        searchFields.pregnancyWeek =
            searchFields.systemicDiseaseHistory?.includes("pregnancy")
                ? searchFields.pregnancyWeek
                : "";
        searchFields.pregnancyNum =
            searchFields.systemicDiseaseHistory?.includes("pregnancy")
                ? searchFields.pregnancyNum
                : "";
        searchFields.pregnancyRank =
            searchFields.systemicDiseaseHistory?.includes("pregnancy")
                ? searchFields.pregnancyRank
                : "";
        searchFields.adExplanation =
            searchFields.systemicDiseaseHistory?.includes("artificial_device")
                ? searchFields.adExplanation
                : "";
        searchFields.tobaccoUsage = searchFields.tobaccoUsage ? 1 : 0;
        searchFields.useTobaccoDuration = searchFields.tobaccoUsage
            ? searchFields.useTobaccoDuration
            : "";
        searchFields.useTobaccoType = searchFields.tobaccoUsage
            ? searchFields.useTobaccoType
            : "";
        searchFields.drugUsage = searchFields.drugUsage ? 1 : 0;
        searchFields.useDrugDuration = searchFields.drugUsage
            ? searchFields.useDrugDuration
            : "";
        searchFields.useDrugType = searchFields.drugUsage
            ? searchFields.useDrugType
            : "";
        searchFields.alcoholUsage = searchFields.alcoholUsage ? 1 : 0;
        return searchFields;
    };

    async fillForm(data = null) {
        this.data = data;
        const promise = this.entity.getPaginate(
            data.fileNo,
            data.name,
            data.family,
            data.birthDate,
            data.lesionClassification,
            data.specialLesionClassification,
            data.systemicDiseaseHistory,
            data.bloodDiseaseType,
            data.hospitalizationReason,
            data.continuingDrug,
            data.weeklyDrug,
            data.cancerType,
            data.radiationPlace,
            data.pregnancyWeek,
            data.pregnancyNum,
            data.pregnancyRank,
            data.adExplanation,
            data.sleepStatus,
            data.functionalCapacity,
            data.tobaccoUsage,
            data.tobaccoUsage,
            data.tobaccoUsage,
            data.drugUsage,
            data.drugUsage,
            data.drugUsage,
            data.alcoholUsage,
            data.retromolarArea,
            data.gums,
            data.toothlessRidge,
            data.hardSoftPalate,
            data.tongueDorsal,
            data.tongueVentral,
            data.tonguePharyngeal,
            data.neurologicalChanges,
            data.salivaryGrandExamination,
            data.dentalChangesExamination,
            data.probableDiagnosis,
            data.difinitiveDiagnosis,
            data.finalTreatmentPlan,
            data.assistant,
            data.master,
            this.pageState.props?.pageNumber ?? 1
        );
        this.dispatch(setPagePropsAction({ searchFields: { ...data } }));
        super.fillForm(promise);
    }

    propsIfOK(result) {
        try {
            return {
                items: result.items,
                itemsCount: result.count,
            };
        } catch {}
    }

    onSubmit() {
        this.onSendRequest();
        this.fillForm(this.getSearchFields());
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
