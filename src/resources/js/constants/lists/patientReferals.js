import { PATIENT_REFERALS } from "../patientReferals";
import { patientReferals as strings } from "../strings/fa";

export const patientReferals = [
    { id: PATIENT_REFERALS.PATIENT, value: strings.patient },
    { id: PATIENT_REFERALS.RELATIVES, value: strings.relatives },
    {
        id: PATIENT_REFERALS.GENRAL_PRACTITIONER,
        value: strings.generalPractitioner,
    },
    { id: PATIENT_REFERALS.GENERAL_DENTIST, value: strings.generalDentist },
    { id: PATIENT_REFERALS.SPECIALIST, value: strings.specialist },
    {
        id: PATIENT_REFERALS.SPECIALIST_DENTIST,
        value: strings.specialitDentist,
    },
];
