import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PatientFile as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import utils from "../../../../utils/Utils";
import { searchPatientFileSchema as schema } from "../../../validations";
import {
    general,
    patientFilesPage as strings,
} from "../../../../constants/strings/fa";
import { setShownModalAction } from "../../../../state/layout/layoutActions";

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
            fileNo: "",
            name: "",
            family: "",
        };
        this.onExcel = this.onExcel.bind(this);
        this.handlePromptSubmit = this.handlePromptSubmit.bind(this);
    }

    onLoad() {
        super.onLoad();
        this.fillForm();
    }

    onAction(props) {
        switch (props.action) {
            case "SET_PAGE":
                props.action = null;
                this.onSubmit({
                    fileNo: this.useForm.getValues("fileNo") ?? "",
                    name: this.useForm.getValues("name") ?? "",
                    family: this.useForm.getValues("family") ?? "",
                });

                break;
        }

        super.onAction(props);
    }

    onExcel() {
        window
            .open(
                `${BASE_PATH}/excel/p_files/?file_no=${this.pageState?.props?.fileNo}&name=${this.pageState?.props?.name}&family=${this.pageState?.props?.family}`,
                "_blank"
            )
            .focus();
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

    async fillForm(data = null) {
        this.data = data;
        const promise = this.entity.getPaginate(
            data?.fileNo ?? "",
            data?.name ?? "",
            data?.family ?? "",
            this.pageState.props?.pageNumber ?? 1
        );
        super.fillForm(promise);
    }

    propsIfOK(result) {
        try {
            return {
                items: result.items,
                itemsCount: result.count,
                fileNo: this.data?.fileNo ?? "",
                name: this.data?.name ?? "",
                family: this.data?.family ?? "",
            };
        } catch {}
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
