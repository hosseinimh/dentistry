import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { general } from "../../../../constants/strings/fa";
import { BASE_PATH } from "../../../../constants";

const PatientFileFooter = ({ pageUtils }) => {
    const layoutState = useSelector((state) => state.layoutReducer);
    const pageState = useSelector((state) => state.pageReducer);
    const navigate = useNavigate();

    const onPrevious = () => {
        switch (pageState?.page) {
            case "EditPatientFileForm2":
                navigate(
                    `${BASE_PATH}/p_files/edit/form1/${pageState?.params?.patientFileId}`
                );
                return;
            case "EditPatientFileForm3":
                navigate(
                    `${BASE_PATH}/p_files/edit/form2/${pageState?.params?.patientFileId}`
                );
                return;
            default:
                return;
        }
    };

    const onNext = () => {
        switch (pageState?.page) {
            case "EditPatientFileForm1":
                navigate(
                    `${BASE_PATH}/p_files/edit/form2/${pageState?.params?.patientFileId}`
                );
                return;
            case "EditPatientFileForm2":
                navigate(
                    `${BASE_PATH}/p_files/edit/form3/${pageState?.params?.patientFileId}`
                );
                return;
            default:
                return "EditPatientFileForm1";
        }
    };

    return (
        <div className="btns d-flex mt-30">
            <button
                className="btn btn-success"
                type="button"
                title={general.submit}
                onClick={pageUtils?.useForm.handleSubmit(pageUtils.onSubmit)}
                disabled={layoutState?.loading}
            >
                {general.submit}
            </button>
            <button
                className="btn btn-border"
                type="button"
                title={general.back}
                onClick={() => navigate(`${BASE_PATH}/p_files`)}
                disabled={layoutState?.loading}
            >
                {general.back}
            </button>
            {pageState?.page !== "AddPatientFile" &&
                pageState?.page !== "EditPatientFileForm1" && (
                    <button
                        className="btn btn-primary"
                        type="button"
                        title={general.previous}
                        onClick={onPrevious}
                        disabled={layoutState?.loading}
                    >
                        <i className="icon-arrow-right-1 mx-5"></i>
                        {general.previous}
                    </button>
                )}
            {pageState?.page !== "AddPatientFile" &&
                pageState?.page !== "EditPatientFileForm4" && (
                    <button
                        className="btn btn-primary"
                        type="button"
                        title={general.next}
                        onClick={onNext}
                        disabled={layoutState?.loading}
                    >
                        {general.next}
                        <i className="icon-arrow-left mx-5"></i>
                    </button>
                )}
        </div>
    );
};

export default PatientFileFooter;
