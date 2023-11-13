import { useForm } from "react-hook-form";

import { PatientFollowUp as Entity } from "../../../../http/entities";
import { BasePageUtils } from "../../../../utils/BasePageUtils";
import { BASE_PATH, MESSAGE_TYPES } from "../../../../constants";
import utils from "../../../../utils/Utils";
import {
    general,
    patientFollowUpsPage as strings,
} from "../../../../constants/strings/fa";
import { setPageTitleAction } from "../../../../state/page/pageActions";
import { setMessageAction } from "../../../../state/message/messageActions";
import { setShownModalAction } from "../../../../state/layout/layoutActions";

export class PageUtils extends BasePageUtils {
    constructor() {
        const form = useForm();
        super("PatientFollowUps", strings, form);
        this.entity = new Entity();
        this.initialPageProps = {
            pageNumber: 1,
            item: null,
            items: null,
            action: null,
        };
        this.callbackUrl = `${BASE_PATH}/p_files`;
        this.handlePromptSubmit = this.handlePromptSubmit.bind(this);
    }

    onLoad() {
        this.navigateIfNotValidateParams();
        super.onLoad();
        this.fillForm(this.pageState.params);
    }

    onRemove(e, item) {
        e.stopPropagation();
        this.promptItem = item;
        this.dispatch(
            setShownModalAction("promptModal", {
                title: strings.removeMessageTitle,
                description: `${item.date} - ${item.result?.substring(
                    0,
                    100
                )} ...`,
                submitTitle: general.yes,
                cancelTitle: general.no,
                onSubmit: this.handlePromptSubmit,
            })
        );
    }

    navigateIfNotValidateParams() {
        this.navigateIfNotValidId(this.pageState?.params?.patientFileId);
    }

    addAction() {
        this.navigate(
            `${BASE_PATH}/p_f_ups/add/${this.pageState.params.patientFileId}`
        );
    }

    editAction({ id }) {
        if (utils.isId(id)) {
            this.navigate(`${BASE_PATH}/p_f_ups/edit/${id}`);
        }
    }

    async fillForm(data) {
        const promise = this.entity.getPaginate(
            data.patientFileId,
            this.pageState.props?.pageNumber ?? 1
        );
        super.fillForm(promise);
    }

    propsIfOK(result) {
        try {
            this.dispatch(
                setPageTitleAction(
                    `${strings._title} [ ${result.patientFile.fileNo} - ${result.patientFile.name} ${result.patientFile.family}, ${result.patientFile.nationalNo} ]`,
                    strings._subTitle
                )
            );
            return {
                items: result.items,
                patientFile: result.patientFile,
                itemsCount: result.count,
            };
        } catch {}
    }

    handleFetchResultIfNull() {
        this.dispatch(
            setMessageAction(
                this.entity.errorMessage,
                MESSAGE_TYPES.ERROR,
                this.entity.errorCode,
                false
            )
        );
        this.navigate(this.callbackUrl);
    }

    handlePromptSubmit(result) {
        if (result === true) {
            const promise = this.entity.delete(this.promptItem?.id);
            super.onSelfSubmit(promise, {
                patientFileId: this.pageState.params.patientFileId,
            });
        }
    }
}
