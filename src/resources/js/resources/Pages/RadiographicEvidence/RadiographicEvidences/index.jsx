import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { slideDown, slideUp } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";

import {
    CustomLink,
    ListPage,
    PromptModal,
    TableFooter,
    TableItems,
} from "../../../components";
import { PageUtils } from "./PageUtils";
import {
    radiographicEvidencesPage as strings,
    general,
} from "../../../../constants/strings/fa";
import { BASE_PATH, BASE_URL } from "../../../../constants";
import { setDropDownElementAction } from "../../../../state/layout/layoutActions";

const RadiographicEvidences = () => {
    const layoutState = useSelector((state) => state.layoutReducer);
    const pageState = useSelector((state) => state.pageReducer);
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

    const renderHeader = () => (
        <tr>
            <th>{strings.radiographicEvidence}</th>
            <th style={{ width: "100px" }}>{strings.file}</th>
            <th style={{ width: "100px" }}>{general.actions}</th>
        </tr>
    );

    const renderItems = () => {
        const children = pageState?.props?.items?.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    <tr>
                        <td>
                            <CustomLink
                                onClick={() => pageUtils.onEdit(item)}
                                disabled={layoutState?.loading}
                            >
                                {item.radiographicEvidence?.length > 100
                                    ? `${item.radiographicEvidence.substring(
                                          0,
                                          100
                                      )} ...`
                                    : item.radiographicEvidence}
                            </CustomLink>
                        </td>
                        <td>
                            {item.file && (
                                <CustomLink
                                    onClick={() =>
                                        window.open(
                                            `${BASE_URL}/storage/p_files/radiographic_evidence/${item.file}`
                                        )
                                    }
                                    disabled={layoutState?.loading}
                                >
                                    <img
                                        src={`${BASE_URL}/storage/p_files/radiographic_evidence/${item.file}`}
                                        className="list-image"
                                    />
                                </CustomLink>
                            )}
                        </td>
                        <td>
                            <button
                                id={`actions-${item.id}`}
                                type="button"
                                className="btn btn-primary btn-dropdown mx-rdir-10"
                                onClick={(e) =>
                                    toggleActions(e, `actions-${item.id}`)
                                }
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
                                                onClick={() =>
                                                    pageUtils.onEdit(item)
                                                }
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
                                    </ul>
                                </div>
                            </button>
                        </td>
                    </tr>
                </React.Fragment>
            );
        });

        return <TableItems columnsCount={columnsCount}>{children}</TableItems>;
    };

    const renderFooter = () => (
        <TableFooter columnsCount={columnsCount} pageUtils={pageUtils} />
    );

    return (
        <ListPage
            pageUtils={pageUtils}
            table={{ renderHeader, renderItems, renderFooter }}
            backUrl={`${BASE_PATH}/p_files`}
        >
            <PromptModal />
        </ListPage>
    );
};

export default RadiographicEvidences;
