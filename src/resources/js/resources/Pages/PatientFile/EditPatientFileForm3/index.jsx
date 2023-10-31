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
                            field="item1"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item2"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item3"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item4"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item5"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item6"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item7"
                            strings={systemicDiseaseHistory}
                        />
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item8"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.item8 && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="item8Description"
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
                            field="item9"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item10"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item11"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item12"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item13"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item14"
                            strings={systemicDiseaseHistory}
                        />
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item15"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.item15 && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="item15Description"
                                fullRow={false}
                            />
                        )}
                        <div className="d-flex d-flex-column xs-grow-1">
                            <div className="input-text input-bg mb-0"></div>
                        </div>
                    </InputCheckboxContainer>
                    <InputRow>
                        <InputTextColumn field="item16Description" showLabel />
                    </InputRow>
                    <InputRow>
                        <InputTextColumn field="item17Description" showLabel />
                    </InputRow>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item18"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item19"
                            strings={systemicDiseaseHistory}
                        />
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item20"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.item20 && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="item20Description"
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
                            field="item21"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.item21 && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="item21Description"
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
                            field="item22"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item23"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item24"
                            strings={systemicDiseaseHistory}
                        />
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item25"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                    </InputCheckboxContainer>
                    {pageState?.props?.item25 && (
                        <InputRow containerStyle={{ alignItems: "center" }}>
                            <div style={{ flex: "none", marginLeft: "2rem" }}>
                                {pageUtils?.strings?.item25Description}
                            </div>
                            <InputTextColumn
                                componentContainerStyle={{
                                    flex: "none",
                                    width: "100px",
                                }}
                                inputContainerClassName="mb-0"
                                field="item25_1Description"
                                fullRow={false}
                            />
                            <InputTextColumn
                                componentContainerStyle={{
                                    flex: "none",
                                    width: "100px",
                                }}
                                inputContainerClassName="mb-0"
                                field="item25_2Description"
                                fullRow={false}
                            />
                            <InputTextColumn
                                componentContainerStyle={{
                                    flex: "none",
                                    width: "100px",
                                }}
                                inputContainerClassName="mb-0"
                                field="item25_3Description"
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
                            field="item26"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item27"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item28"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item29"
                            strings={systemicDiseaseHistory}
                        />
                    </InputCheckboxContainer>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item30"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.item30 && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="item30Description"
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
                            field="item31"
                            strings={systemicDiseaseHistory}
                        />
                        <InputCheckboxColumn
                            name="systemicDiseaseHistory"
                            field="item32"
                            strings={systemicDiseaseHistory}
                            onChange={(e) =>
                                pageUtils.onSetItem(
                                    e.target.id,
                                    e.target.checked
                                )
                            }
                        />
                        {pageState?.props?.item32 && (
                            <InputTextColumn
                                componentContainerClassName="grow-1"
                                inputContainerClassName="mb-0"
                                field="item32Description"
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
                            field="item33"
                            strings={systemicDiseaseHistory}
                        />
                    </InputCheckboxContainer>
                    <InputRow>
                        <InputTextColumn field="item34Description" showLabel />
                    </InputRow>
                    <div className="block-border"></div>
                    <h3 className="text">{strings.patientHabits}</h3>
                    <InputCheckboxContainer>
                        <InputCheckboxColumn
                            name="tobaccoUse"
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
                            name="drugUse"
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
                        <InputCheckboxColumn name="alcohol" field="alcohol" />
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
                    <PatientFileFooter pageUtils={pageUtils} />
                </div>
            </div>
        </BlankPage>
    );
};

export default EditPatientFileForm3;
