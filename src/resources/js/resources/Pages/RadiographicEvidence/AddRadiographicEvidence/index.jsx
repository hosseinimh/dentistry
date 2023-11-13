import React from "react";

import {
    FormPage,
    InputFileColumn,
    InputTextAreaColumn,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const AddRadiographicEvidence = () => {
    const pageUtils = new PageUtils();

    return (
        <FormPage pageUtils={pageUtils}>
            <InputTextAreaColumn
                field="radiographicEvidence"
                showLabel={true}
            />
            <InputFileColumn
                field="file"
                accept=".jpg, .jpeg, .png"
                file={pageUtils?.pageState?.props?.file}
                onChangeFile={(e) => pageUtils.onChangeFile(e)}
                containerStyle={{
                    maxWidth: "inherit",
                    marginBottom: "0",
                }}
            />
        </FormPage>
    );
};

export default AddRadiographicEvidence;
