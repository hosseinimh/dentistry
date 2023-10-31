import React from "react";

import {
    InputTextColumn,
    InputRow,
    InputDatePickerColumn,
    InputSelectColumn,
    BlankPage,
} from "../../../components";
import { PageUtils } from "./PageUtils";
import PatientFileHeader from "../components/PatientFileHeader";
import { editPatientFileForm1 as strings } from "../../../../constants/strings/fa";
import {
    educationTypes,
    ethnicityTypes,
    genderTypes,
    maritialStatuses,
} from "../../../../constants/lists";
import PatientFileFooter from "../components/PatientFileFooter";

const EditPatientFileForm1 = () => {
    const pageUtils = new PageUtils();

    return (
        <BlankPage pageUtils={pageUtils}>
            <div className="section fix-mr15">
                <PatientFileHeader />
                <div className="block pd-30">
                    <div className="block-title pd-d-20">
                        <h3>{strings.section1}</h3>
                        <div className="block-border"></div>
                    </div>
                    <InputRow>
                        <InputTextColumn
                            field="fileNo"
                            fullRow={false}
                            showLabel
                            icon={"icon-document-text4"}
                        />
                        <div></div>
                        <div></div>
                        <div></div>
                    </InputRow>
                    <InputRow>
                        <InputDatePickerColumn
                            field="firstVisitDate"
                            showLabel
                            fullRow={false}
                        />
                        <InputTextColumn
                            field="name"
                            fullRow={false}
                            showLabel
                            icon={"icon-user"}
                        />
                        <InputTextColumn
                            field="family"
                            fullRow={false}
                            showLabel
                            icon={"icon-user"}
                        />
                        <InputTextColumn
                            field="nationalNo"
                            fullRow={false}
                            type="number"
                            textAlign="left"
                            showLabel
                            icon={"icon-personalcard4"}
                        />
                    </InputRow>
                    <InputRow>
                        <InputDatePickerColumn
                            field="birthDate"
                            showLabel
                            fullRow={false}
                        />
                        <InputTextColumn
                            field="birthPlace"
                            fullRow={false}
                            showLabel
                            icon={"icon-location4"}
                        />
                        <InputTextColumn
                            field="occupation"
                            showLabel
                            icon={"icon-personalcard4"}
                        />
                        <InputSelectColumn
                            field="gender"
                            showLabel
                            items={genderTypes}
                            fullRow={false}
                        />
                    </InputRow>
                    <InputRow>
                        <InputSelectColumn
                            field="maritialStatus"
                            showLabel
                            items={maritialStatuses}
                            fullRow={false}
                        />
                        <InputSelectColumn
                            field="ethnicity"
                            showLabel
                            items={ethnicityTypes}
                            fullRow={false}
                        />
                        <InputSelectColumn
                            field="education"
                            showLabel
                            items={educationTypes}
                            fullRow={false}
                        />
                        <InputTextColumn
                            field="spouseOccupation"
                            showLabel
                            icon={"icon-personalcard4"}
                        />
                    </InputRow>
                    <InputRow>
                        <InputTextColumn
                            field="spouseRelationship"
                            showLabel
                            icon={"icon-personalcard4"}
                        />
                        <InputTextColumn
                            field="childrenNo"
                            showLabel
                            type="number"
                            textAlign="left"
                            icon={"icon-personalcard4"}
                        />

                        <div></div>
                        <div></div>
                    </InputRow>
                    <div className="block-title pd-d-20">
                        <h3>{strings.section2}</h3>
                        <div className="block-border"></div>
                    </div>
                    <InputRow>
                        <InputTextColumn
                            field="tel"
                            fullRow={false}
                            type="number"
                            textAlign="left"
                            showLabel
                            icon={"icon-call-calling"}
                        />
                        <InputTextColumn
                            field="mobile"
                            fullRow={false}
                            type="number"
                            textAlign="left"
                            showLabel
                            icon={"icon-mobile"}
                        />
                        <InputTextColumn
                            field="relativeMobile"
                            type="number"
                            textAlign="left"
                            fullRow={false}
                            showLabel
                            icon={"icon-mobile"}
                        />
                        <div></div>
                    </InputRow>
                    <InputTextColumn
                        field="homeAddress"
                        showLabel
                        icon={"icon-location4"}
                    />
                    <InputTextColumn
                        field="workAddress"
                        showLabel
                        icon={"icon-location4"}
                    />
                    <div className="block-border"></div>
                    <PatientFileFooter pageUtils={pageUtils} />
                </div>
            </div>
        </BlankPage>
    );
};

export default EditPatientFileForm1;
