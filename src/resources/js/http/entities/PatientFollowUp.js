import { BASE_URL, PAGE_ITEMS } from "../../constants";
import Entity from "./Entity";

export class PatientFollowUp extends Entity {
    constructor() {
        super();
    }

    async getPaginate(patientFileId, _pn = 1, _pi = PAGE_ITEMS) {
        return await this.handlePost(
            `${BASE_URL}/u/p_f_ups/${[patientFileId]}`,
            {
                _pn,
                _pi,
            }
        );
    }

    async get(id) {
        return await this.handlePost(`${BASE_URL}/u/p_f_ups/show/${id}`);
    }

    async store(patientFileId, date, result) {
        return await this.handlePost(
            `${BASE_URL}/a/p_f_ups/store/${patientFileId}`,
            {
                date,
                result,
            }
        );
    }

    async update(id, date, result) {
        return await this.handlePost(`${BASE_URL}/a/p_f_ups/update/${id}`, {
            date,
            result,
        });
    }

    async delete(id) {
        return await this.handlePost(`${BASE_URL}/a/p_f_ups/delete/${id}`);
    }
}
