import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { slideDown, slideUp } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";

import {
    CustomLink,
    InputCheckboxColumn,
    InputCheckboxContainer,
    InputDatePickerColumn,
    InputRow,
    InputTextColumn,
    ListPage,
    PromptModal,
    SearchBox,
    TableFooter,
    TableItems,
} from "../../../components";
import { USER_ROLES } from "../../../../constants";
import { PageUtils } from "./PageUtils";
import {
    patientFilesPage as strings,
    general,
    lesionClassification,
    specialLesionClassification,
    systemicDiseaseHistory,
} from "../../../../constants/strings/fa";
import { setDropDownElementAction } from "../../../../state/layout/layoutActions";

const PatientFiles = () => {
    const layoutState = useSelector((state) => state.layoutReducer);
    const pageState = useSelector((state) => state.pageReducer);
    const userState = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const columnsCount = 3;
    const pageUtils = new PageUtils();

    const toggleActions = (e, id) => {
        e.stopPropagation();
        const element = document.querySelector(`#${id}`).lastChild;
        if (layoutState?.dropDownElement) {
            slideUp(layoutState.dropDownElement);
            if (layoutState?.dropDownElement === element) {
                dispatch(setDropDownElementAction(null));
                return;
            }
        }
        dispatch(setDropDownElementAction(element));
        slideDown(element, {
            duration: 400,
            easing: easeOutQuint,
        });
    };

    const renderSearch = () => (
        <SearchBox
            pageUtils={pageUtils}
            onSubmit={pageUtils.onSubmit}
            onReset={pageUtils.onReset}
        >
            <InputRow>
                <InputTextColumn
                    field="fileNo"
                    textAlign="left"
                    icon={"icon-frame-14"}
                    fullRow={false}
                />
                <InputTextColumn
                    field="name"
                    icon={"icon-personalcard4"}
                    fullRow={false}
                />
                <InputTextColumn
                    field="family"
                    icon={"icon-personalcard4"}
                    fullRow={false}
                />
                <InputDatePickerColumn field="birthDate" fullRow={false} />
            </InputRow>
            <div className="block-border"></div>
            <InputCheckboxContainer label={strings.lesionClassification}>
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="ulcer"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="centralLesion"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="naturalChanges"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="painDisturbance"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="whiteLesion"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="infectiousLesion"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="dentalChanges"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="temporomandibularDisturbance"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="pigmantedLesion"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="gingivalHyperplasia"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="syndrome"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="cervicalLumps"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="prominentLesion"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field="salivaryLesion"
                    strings={lesionClassification}
                />
                <InputCheckboxColumn
                    name="lesionClassification"
                    field={"complicatedDisease"}
                    strings={lesionClassification}
                />
            </InputCheckboxContainer>
            <div className="block-border"></div>
            <InputCheckboxContainer label={strings.specialLesionClassification}>
                <InputCheckboxColumn
                    name="specialLesionClassification"
                    field="oralLichen"
                    strings={specialLesionClassification}
                />
                <InputCheckboxColumn
                    name="specialLesionClassification"
                    field="scc"
                    strings={specialLesionClassification}
                />
                <InputCheckboxColumn
                    name="specialLesionClassification"
                    field="aphthous"
                    strings={specialLesionClassification}
                />
                <InputCheckboxColumn
                    name="specialLesionClassification"
                    field="mronj"
                    strings={specialLesionClassification}
                />
                <InputCheckboxColumn
                    name="specialLesionClassification"
                    field="sjogrensSyndrome"
                    strings={specialLesionClassification}
                />
                <InputCheckboxColumn
                    name="specialLesionClassification"
                    field="rheumatoidArthritis"
                    strings={specialLesionClassification}
                />
                <InputCheckboxColumn
                    name="specialLesionClassification"
                    field="cancerInOPlace"
                    strings={specialLesionClassification}
                />
            </InputCheckboxContainer>
            <div className="block-border"></div>
            <p className="mb-30">{strings.systemicDiseaseHistory}</p>
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
                        pageUtils.onSetItem(e.target.id, e.target.checked)
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
                        pageUtils.onSetItem(e.target.id, e.target.checked)
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
                <InputTextColumn field="continuingDrug" />
            </InputRow>
            <InputRow>
                <InputTextColumn field="weeklyDrug" />
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
                        pageUtils.onSetItem(e.target.id, e.target.checked)
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
                        pageUtils.onSetItem(e.target.id, e.target.checked)
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
                        pageUtils.onSetItem(e.target.id, e.target.checked)
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
                        pageUtils.onSetItem(e.target.id, e.target.checked)
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
            <InputTextColumn field="sleepStatus" />
            <InputRow>
                <InputTextColumn field="functionalCapacity" />
            </InputRow>
            <div className="block-border"></div>
            <p>{strings.patientHabits}</p>
            <InputCheckboxContainer>
                <InputCheckboxColumn
                    name="tobaccoUsage"
                    field="tobaccoUse"
                    onChange={(e) =>
                        pageUtils.onSetItem(e.target.id, e.target.checked)
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
                        pageUtils.onSetItem(e.target.id, e.target.checked)
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
                <InputCheckboxColumn name="alcoholUsage" field="alcohol" />
            </InputCheckboxContainer>
            <div className="block-border"></div>
            <p className="mt-20 mb-10">{strings.intraOralExamination}</p>
            <InputRow>
                <InputTextColumn field="retromolarArea" fullRow={false} />
                <InputTextColumn field="gums" fullRow={false} />
                <InputTextColumn field="toothlessRidge" fullRow={false} />
            </InputRow>
            <InputRow>
                <InputTextColumn field="hardSoftPalate" fullRow={false} />
                <InputTextColumn field="tongueDorsal" fullRow={false} />
                <InputTextColumn field="tongueVentral" fullRow={false} />
            </InputRow>
            <InputRow>
                <InputTextColumn field="tonguePharyngeal" fullRow={false} />
                <InputTextColumn field="neurologicalChanges" fullRow={false} />
            </InputRow>
            <InputRow>
                <InputTextColumn
                    field="salivaryGrandExamination"
                    fullRow={false}
                />
                <InputTextColumn
                    field="dentalChangesExamination"
                    fullRow={false}
                />
            </InputRow>
            <div className="block-border"></div>
            <InputRow>
                <InputTextColumn field="probableDiagnosis" fullRow={false} />
                <InputTextColumn field="difinitiveDiagnosis" fullRow={false} />
                <InputTextColumn field="finalTreatmentPlan" fullRow={false} />
            </InputRow>
            <div className="block-border"></div>
            <InputRow>
                <InputTextColumn field="assistant" fullRow={false} />
                <InputTextColumn field="master" fullRow={false} />
            </InputRow>
            <div className="block-border"></div>
        </SearchBox>
    );

    const renderButtons = () => (
        <button
            className="btn btn-primary-dark"
            type="button"
            title={strings.excel}
            onClick={pageUtils?.onExcel}
            disabled={layoutState?.loading}
        >
            {strings.excel}
        </button>
    );

    const renderHeader = () => (
        <tr>
            <th style={{ width: "100px" }}>{strings.fileNo}</th>
            <th>{strings.nameFamilyNationalNo}</th>
            <th style={{ width: "100px" }}>{general.actions}</th>
        </tr>
    );

    const renderItems = () => {
        const children = pageState?.props?.items?.map((item) => (
            <tr key={item.id}>
                <td>{item.fileNo}</td>
                <td>
                    <CustomLink
                        onClick={() => pageUtils.onEdit(item)}
                        disabled={layoutState?.loading}
                    >
                        {`${item.name} ${item.family} - ${item.nationalNo}`}
                    </CustomLink>
                </td>
                <td>
                    <button
                        id={`actions-${item.id}`}
                        type="button"
                        className="btn btn-primary btn-dropdown mx-rdir-10"
                        onClick={(e) => toggleActions(e, `actions-${item.id}`)}
                        disabled={layoutState?.loading}
                    >
                        <div className="d-flex">
                            <span className="grow-1 mx-rdir-10">
                                {general.actions}
                            </span>
                            <div className="icon">
                                <i className="icon-arrow-down5"></i>
                            </div>
                        </div>
                        <div className="dropdown-menu dropdown-menu-end">
                            <ul>
                                <li>
                                    <CustomLink
                                        onClick={() => pageUtils.onEdit(item)}
                                        disabled={layoutState?.loading}
                                    >
                                        {general.edit}
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink
                                        onClick={(e) =>
                                            pageUtils.onRemove(e, item)
                                        }
                                        disabled={layoutState?.loading}
                                    >
                                        {general.remove}
                                    </CustomLink>
                                </li>
                                <li>
                                    <div className="line-gr"></div>
                                </li>
                                <li>
                                    <CustomLink
                                        onClick={() =>
                                            pageUtils.onRadiographicEvidences(
                                                item
                                            )
                                        }
                                        disabled={layoutState?.loading}
                                    >
                                        {strings.radiographicEvidences}
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink
                                        onClick={() =>
                                            pageUtils.onPatientFollowUps(item)
                                        }
                                        disabled={layoutState?.loading}
                                    >
                                        {strings.patientFollowUps}
                                    </CustomLink>
                                </li>
                            </ul>
                        </div>
                    </button>
                </td>
            </tr>
        ));

        return <TableItems columnsCount={columnsCount}>{children}</TableItems>;
    };

    const renderFooter = () => (
        <TableFooter columnsCount={columnsCount} pageUtils={pageUtils} />
    );

    return (
        <ListPage
            pageUtils={pageUtils}
            table={{ renderHeader, renderItems, renderFooter }}
            hasAdd={
                userState?.user?.role === USER_ROLES.ADMINISTRATOR
                    ? true
                    : false
            }
            renderTopList={renderSearch}
            renderButtons={renderButtons}
            tableContainerClassName="pd-d-30"
            tableDataTableClassName="pd-d-30"
        >
            <PromptModal />
        </ListPage>
    );
};

export default PatientFiles;
