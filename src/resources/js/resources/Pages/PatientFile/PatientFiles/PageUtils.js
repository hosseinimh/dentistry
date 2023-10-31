import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PatientFile as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH } from "../../../../constants";
import utils from "../../../../utils/Utils";
import { searchPatientFileSchema as schema } from "../../../validations";
import { patientFilesPage as strings } from "../../../../constants/strings/fa";

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
        };
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
                    username: this.useForm.getValues("fileNo") ?? "",
                    name: this.useForm.getValues("name") ?? "",
                    family: this.useForm.getValues("family") ?? "",
                });

                break;
        }

        super.onAction(props);
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
        const promise = this.entity.getPaginate(
            data?.fileNo ?? "",
            data?.name ?? "",
            data?.family ?? "",
            this.pageState.props?.pageNumber ?? 1
        );
        super.fillForm(promise);
    }
}
