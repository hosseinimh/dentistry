import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PatientFile as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH, TOMPOROMANDIBULAR_JOINT } from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import { editPatientFileForm4Schema as schema } from "../../../validations";
import { editPatientFileForm4 as strings } from "../../../../constants/strings/fa";
import {
    setPagePropsAction,
    setPageTitleAction,
} from "../../../../state/page/pageActions";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm({
            resolver: yupResolver(schema),
        });
        super("EditPatientFileForm4", strings, form);
        this.entity = new Entity();
        this.initialPageProps = {
            item8: false,
        };
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
        this.useForm.setValue("faceAssymetry", result.item.faceAssymetry);
        this.useForm.setValue("facePigmentation", result.item.facePigmentation);
        this.useForm.setValue(
            "faceOtherPathalogical",
            result.item.faceOtherPathalogical
        );
        this.useForm.setValue("neckAssymetry", result.item.neckAssymetry);
        this.useForm.setValue(
            "neckTyExamination",
            result.item.neckTyExamination
        );
        this.useForm.setValue("lymphNodes", result.item.lymphNodes);
        this.useForm.setValue(
            "tomporomandibularJoint",
            result.item.tomporomandibularJoint
        );
        this.useForm.setValue(
            "otherSignsTMJDescription",
            result.item.otherSignsTMJDescription
        );
        this.useForm.setValue(
            "intraOralExamination",
            result.item.intraOralExamination
        );
        this.useForm.setValue("retromolarArea", result.item.retromolarArea);
        this.useForm.setValue("gums", result.item.gums);
        this.useForm.setValue("toothlessRidge", result.item.toothlessRidge);
        this.useForm.setValue("hardSoftPalate", result.item.hardSoftPalate);
        this.useForm.setValue("tongueDorsal", result.item.tongueDorsal);
        this.useForm.setValue("tongueVentral", result.item.tongueVentral);
        this.useForm.setValue("tonguePharyngeal", result.item.tonguePharyngeal);
        this.useForm.setValue(
            "neurologicalChanges",
            result.item.neurologicalChanges
        );
        this.useForm.setValue(
            "salivaryGrandExamination",
            result.item.salivaryGrandExamination
        );
        this.useForm.setValue(
            "dentalChangesExamination",
            result.item.dentalChangesExamination
        );
    }

    onSetItem(item, value) {
        let props = this.pageState?.props;
        props[item] = value;
        this.dispatch(setPagePropsAction(props));
    }

    async onSubmit(data) {
        let tomporomandibularJoint =
            data.tomporomandibularJoint?.length > 0
                ? data.tomporomandibularJoint.filter(
                      (item) => item in TOMPOROMANDIBULAR_JOINT
                  )
                : null;
        tomporomandibularJoint =
            tomporomandibularJoint?.length > 0
                ? tomporomandibularJoint
                      .map((item) => TOMPOROMANDIBULAR_JOINT[item])
                      .join("|")
                : null;
        const promise = this.entity.updateForm4(
            this.pageState.params.patientFileId,
            data.faceAssymetry,
            data.facePigmentation,
            data.faceOtherPathalogical,
            data.neckAssymetry,
            data.neckTyExamination,
            data.lymphNodes,
            tomporomandibularJoint,
            tomporomandibularJoint?.includes("other_signs_tmj")
                ? data.otherSignsTMJDescription
                : "",
            data.intraOralExamination,
            data.retromolarArea,
            data.gums,
            data.toothlessRidge,
            data.hardSoftPalate,
            data.tongueDorsal,
            data.tongueVentral,
            data.tonguePharyngeal,
            data.neurologicalChanges,
            data.salivaryGrandExamination,
            data.dentalChangesExamination
        );
        super.onModifySubmit(promise);
    }
}
