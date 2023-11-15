import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
    BlankPage,
    InputTextColumn,
    InputCheckboxContainer,
    InputCheckboxColumn,
    InputRow,
    InputHiddenElement,
    InputSelectColumn,
} from "../../../components";
import { PageUtils } from "./PageUtils";
import PatientFileHeader from "../components/PatientFileHeader";
import {
    general,
    editPatientFileForm4 as strings,
    tomporomandibularJoint,
} from "../../../../constants/strings/fa";
import PatientFileFooter from "../components/PatientFileFooter";
import { STORAGE_PATH } from "../../../../constants";
import { bopTypes } from "../../../../constants/lists";

const EditPatientFileForm4 = () => {
    const pageState = useSelector((state) => state.pageReducer);
    const [dentitionFileSelected, setDentitionFileSelected] = useState(null);
    const [decidiousFileSelected, setDecidiousFileSelected] = useState(null);
    const pageUtils = new PageUtils();

    const onChangeDentitionFile = (e) => {
        const file = e?.target?.files[0];
        if (file) {
            if (["image/jpeg", "image/png"].includes(file.type)) {
                const imgPreview = document.querySelector(
                    "#img-preview-dentition"
                );
                imgPreview.src = URL.createObjectURL(file);
            }
            setDentitionFileSelected(true);
            pageUtils.useForm.setValue("dentitionFile", file);
        }
    };

    const onChangeDecidiousFile = (e) => {
        const file = e?.target?.files[0];
        if (file) {
            if (["image/jpeg", "image/png"].includes(file.type)) {
                const imgPreview = document.querySelector(
                    "#img-preview-decidious"
                );
                imgPreview.src = URL.createObjectURL(file);
            }
            setDecidiousFileSelected(true);
            pageUtils.useForm.setValue("decidiousFile", file);
        }
    };

    const removeDentitionFile = (action = null) => {
        document.querySelector(".img-input.dentition").value = "";
        const imgPreview = document.querySelector("#img-preview-dentition");
        imgPreview.src = "";
        setDentitionFileSelected(false);
        pageUtils.useForm.setValue("dentitionFile", null);
        if (action === "deleted") {
            pageUtils.onRemoveDentitionFile();
        }
    };

    const removeDecidiousFile = (action = null) => {
        document.querySelector(".img-input.decidious").value = "";
        const imgPreview = document.querySelector("#img-preview-decidious");
        imgPreview.src = "";
        setDecidiousFileSelected(false);
        pageUtils.useForm.setValue("decidiousFile", null);
        if (action === "deleted") {
            pageUtils.onRemoveDecidiousFile();
        }
    };

    useEffect(() => {
        if (dentitionFileSelected === null) {
            return;
        }
        const uploadImage = document.querySelector(".upload-img.dentition");
        const imgPreview = document.querySelector(".img-preview.dentition");
        if (dentitionFileSelected) {
            uploadImage.style.opacity = "0";
            imgPreview.style.display = "flex";
            setTimeout(() => {
                uploadImage.style.display = "none";
                imgPreview.style.opacity = "1";
            }, 400);
        } else if (dentitionFileSelected === false) {
            imgPreview.style.opacity = "0";
            uploadImage.style.display = "flex";
            setTimeout(() => {
                imgPreview.style.display = "none";
                uploadImage.style.opacity = "1";
            }, 400);
        }
    }, [dentitionFileSelected]);

    useEffect(() => {
        if (decidiousFileSelected === null) {
            return;
        }
        const uploadImage = document.querySelector(".upload-img.decidious");
        const imgPreview = document.querySelector(".img-preview.decidious");
        if (decidiousFileSelected) {
            uploadImage.style.opacity = "0";
            imgPreview.style.display = "flex";
            setTimeout(() => {
                uploadImage.style.display = "none";
                imgPreview.style.opacity = "1";
            }, 400);
        } else if (decidiousFileSelected === false) {
            imgPreview.style.opacity = "0";
            uploadImage.style.display = "flex";
            setTimeout(() => {
                imgPreview.style.display = "none";
                uploadImage.style.opacity = "1";
            }, 400);
        }
    }, [decidiousFileSelected]);

    return (
        <BlankPage pageUtils={pageUtils}>
            <div className="section fix-mr15">
                <PatientFileHeader />
                <div className="block pd-30">
                    <h3 className="text mb-30">
                        {strings.extraOralExamination}
                    </h3>
                    <h4 className="text mb-10">{strings.face}</h4>
                    <InputTextColumn field="faceAssymetry" showLabel />
                    <InputTextColumn field="facePigmentation" showLabel />
                    <InputTextColumn field="faceOtherPathalogical" showLabel />
                    <h4 className="text mt-20 mb-10">{strings.neck}</h4>
                    <InputTextColumn field="neckAssymetry" showLabel />
                    <InputTextColumn field="neckTyExamination" showLabel />
                    <InputTextColumn field="lymphNodes" showLabel />
                    <h4 className="mt-20 mb-10">
                        {strings.tomporomandibularJoint}
                    </h4>
                    <p>{strings.tomporomandibularJointDescriptipn}</p>
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
                    <h4 className="mt-20 mb-10">
                        {strings.intraOralExamination}
                    </h4>
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
                    <p>{strings.permanentDentition}</p>
                    <div className="d-flex-wrap mb-20">
                        <div className="upload-box">
                            <InputHiddenElement field="dentitionFileAction" />
                            <div className="upload-img-box">
                                {pageState?.props?.item?.dentitionFile && (
                                    <div
                                        className="img-preview d-flex"
                                        style={{ opacity: "1" }}
                                    >
                                        <div className="img">
                                            <a
                                                href={`${STORAGE_PATH.dentition}/${pageState.props.item.dentitionFile}`}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <img
                                                    alt={strings.dentitionFile}
                                                    src={`${STORAGE_PATH.dentition}/${pageState.props.item.dentitionFile}`}
                                                />
                                            </a>
                                        </div>
                                        <div
                                            className="remove-file"
                                            onClick={() => {
                                                removeDentitionFile("deleted");
                                            }}
                                            title={general.remove}
                                        >
                                            <i className="icon-trash"></i>
                                        </div>
                                    </div>
                                )}
                                <div className="img-preview dentition">
                                    <div className="img">
                                        <img
                                            id="img-preview-dentition"
                                            alt={strings.dmft}
                                        />
                                    </div>
                                    <div
                                        className="remove-file"
                                        onClick={removeDentitionFile}
                                        title={general.remove}
                                    >
                                        <i className="icon-trash"></i>
                                    </div>
                                </div>
                                <div className="upload-img dentition">
                                    <span>
                                        {strings.dentitionFileProperties}
                                    </span>
                                    <input
                                        accept="image/jpeg,image/png"
                                        type="file"
                                        className="img-input dentition"
                                        onChange={(e) =>
                                            onChangeDentitionFile(e)
                                        }
                                    />
                                    <button>{strings.dentitionFile}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <InputRow>
                        <InputTextColumn
                            field="adultDmft"
                            showLabel
                            fullRow={false}
                        />
                        <InputTextColumn
                            field="adultD"
                            showLabel
                            fullRow={false}
                        />
                        <InputTextColumn
                            field="adultM"
                            showLabel
                            fullRow={false}
                        />
                        <InputTextColumn
                            field="adultT"
                            showLabel
                            fullRow={false}
                        />
                    </InputRow>
                    <div className="block-border"></div>
                    <p>{strings.decidiousDentition}</p>
                    <div className="d-flex-wrap mb-20">
                        <div className="upload-box">
                            <InputHiddenElement field="decidiousFileAction" />
                            <div className="upload-img-box">
                                {pageState?.props?.item?.decidiousFile && (
                                    <div
                                        className="img-preview d-flex"
                                        style={{ opacity: "1" }}
                                    >
                                        <div className="img">
                                            <a
                                                href={`${STORAGE_PATH.decidious}/${pageState.props.item.decidiousFile}`}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <img
                                                    alt={strings.decidiousFile}
                                                    src={`${STORAGE_PATH.decidious}/${pageState.props.item.decidiousFile}`}
                                                />
                                            </a>
                                        </div>
                                        <div
                                            className="remove-file"
                                            onClick={() => {
                                                removeDecidiousFile("deleted");
                                            }}
                                            title={general.remove}
                                        >
                                            <i className="icon-trash"></i>
                                        </div>
                                    </div>
                                )}
                                <div className="img-preview decidious">
                                    <div className="img">
                                        <img
                                            id="img-preview-decidious"
                                            alt={strings.decidiousDmft}
                                        />
                                    </div>
                                    <div
                                        className="remove-file"
                                        onClick={removeDecidiousFile}
                                        title={general.remove}
                                    >
                                        <i className="icon-trash"></i>
                                    </div>
                                </div>
                                <div className="upload-img decidious">
                                    <span>
                                        {strings.decidiousFileProperties}
                                    </span>
                                    <input
                                        accept="image/jpeg,image/png"
                                        type="file"
                                        className="img-input decidious"
                                        onChange={(e) =>
                                            onChangeDecidiousFile(e)
                                        }
                                    />
                                    <button>{strings.decidiousFile}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <InputRow>
                        <InputTextColumn
                            field="decidiousDmft"
                            showLabel
                            fullRow={false}
                        />
                        <InputTextColumn
                            field="decidiousD"
                            showLabel
                            fullRow={false}
                        />
                        <InputTextColumn
                            field="decidiousM"
                            showLabel
                            fullRow={false}
                        />
                        <InputTextColumn
                            field="decidiousT"
                            showLabel
                            fullRow={false}
                        />
                    </InputRow>
                    <div className="block-border"></div>
                    <InputRow>
                        <InputTextColumn
                            field="priodontalExamination"
                            showLabel
                            fullRow={false}
                        />
                        <InputSelectColumn
                            field="bop"
                            showLabel
                            items={bopTypes}
                            fullRow={false}
                        />
                        <div></div>
                        <div></div>
                    </InputRow>
                    <InputTextColumn field="paraclinicalEvidence" showLabel />
                    <InputTextColumn field="consultationDeps" showLabel />
                    <InputTextColumn field="probableDiagnosis" showLabel />
                    <InputTextColumn field="differntialDiagnosis" showLabel />
                    <InputTextColumn field="difinitiveDiagnosis" showLabel />
                    <InputTextColumn field="systemicConsiderations" showLabel />
                    <InputTextColumn field="initialTreatmentPlan" showLabel />
                    <InputTextColumn field="finalTreatmentPlan" showLabel />
                    <InputRow>
                        <InputTextColumn
                            field="student"
                            showLabel
                            fullRow={false}
                        />
                        <InputTextColumn
                            field="assistant"
                            showLabel
                            fullRow={false}
                        />
                        <InputTextColumn
                            field="master"
                            showLabel
                            fullRow={false}
                        />
                    </InputRow>
                    <InputTextColumn field="completedDate" showLabel />
                    <div className="block-border"></div>
                    <PatientFileFooter pageUtils={pageUtils} />
                </div>
            </div>
        </BlankPage>
    );
};

export default EditPatientFileForm4;
