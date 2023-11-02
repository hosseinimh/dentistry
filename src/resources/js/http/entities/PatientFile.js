import { BASE_URL, PAGE_ITEMS } from "../../constants";
import Entity from "./Entity";

export class PatientFile extends Entity {
    constructor() {
        super();
    }

    async getPaginate(fileNo, name, family, _pn = 1, _pi = PAGE_ITEMS) {
        return await this.handlePost(`${BASE_URL}/u/p_files`, {
            fileNo,
            name,
            family,
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
        item8Description,
        item15Description,
        item16Description,
        item17Description,
        item20Description,
        item21Description,
        item25_1Description,
        item25_2Description,
        item25_3Description,
        item30Description,
        item32Description,
        item34Description,
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
                item_8_description: item8Description,
                item_15_description: item15Description,
                item_16_description: item16Description,
                item_17_description: item17Description,
                item_20_description: item20Description,
                item_21_description: item21Description,
                item_25_1_description: item25_1Description,
                item_25_2_description: item25_2Description,
                item_25_3_description: item25_3Description,
                item_30_description: item30Description,
                item_32_description: item32Description,
                item_34_description: item34Description,
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
        intraOralExamination,
        retromolarArea,
        gums,
        toothlessRidge,
        hardSoftPalate,
        tongueDorsal,
        tongueVentral,
        tonguePharyngeal,
        neurologicalChanges,
        salivaryGrandExamination,
        dentalChangesExamination
    ) {
        return await this.handlePost(
            `${BASE_URL}/a/p_files/update_form_4/${id}`,
            {
                face_assymetry: faceAssymetry,
                face_pigmentation: facePigmentation,
                face_other_pathalogical: faceOtherPathalogical,
                neck_assymetry: neckAssymetry,
                neck_ty_examination: neckTyExamination,
                lymph_nodes: lymphNodes,
                tomporomandibular_joint: tomporomandibularJoint,
                other_signs_tmj_description: otherSignsTMJDescription,
                intra_oral_examination: intraOralExamination,
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
            }
        );
    }
}
