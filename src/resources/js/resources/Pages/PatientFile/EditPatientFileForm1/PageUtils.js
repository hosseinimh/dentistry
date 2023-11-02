import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PatientFile as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editPatientFileForm1Schema as schema } from "../../../validations";
import { editPatientFileForm1 as strings } from "../../../../constants/strings/fa";
import {
    setPagePropsAction,
    setPageTitleAction,
} from "../../../../state/page/pageActions";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        super("EditPatientFileForm1", strings, form);
        this.entity = new Entity();
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
        this.useForm.setValue("fileNo", result.item.fileNo);
        this.useForm.setValue("firstVisitDate", result.item.firstVisitDate);
        this.useForm.setValue("name", result.item.name);
        this.useForm.setValue("family", result.item.family);
        this.useForm.setValue("nationalNo", result.item.nationalNo);
        this.useForm.setValue("birthDate", result.item.birthDate);
        this.useForm.setValue("birthPlace", result.item.birthPlace);
        this.useForm.setValue("occupation", result.item.occupation);
        this.useForm.setValue("gender", result.item.gender);
        this.useForm.setValue("maritialStatus", result.item.maritialStatus);
        this.useForm.setValue("ethnicity", result.item.ethnicity);
        this.useForm.setValue("education", result.item.education);
        this.useForm.setValue("spouseOccupation", result.item.spouseOccupation);
        this.useForm.setValue(
            "spouseRelationship",
            result.item.spouseRelationship
        );
        this.useForm.setValue("childrenNo", result.item.childrenNo);
        this.useForm.setValue("tel", result.item.tel);
        this.useForm.setValue("mobile", result.item.mobile);
        this.useForm.setValue("relativeMobile", result.item.relativeMobile);
        this.useForm.setValue("homeAddress", result.item.homeAddress);
        this.useForm.setValue("workAddress", result.item.workAddress);
    }

    async onSubmit(data) {
        const promise = this.entity.updateForm1(
            this.pageState.params.patientFileId,
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
