import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { slideDown, slideUp } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";

import {
    CustomLink,
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
            </InputRow>
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
