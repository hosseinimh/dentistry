import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";

import {
    patientFileForms,
    patientFilesHeader as strings,
} from "../../../../constants/strings/fa";
import { BASE_PATH, FILE_FORMS } from "../../../../constants";
import { setLoadingAction } from "../../../../state/layout/layoutActions";
import utils from "../../../../utils/Utils";

const PatientFileHeader = () => {
    const layoutState = useSelector((state) => state.layoutReducer);
    const pageState = useSelector((state) => state.pageReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [forms, setForms] = useState([0, 4]);
    const [formsChartOptions, setFormsChartOptions] = useState(null);
    const [formsSeries, setFormsSeries] = useState(null);

    useEffect(() => {
        let finished = 0;
        finished += utils.hasValue(pageState?.props?.item?.name) ? 1 : 0;
        finished += utils.hasValue(pageState?.props?.item?.patientReferal)
            ? 1
            : 0;
        finished += utils.hasValue(
            pageState?.props?.item?.continuingDrugOriginal
        )
            ? 1
            : 0;
        finished += utils.hasValue(pageState?.props?.item?.bop) ? 1 : 0;
        setForms([finished, 4 - finished]);
    }, [pageState?.props?.item]);

    useEffect(() => {
        setFormsChart();
    }, [forms]);

    const setFormsChart = () => {
        setFormsChartOptions({
            plotOptions: {
                pie: {
                    startAngle: 0,
                    donut: {
                        size: "70%",
                        labels: {
                            show: false,
                        },
                    },
                    dataLabels: {
                        offset: 300,
                        minAngleToShowLabel: 30,
                    },
                },
            },
            dataLabels: {
                enabled: false,
            },
            labels: [strings.finishedPercentage, strings.remainedPercentage],
            fill: {
                width: 20,
                type: "solid",
                lineCap: "round",
                colors: [
                    getComputedStyle(document.documentElement).getPropertyValue(
                        "--success"
                    ),
                    getComputedStyle(document.documentElement).getPropertyValue(
                        "--dark-warning"
                    ),
                ],
            },
            stroke: {
                show: false,
            },
            grid: {
                padding: {
                    left: -20,
                    right: -20,
                },
            },
            legend: {
                show: false,
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: (value) => `${value * 25} %`,
                },
            },
        });
        setFormsSeries(forms);
    };

    const renderFormsChart = () => {
        if (formsChartOptions && formsSeries) {
            return (
                <div className="chart">
                    <Chart
                        type="donut"
                        options={formsChartOptions}
                        series={formsSeries}
                        width={110}
                        height={110}
                    />
                </div>
            );
        }
        return <></>;
    };

    const navigateTo = (fileForm) => {
        if (!pageState?.props?.item) {
            navigate(`${BASE_PATH}/p_files/add`);
            return;
        }
        dispatch(setLoadingAction(true));
        switch (fileForm) {
            case FILE_FORMS.FORM_1:
                navigate(
                    `${BASE_PATH}/p_files/edit/form1/${pageState?.props?.item?.id}`
                );
                return;
            case FILE_FORMS.FORM_2:
                navigate(
                    `${BASE_PATH}/p_files/edit/form2/${pageState?.props?.item?.id}`
                );
                return;
            case FILE_FORMS.FORM_3:
                navigate(
                    `${BASE_PATH}/p_files/edit/form3/${pageState?.props?.item?.id}`
                );
                return;
            case FILE_FORMS.FORM_4:
                navigate(
                    `${BASE_PATH}/p_files/edit/form4/${pageState?.props?.item?.id}`
                );
                return;
        }
        dispatch(setLoadingAction(false));
    };

    return (
        <div className="block pd-20 mb-20">
            <div className="main-wallet d-flex-wrap align-center just-start">
                <div id="walletChart" style={{ minWidth: "9rem" }}>
                    {renderFormsChart()}
                </div>
                <div className="info">
                    <div className="hd">
                        <span>
                            {pageState?.props?.item
                                ? `${pageState?.props?.item?.fileNo} - ${pageState?.props?.item?.name} ${pageState?.props?.item?.family}, ${pageState?.props?.item?.nationalNo}`
                                : layoutState?.loading
                                ? ""
                                : strings.newForm}
                        </span>
                        <h3>
                            {pageState?.page === "AddPatientFile" ||
                            pageState?.page === "EditPatientFileForm1"
                                ? patientFileForms.form1
                                : pageState?.page === "EditPatientFileForm2"
                                ? patientFileForms.form2
                                : ""}
                        </h3>
                    </div>
                    <div className="chart-legends d-flex-wrap">
                        <div className="item">
                            <div className="chart-value">
                                <span className="bg-success"></span>
                                {strings.finishedPercentage}
                            </div>
                        </div>

                        <div className="item">
                            <div className="chart-value">
                                <span className="bg-dark-warning"></span>
                                {strings.remainedPercentage}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="steps step-steps">
                    <div
                        className={`item step-num ${
                            pageState?.page === "AddPatientFile" ||
                            pageState?.page === "EditPatientFileForm1"
                                ? "active"
                                : ""
                        }`}
                        onClick={() => navigateTo(FILE_FORMS.FORM_1)}
                    >
                        <div className="icon">
                            <i className="icon-frame5"></i>
                        </div>
                        <span>{strings.form1}</span>
                    </div>
                    <div
                        className={`item step-num ${
                            pageState?.page === "EditPatientFileForm2"
                                ? "active"
                                : ""
                        }`}
                        onClick={() => navigateTo(FILE_FORMS.FORM_2)}
                    >
                        <div className="icon">
                            <i className="icon-frame5"></i>
                        </div>
                        <span>{strings.form2}</span>
                    </div>
                    <div
                        className={`item step-num ${
                            pageState?.page === "EditPatientFileForm3"
                                ? "active"
                                : ""
                        }`}
                        onClick={() => navigateTo(FILE_FORMS.FORM_3)}
                    >
                        <div className="icon">
                            <i className="icon-frame5"></i>
                        </div>
                        <span>{strings.form3}</span>
                    </div>
                    <div
                        className={`item step-num ${
                            pageState?.page === "EditPatientFileForm4"
                                ? "active"
                                : ""
                        }`}
                        onClick={() => navigateTo(FILE_FORMS.FORM_4)}
                    >
                        <div className="icon">
                            <i className="icon-frame5"></i>
                        </div>
                        <span>{strings.form4}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientFileHeader;
