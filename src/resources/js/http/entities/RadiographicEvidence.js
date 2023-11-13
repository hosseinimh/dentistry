import { BASE_URL, PAGE_ITEMS } from "../../constants";
import Entity from "./Entity";

export class RadiographicEvidence extends Entity {
    constructor() {
        super();
    }

    async getPaginate(patientFileId, _pn = 1, _pi = PAGE_ITEMS) {
        return await this.handlePost(
            `${BASE_URL}/u/r_evidences/${[patientFileId]}`,
            {
                _pn,
                _pi,
            }
        );
    }

    async get(id) {
        return await this.handlePost(`${BASE_URL}/u/r_evidences/show/${id}`);
    }

    async store(patientFileId, radiographicEvidence, file) {
        let data = new FormData();
        data.append("radiographic_evidence", radiographicEvidence);
        data.append("file", file);
        return await this.handlePostFile(
            `${BASE_URL}/a/r_evidences/store/${patientFileId}`,
            data
        );
    }

    async update(id, radiographicEvidence, file) {
        let data = new FormData();
        data.append("radiographic_evidence", radiographicEvidence);
        data.append("file", file);
        return await this.handlePostFile(
            `${BASE_URL}/a/r_evidences/update/${id}`,
            data
        );
    }

    async delete(id) {
        return await this.handlePost(`${BASE_URL}/a/r_evidences/delete/${id}`);
    }
}
