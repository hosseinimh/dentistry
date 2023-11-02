import React from "react";
import { useSelector } from "react-redux";

import {
    BlankPage,
    InputTextColumn,
    InputCheckboxContainer,
    InputCheckboxColumn,
} from "../../../components";
import { PageUtils } from "./PageUtils";
import PatientFileHeader from "../components/PatientFileHeader";
import {
    editPatientFileForm4 as strings,
    tomporomandibularJoint,
} from "../../../../constants/strings/fa";
import PatientFileFooter from "../components/PatientFileFooter";

const EditPatientFileForm4 = () => {
    const pageState = useSelector((state) => state.pageReducer);
    const pageUtils = new PageUtils();

    return (
        <BlankPage pageUtils={pageUtils}>
            <div className="section fix-mr15">
                <PatientFileHeader />
                <div className="block pd-30">
                    <h3 className="text mb-30">
                        {strings.extraOralExamination}
                    </h3>
                    <h4 className="mb-30">{strings.face}</h4>
                    <InputTextColumn field="faceAssymetry" showLabel />
                    <InputTextColumn field="facePigmentation" showLabel />
                    <InputTextColumn field="faceOtherPathalogical" showLabel />
                    <h4 className="mt-20 mb-30">{strings.neck}</h4>
                    <InputTextColumn field="neckAssymetry" showLabel />
                    <InputTextColumn field="neckTyExamination" showLabel />
                    <InputTextColumn field="lymphNodes" showLabel />
                    <h4 className="mt-20">{strings.tomporomandibularJoint}</h4>
                    <p className="mb-30">
                        {strings.tomporomandibularJointDescriptipn}
                    </p>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="tomporomandibularJoint"
                            field="restrictionInOpening"
                            strings={tomporomandibularJoint}
                        />
                        <InputCheckboxColumn
                            name="tomporomandibularJoint"
                            field="painOrDeviation"
                            strings={tomporomandibularJoint}
                        />
                        <InputCheckboxColumn
                            name="tomporomandibularJoint"
                            field="jointSound"
                            strings={tomporomandibularJoint}
                        />
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="tomporomandibularJoint"
                            field="otherSignsTMJ"
                            strings={tomporomandibularJoint}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.otherSignsTMJ && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="otherSignsTMJDescription"
                                fullRow={false}
                            />
                        )}
                        <div className="d-flex d-flex-column xs-grow-1">
                            <div className="input-text input-bg mb-0"></div>
                        </div>
                    </InputCheckboxContainer>
                    <InputTextColumn field="intraOralExamination" showLabel />
                    <InputTextColumn field="retromolarArea" showLabel />
                    <InputTextColumn field="gums" showLabel />
                    <InputTextColumn field="toothlessRidge" showLabel />
                    <InputTextColumn field="hardSoftPalate" showLabel />
                    <InputTextColumn field="tongueDorsal" showLabel />
                    <InputTextColumn field="tongueVentral" showLabel />
                    <InputTextColumn field="tonguePharyngeal" showLabel />
                    <InputTextColumn
                        field="neurologicalChanges"
                        showLabel
                        subLabel={strings.neurologicalChangesDescription}
                    />
                    <InputTextColumn
                        field="salivaryGrandExamination"
                        showLabel
                        subLabel={strings.salivaryGrandExaminationDescription}
                    />
                    <InputTextColumn
                        field="dentalChangesExamination"
                        showLabel
                        subLabel={strings.dentalChangesExaminationDescription}
                    />
                    <div className="block-border"></div>
                    <PatientFileFooter pageUtils={pageUtils} />
                </div>
            </div>
        </BlankPage>
    );
};

export default EditPatientFileForm4;
