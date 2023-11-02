import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PatientFile as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { addPatientFileSchema as schema } from "../../../validations";
import { addPatientFilePage as strings } from "../../../../constants/strings/fa";
import { BASE_PATH } from "../../../../constants";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        super("AddPatientFile", strings, form);
        this.entity = new Entity();
        this.callbackUrl = `${BASE_PATH}/p_files`;
    }

    onLoad() {
        super.onLoad();
        this.fillForm();
    }

    async fillForm() {
        try {
            this.handleFetchResult();
        } catch {}
    }

    async fetchItem(id) {
        return await this.entity.get(id);
    }

    handleFetchResult() {
        this.useForm.setValue("childrenNo", 0);
    }

    async onSubmit(data) {
        const promise = this.entity.store(
            data.fileNo,
            data.firstVisitDate.replaceAll("/", ""),
            data.name,
            data.family,
            data.nationalNo,
            data.birthDate.replaceAll("/", ""),
            data.birthPlace,
            data.occupation,
            data.gender,
            data.maritialStatus,
            data.ethnicity,
            data.education,
            data.spouseOccupation,
            data.spouseRelationship,
            data.childrenNo,
            data.tel,
            data.mobile,
            data.relativeMobile,
            data.homeAddress,
            data.workAddress
        );
        super.onModifySubmit(promise);
    }
}
