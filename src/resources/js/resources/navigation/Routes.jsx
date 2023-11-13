import React from "react";
import { useSelector } from "react-redux";
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";

import { BASE_PATH, USER_ROLES } from "../../constants";
import * as Pages from "../Pages";

const renderNotAuthRoutes = () => (
    <>
        <Route path={`${BASE_PATH}/users/login`} element={<Pages.Login />} />
        <Route
            path="*"
            element={<Navigate to={`${BASE_PATH}/users/login`} />}
        />
    </>
);

const renderAuthRoutes = () => (
    <>
        <Route
            path={`${BASE_PATH}/notifications`}
            element={<Pages.Notifications />}
        />
        <Route
            path={`${BASE_PATH}/users/change_password`}
            element={<Pages.ChangePasswordCurrentUser />}
        />
        <Route
            path={`${BASE_PATH}/p_files/add`}
            element={<Pages.AddPatientFile />}
        />
        <Route
            path={`${BASE_PATH}/p_files/edit/form1/:patientFileId`}
            element={<Pages.EditPatientFileForm1 />}
        />
        <Route
            path={`${BASE_PATH}/p_files/edit/form2/:patientFileId`}
            element={<Pages.EditPatientFileForm2 />}
        />
        <Route
            path={`${BASE_PATH}/p_files/edit/form3/:patientFileId`}
            element={<Pages.EditPatientFileForm3 />}
        />
        <Route
            path={`${BASE_PATH}/p_files/edit/form4/:patientFileId`}
            element={<Pages.EditPatientFileForm4 />}
        />
        <Route path={`${BASE_PATH}/p_files`} element={<Pages.PatientFiles />} />
        <Route
            path={`${BASE_PATH}/p_f_ups/add/:patientFileId`}
            element={<Pages.AddPatientFile />}
        />
        <Route
            path={`${BASE_PATH}/p_f_ups/:patientFileId`}
            element={<Pages.PatientFollowUps />}
        />
        <Route
            path={`${BASE_PATH}/r_evidences/:patientFileId`}
            element={<Pages.RadiographicEvidences />}
        />
        <Route path={`${BASE_PATH}`} element={<Pages.Dashboard />} />
        <Route path="*" element={<Navigate to={BASE_PATH} />} />
    </>
);

const renderAdministratorRoutes = () => (
    <>
        <Route
            path={`${BASE_PATH}/p_f_ups/add/:patientFileId`}
            element={<Pages.AddPatientFollowUp />}
        />
        <Route
            path={`${BASE_PATH}/p_f_ups/edit/:patientFollowUpId`}
            element={<Pages.EditPatientFollowUp />}
        />
        <Route
            path={`${BASE_PATH}/r_evidences/add/:patientFileId`}
            element={<Pages.AddRadiographicEvidence />}
        />
        <Route
            path={`${BASE_PATH}/r_evidences/edit/:radiographicEvidenceId`}
            element={<Pages.EditRadiographicEvidence />}
        />
        <Route
            path={`${BASE_PATH}/users/change_password/:userId`}
            element={<Pages.ChangePasswordUser />}
        />
        <Route path={`${BASE_PATH}/users/add`} element={<Pages.AddUser />} />
        <Route
            path={`${BASE_PATH}/users/edit/:userId`}
            element={<Pages.EditUser />}
        />
        <Route
            path={`${BASE_PATH}/users/edit`}
            element={<Pages.EditCurrentUser />}
        />
        <Route path={`${BASE_PATH}/users`} element={<Pages.Users />} />
        <Route path={`${BASE_PATH}/errors`} element={<Pages.Errors />} />
    </>
);

const renderUserRoutes = () => <></>;

function AppRoutes() {
    const userState = useSelector((state) => state.userReducer);

    return (
        <Router>
            <Routes>
                {!userState?.user && renderNotAuthRoutes()}
                {userState?.user?.role === USER_ROLES.ADMINISTRATOR &&
                    renderAdministratorRoutes()}
                {userState?.user?.role === USER_ROLES.USER &&
                    renderUserRoutes()}
                {userState?.user && renderAuthRoutes()}
            </Routes>
        </Router>
    );
}

export default AppRoutes;
