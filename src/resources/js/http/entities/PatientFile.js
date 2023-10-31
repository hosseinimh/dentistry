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
        homeAddress,
        workAddress,
        tel,
        mobile,
        relativeMobile,
        birthDate,
        birthPlace,
        gender,
        maritialStatus,
        occupation,
        ethnicity,
        education,
        spouseOccupation,
        spouseRelationship,
        childrenNo
    ) {
        return await this.handlePost(`${BASE_URL}/a/p_files/store`, {
            file_no: fileNo,
            first_visit_date: firstVisitDate,
            name,
            family,
            national_no: nationalNo,
            home_address: homeAddress,
            work_address: workAddress,
            tel,
            mobile,
            relative_mobile: relativeMobile,
            birth_date: birthDate,
            birth_place: birthPlace,
            gender,
            maritial_status: maritialStatus,
            occupation,
            ethnicity,
            education,
            spouse_occupation: spouseOccupation,
            spouse_relationship: spouseRelationship,
            children_no: childrenNo,
        });
    }

    async updateForm1(
        id,
        fileNo,
        firstVisitDate,
        name,
        family,
        nationalNo,
        homeAddress,
        workAddress,
        tel,
        mobile,
        relativeMobile,
        birthDate,
        birthPlace,
        gender,
        maritialStatus,
        occupation,
        ethnicity,
        education,
        spouseOccupation,
        spouseRelationship,
        childrenNo
    ) {
        return await this.handlePost(
            `${BASE_URL}/a/p_files/update_form_1/${id}`,
            {
                file_no: fileNo,
                first_visit_date: firstVisitDate,
                name,
                family,
                national_no: nationalNo,
                home_address: homeAddress,
                work_address: workAddress,
                tel,
                mobile,
                relative_mobile: relativeMobile,
                birth_date: birthDate,
                birth_place: birthPlace,
                gender,
                maritial_status: maritialStatus,
                occupation,
                ethnicity,
                education,
                spouse_occupation: spouseOccupation,
                spouse_relationship: spouseRelationship,
                children_no: childrenNo,
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
                chief_compliantHistory: chiefCompliantHistory,
                time_interval: timeInterval,
                referal_history: referalHistory,
                treatment_history: treatmentHistory,
            }
        );
    }
}
