import React from "react";
import { useSelector } from "react-redux";

import {
    BlankPage,
    InputCheckboxContainer,
    InputCheckboxColumn,
    InputTextColumn,
    InputRow,
} from "../../../components";
import { PageUtils } from "./PageUtils";
import PatientFileHeader from "../components/PatientFileHeader";
import {
    systemicDiseaseHistory,
    editPatientFileForm3 as strings,
    familialHistory,
} from "../../../../constants/strings/fa";
import PatientFileFooter from "../components/PatientFileFooter";

const EditPatientFileForm3 = () => {
    const pageState = useSelector((state) => state.pageReducer);
    const pageUtils = new PageUtils();

    return (
        <BlankPage pageUtils={pageUtils}>
            <div className="section fix-mr15">
                <PatientFileHeader />
                <div className="block pd-30">
                    <h3 className="text mb-30">
                        {strings.systemicDiseaseHistory}
                    </h3>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="heartDisease"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="nervousIllness"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="abnormalBleeding"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="abnormalBloodPressure"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="respiratoryDisease"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="hepatitDisease"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="sinusitis"
                            strings={systemicDiseaseHistory}
                        />
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="bloodDisease"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.bloodDisease && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="bloodDiseaseType"
                                fullRow={false}
                            />
                        )}
                        <div className="d-flex d-flex-column xs-grow-1">
                            <div className="input-text input-bg mb-0"></div>
                        </div>
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="bloodBorneDisease"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="injectingContaminatedBlood"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="epilepsy"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="kidneyDisease"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="diabetes"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="thyroid"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="fmAllergy"
                            strings={systemicDiseaseHistory}
                        />
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="hospitalizationHistory"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.hospitalizationHistory && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="hospitalizationReason"
                                fullRow={false}
                            />
                        )}
                        <div className="d-flex d-flex-column xs-grow-1">
                            <div className="input-text input-bg mb-0"></div>
                        </div>
                    </InputCheckboxContainer>
                    <InputRow>
                        <InputTextColumn field="continuingDrug" showLabel />
                    </InputRow>
                    <InputRow>
                        <InputTextColumn field="weeklyDrug" showLabel />
                    </InputRow>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="weightLoss"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="immuneDisease"
                            strings={systemicDiseaseHistory}
                        />
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="cancer"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.cancer && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="cancerType"
                                fullRow={false}
                            />
                        )}
                        <div className="d-flex d-flex-column xs-grow-1">
                            <div className="input-text input-bg mb-0"></div>
                        </div>
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="chemotherapy"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.chemotherapy && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="radiationPlace"
                                fullRow={false}
                            />
                        )}
                        <div className="d-flex d-flex-column xs-grow-1">
                            <div className="input-text input-bg mb-0"></div>
                        </div>
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="boneDisaese"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="skinDisease"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="digestiveDisease"
                            strings={systemicDiseaseHistory}
                        />
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="pregnancy"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                    </InputCheckboxContainer>
                    {pageState?.props?.pregnancy && (
                        <InputRow
                            containerStyle={{
                                alignItems: "center",
                                marginBottom: "1.25rem",
                            }}
                        >
                            <div style={{ flex: "none", marginLeft: "2rem" }}>
                                {pageUtils?.strings?.pregnancy}
                            </div>
                            <InputTextColumn
                                componentContainerStyle={{
                                    flex: "none",
                                    width: "100px",
                                }}
                                inputContainerClassName="mb-0"
                                field="pregnancyWeek"
                                fullRow={false}
                            />
                            <InputTextColumn
                                componentContainerStyle={{
                                    flex: "none",
                                    width: "100px",
                                }}
                                inputContainerClassName="mb-0"
                                field="pregnancyNum"
                                fullRow={false}
                            />
                            <InputTextColumn
                                componentContainerStyle={{
                                    flex: "none",
                                    width: "100px",
                                }}
                                inputContainerClassName="mb-0"
                                field="pregnancyRank"
                                fullRow={false}
                            />
                            <div className="d-flex d-flex-column xs-grow-1">
                                <div className="input-text input-bg mb-0"></div>
                            </div>
                        </InputRow>
                    )}
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="pms"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="temporomandibular"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="dentistryProblem"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="addiction"
                            strings={systemicDiseaseHistory}
                        />
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="artificialDevice"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.artificialDevice && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="adExplanation"
                                fullRow={false}
                            />
                        )}
                        <div className="d-flex d-flex-column xs-grow-1">
                            <div className="input-text input-bg mb-0"></div>
                        </div>
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="bruxism"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="helpLiving"
                            strings={systemicDiseaseHistory}
                        />
                    </InputCheckboxContainer>
                    <InputTextColumn field="sleepStatus" showLabel />
                    <InputRow>
                        <InputTextColumn field="functionalCapacity" showLabel />
                    </InputRow>
                    <div className="block-border"></div>
                    <h3 className="text">{strings.patientHabits}</h3>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="tobaccoUsage"
                            field="tobaccoUse"
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.tobaccoUse && (
                            <>
                                <InputTextColumn
                                    componentContainerClassName="grow-1"
                                    inputContainerClassName="mb-0"
                                    field="useTobaccoDuration"
                                    fullRow={false}
                                />
                                <InputTextColumn
                                    componentContainerClassName="grow-1"
                                    inputContainerClassName="mb-0"
                                    field="useTobaccoType"
                                    fullRow={false}
                                />
                            </>
                        )}
                        <div className="d-flex d-flex-column xs-grow-1">
                            <div className="input-text input-bg mb-0"></div>
                        </div>
                        <div className="d-flex d-flex-column xs-grow-1">
                            <div className="input-text input-bg mb-0"></div>
                        </div>
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="drugUsage"
                            field="drugUse"
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.drugUse && (
                            <>
                                <InputTextColumn
                                    componentContainerClassName="grow-1"
                                    inputContainerClassName="mb-0"
                                    field="useDrugDuration"
                                    fullRow={false}
                                />
                                <InputTextColumn
                                    componentContainerClassName="grow-1"
                                    inputContainerClassName="mb-0"
                                    field="useDrugType"
                                    fullRow={false}
                                />
                            </>
                        )}
                        <div className="d-flex d-flex-column xs-grow-1">
                            <div className="input-text input-bg mb-0"></div>
                        </div>
                        <div className="d-flex d-flex-column xs-grow-1">
                            <div className="input-text input-bg mb-0"></div>
                        </div>
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="alcoholUsage"
                            field="alcohol"
                        />
                    </InputCheckboxContainer>
                    <div className="block-border"></div>
                    <h3 className="text mb-30">{strings.vitalSigns}</h3>
                    <InputRow>
                        <InputTextColumn field="pulse" showLabel />
                        <InputTextColumn field="bodyTemp" showLabel />
                        <InputTextColumn field="bloodPressure" showLabel />
                        <InputTextColumn field="resporate" showLabel />
                        <InputTextColumn field="weight" showLabel />
                        <InputTextColumn field="height" showLabel />
                        <InputTextColumn field="bmi" showLabel />
                    </InputRow>
                    <div className="block-border"></div>
                    <h3 className="text mb-30">{strings.familialHistory}</h3>
                    <h4 className="mb-30">
                        {strings.familialHistoryDescription}
                    </h4>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="familialHistory"
                            field="tb"
                            strings={familialHistory}
                        />
                        <InputCheckboxColumn
                            name="familialHistory"
                            field="fdb"
                            strings={familialHistory}
                        />
                        <InputCheckboxColumn
                            name="familialHistory"
                            field="fhp"
                            strings={familialHistory}
                        />
                        <InputCheckboxColumn
                            name="familialHistory"
                            field="fhbp"
                            strings={familialHistory}
                        />
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="familialHistory"
                            field="fca"
                            strings={familialHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.fca && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="fcaType"
                                fullRow={false}
                            />
                        )}
                        <div className="d-flex d-flex-column xs-grow-1">
                            <div className="input-text input-bg mb-0"></div>
                        </div>
                    </InputCheckboxContainer>
                    <div className="block-border"></div>
                    <PatientFileFooter pageUtils={pageUtils} />
                </div>
            </div>
        </BlankPage>
    );
};

export default EditPatientFileForm3;
