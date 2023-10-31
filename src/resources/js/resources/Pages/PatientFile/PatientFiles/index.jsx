import React from "react";
import { useSelector } from "react-redux";

import {
    InputRow,
    InputTextColumn,
    ListPage,
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

const PatientFiles = () => {
    const layoutState = useSelector((state) => state.layoutReducer);
    const pageState = useSelector((state) => state.pageReducer);
    const userState = useSelector((state) => state.userReducer);
    const columnsCount = 3;
    const pageUtils = new PageUtils();

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

    const renderHeader = () => (
        <tr>
            <th style={{ width: "150px" }}>{strings.fileNo}</th>
            <th>{strings.nameFamily}</th>
            <th style={{ width: "100px" }}>{general.actions}</th>
        </tr>
    );

    const renderItems = () => {
        const children = pageState?.props?.items?.map((item) => (
            <tr key={item.id}>
                <td>{item.fileNo}</td>
                <td>{`${item.name} ${item.family}`}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-primary mx-5"
                        onClick={() => pageUtils.onEdit(item)}
                        title={general.edit}
                        disabled={layoutState?.loading}
                    >
                        {general.edit}
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
        ></ListPage>
    );
};

export default PatientFiles;
