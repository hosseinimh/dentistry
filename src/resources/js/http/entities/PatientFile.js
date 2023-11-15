import { BASE_URL, PAGE_ITEMS } from "../../constants";
import Entity from "./Entity";

export class PatientFile extends Entity {
    constructor() {
        super();
    }

    async getPaginate(
        fileNo,
        name,
        family,
        birthDate,
        lesionClassification,
        specialLesionClassification,
        systemicDiseaseHistory,
        bloodDiseaseType,
        hospitalizationReason,
        continuingDrug,
        weeklyDrug,
        cancerType,
        radiationPlace,
        pregnancyWeek,
        pregnancyNum,
        pregnancyRank,
        adExplanation,
        sleepStatus,
        functionalCapacity,
        tobaccoUse,
        useTobaccoDuration,
        useTobaccoType,
        drugUse,
        useDrugDuration,
        useDrugType,
        alcohol,
        retromolarArea,
        gums,
        toothlessRidge,
        hardSoftPalate,
        tongueDorsal,
        tongueVentral,
        tonguePharyngeal,
        neurologicalChanges,
        salivaryGrandExamination,
        dentalChangesExamination,
        probableDiagnosis,
        difinitiveDiagnosis,
        finalTreatmentPlan,
        assistant,
        master,
        _pn = 1,
        _pi = PAGE_ITEMS
    ) {
        return await this.handlePost(`${BASE_URL}/u/p_files`, {
            file_no: fileNo,
            name,
            family,
            birth_date: birthDate,
            lesion_classification: lesionClassification,
            special_lesion_classification: specialLesionClassification,
            systemic_disease_history: systemicDiseaseHistory,
            blood_disease_type: bloodDiseaseType,
            hospitalization_reason: hospitalizationReason,
            continuing_drug: continuingDrug,
            weekly_drug: weeklyDrug,
            cancer_type: cancerType,
            radiation_place: radiationPlace,
            pregnancy_week: pregnancyWeek,
            pregnancy_num: pregnancyNum,
            pregnancy_rank: pregnancyRank,
            ad_explanation: adExplanation,
            sleep_status: sleepStatus,
            functional_capacity: functionalCapacity,
            tobacco_use: tobaccoUse,
            use_tobacco_duration: useTobaccoDuration,
            use_tobacco_type: useTobaccoType,
            drug_use: drugUse,
            use_drug_duration: useDrugDuration,
            use_drug_type: useDrugType,
            alcohol,
            retromolar_area: retromolarArea,
            gums,
            toothless_ridge: toothlessRidge,
            hard_soft_palate: hardSoftPalate,
            tongue_dorsal: tongueDorsal,
            tongue_ventral: tongueVentral,
            tongue_pharyngeal: tonguePharyngeal,
            neurological_changes: neurologicalChanges,
            salivary_grand_examination: salivaryGrandExamination,
            dental_changes_examination: dentalChangesExamination,
            probable_diagnosis: probableDiagnosis,
            difinitive_diagnosis: difinitiveDiagnosis,
            final_treatment_plan: finalTreatmentPlan,
            assistant,
            master,
            _pn,
            _pi,
        });
    }

    async get(id) {
        return await this.handlePost(`${BASE_URL}/u/p_files/show/${id}`);
    }

    async store(
        fileNo,
        firstVisitDate,
        name,
        family,
        nationalNo,
        birthDate,
        birthPlace,
        occupation,
        gender,
        maritialStatus,
        ethnicity,
        education,
        spouseOccupation,
        spouseRelationship,
        childrenNo,
        tel,
        mobile,
        relativeMobile,
        homeAddress,
        workAddress
    ) {
        return await this.handlePost(`${BASE_URL}/a/p_files/store`, {
            file_no: fileNo,
            first_visit_date: firstVisitDate,
            name,
            family,
            national_no: nationalNo,
            birth_date: birthDate,
            birth_place: birthPlace,
            occupation,
            gender,
            maritial_status: maritialStatus,
            ethnicity,
            education,
            spouse_occupation: spouseOccupation,
            spouse_relationship: spouseRelationship,
            children_no: childrenNo,
            tel,
            mobile,
            relative_mobile: relativeMobile,
            home_address: homeAddress,
            work_address: workAddress,
        });
    }

    async updateForm1(
        id,
        fileNo,
        firstVisitDate,
        name,
        family,
        nationalNo,
        birthDate,
        birthPlace,
        occupation,
        gender,
        maritialStatus,
        ethnicity,
        education,
        spouseOccupation,
        spouseRelationship,
        childrenNo,
        tel,
        mobile,
        relativeMobile,
        homeAddress,
        workAddress
    ) {
        return await this.handlePost(
            `${BASE_URL}/a/p_files/update_form_1/${id}`,
            {
                file_no: fileNo,
                first_visit_date: firstVisitDate,
                name,
                family,
                national_no: nationalNo,
                birth_date: birthDate,
                birth_place: birthPlace,
                occupation,
                gender,
                maritial_status: maritialStatus,
                ethnicity,
                education,
                spouse_occupation: spouseOccupation,
                spouse_relationship: spouseRelationship,
                children_no: childrenNo,
                tel,
                mobile,
                relative_mobile: relativeMobile,
                home_address: homeAddress,
                work_address: workAddress,
            }
        );
    }

    async updateForm2(
        id,
        lesionClassification,
        patientReferal,
        specialLesionClassification,
        chiefCompliant,
        chiefCompliantHistory,
        timeInterval,
        referalHistory,
        treatmentHistory
    ) {
        return await this.handlePost(
            `${BASE_URL}/a/p_files/update_form_2/${id}`,
            {
                lesion_classification: lesionClassification,
                patient_referal: patientReferal,
                special_lesion_classification: specialLesionClassification,
                chief_compliant: chiefCompliant,
                chief_compliant_history: chiefCompliantHistory,
                time_interval: timeInterval,
                referal_history: referalHistory,
                treatment_history: treatmentHistory,
            }
        );
    }

    async updateForm3(
        id,
        systemicDiseaseHistory,
        bloodDiseaseType,
        hospitalizationReason,
        continuingDrug,
        weeklyDrug,
        cancerType,
        radiationPlace,
        pregnancyWeek,
        pregnancyNum,
        pregnancyRank,
        adExplanation,
        sleepStatus,
        functionalCapacity,
        tobaccoUse,
        useTobaccoDuration,
        useTobaccoType,
        drugUse,
        useDrugDuration,
        useDrugType,
        alcohol,
        pulse,
        bodyTemp,
        bloodPressure,
        resporate,
        weight,
        height,
        bmi,
        familialHistory,
        fcaType
    ) {
        return await this.handlePost(
            `${BASE_URL}/a/p_files/update_form_3/${id}`,
            {
                systemic_disease_history: systemicDiseaseHistory,
                blood_disease_type: bloodDiseaseType,
                hospitalization_reason: hospitalizationReason,
                continuing_drug: continuingDrug,
                weekly_drug: weeklyDrug,
                cancer_type: cancerType,
                radiation_place: radiationPlace,
                pregnancy_week: pregnancyWeek,
                pregnancy_num: pregnancyNum,
                pregnancy_rank: pregnancyRank,
                ad_explanation: adExplanation,
                sleep_status: sleepStatus,
                functional_capacity: functionalCapacity,
                tobacco_use: tobaccoUse,
                use_tobacco_duration: useTobaccoDuration,
                use_tobacco_type: useTobaccoType,
                drug_use: drugUse,
                use_drug_duration: useDrugDuration,
                use_drug_type: useDrugType,
                alcohol,
                pulse,
                body_temp: bodyTemp,
                blood_pressure: bloodPressure,
                resporate,
                weight,
                height,
                bmi,
                familial_history: familialHistory,
                fca_type: fcaType,
            }
        );
    }

    async updateForm4(
        id,
        faceAssymetry,
        facePigmentation,
        faceOtherPathalogical,
        neckAssymetry,
        neckTyExamination,
        lymphNodes,
        tomporomandibularJoint,
        otherSignsTMJDescription,
        retromolarArea,
        gums,
        toothlessRidge,
        hardSoftPalate,
        tongueDorsal,
        tongueVentral,
        tonguePharyngeal,
        neurologicalChanges,
        salivaryGrandExamination,
        dentalChangesExamination,
        dentitionFile,
        dentitionFileAction,
        adultDmft,
        adultD,
        adultM,
        adultT,
        decidiousFile,
        decidiousFileAction,
        decidiousDmft,
        decidiousD,
        decidiousM,
        decidiousT,
        priodontalExamination,
        bop,
        paraclinicalEvidence,
        consultationDeps,
        probableDiagnosis,
        differntialDiagnosis,
        difinitiveDiagnosis,
        systemicConsiderations,
        initialTreatmentPlan,
        finalTreatmentPlan,
        student,
        assistant,
        master,
        completedDate
    ) {
        let data = new FormData();
        data.append("face_assymetry", faceAssymetry);
        data.append("face_pigmentation", facePigmentation);
        data.append("face_other_pathalogical", faceOtherPathalogical);
        data.append("neck_assymetry", neckAssymetry);
        data.append("neck_ty_examination", neckTyExamination);
        data.append("lymph_nodes", lymphNodes);
        if (tomporomandibularJoint) {
            data.append("tomporomandibular_joint", tomporomandibularJoint);
        }
        data.append("other_signs_tmj_description", otherSignsTMJDescription);
        data.append("retromolar_area", retromolarArea);
        data.append("gums", gums);
        data.append("toothless_ridge", toothlessRidge);
        data.append("hard_soft_palate", hardSoftPalate);
        data.append("tongue_dorsal", tongueDorsal);
        data.append("tongue_ventral", tongueVentral);
        data.append("tongue_pharyngeal", tonguePharyngeal);
        data.append("neurological_changes", neurologicalChanges);
        data.append("salivary_grand_examination", salivaryGrandExamination);
        data.append("dental_changes_examination", dentalChangesExamination);
        data.append("dentition_file", dentitionFile);
        data.append("dentition_file_action", dentitionFileAction);
        data.append("adult_dmft", adultDmft);
        data.append("adult_d", adultD);
        data.append("adult_m", adultM);
        data.append("adult_t", adultT);
        data.append("decidious_file", decidiousFile);
        data.append("decidious_file_action", decidiousFileAction);
        data.append("decidious_dmft", decidiousDmft);
        data.append("decidious_d", decidiousD);
        data.append("decidious_m", decidiousM);
        data.append("decidious_t", decidiousT);
        data.append("priodontal_examination", priodontalExamination);
        data.append("bop", bop);
        data.append("paraclinical_evidence", paraclinicalEvidence);
        data.append("consultation_deps", consultationDeps);
        data.append("probable_diagnosis", probableDiagnosis);
        data.append("differntial_diagnosis", differntialDiagnosis);
        data.append("difinitive_diagnosis", difinitiveDiagnosis);
        data.append("systemic_considerations", systemicConsiderations);
        data.append("initial_treatment_plan", initialTreatmentPlan);
        data.append("final_treatment_plan", finalTreatmentPlan);
        data.append("student", student);
        data.append("assistant", assistant);
        data.append("master", master);
        data.append("completed_date", completedDate);
        return await this.handlePostFile(
            `${BASE_URL}/a/p_files/update_form_4/${id}`,
            data
        );
    }

    async delete(id) {
        return await this.handlePost(`${BASE_URL}/a/p_files/delete/${id}`);
    }
}
