import React from "react";

import {
    FormPage,
    InputDatePickerColumn,
    InputRow,
    InputTextAreaColumn,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const AddPatientFollowUp = () => {
    const pageUtils = new PageUtils();

    return (
        <FormPage pageUtils={pageUtils}>
            <InputRow>
                <InputDatePickerColumn
                    field="date"
                    showLabel={true}
                    fullRow={false}
                />
                <div></div>
                <div></div>
                <div></div>
            </InputRow>
            <InputTextAreaColumn field="result" showLabel={true} />
        </FormPage>
    );
};

export default AddPatientFollowUp;
