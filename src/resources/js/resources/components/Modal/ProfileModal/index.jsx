import React from "react";
import { useSelector } from "react-redux";

import Modal from "../Modal";
import InputTextColumn from "../../Input/InputTextColumn";
import { profileModal as strings } from "../../../../constants/strings/fa";
import utils from "../../../../utils/Utils";
import { USER_ROLES } from "../../../../constants";

function ProfileModal() {
    const userState = useSelector((state) => state.userReducer);

    return (
        <Modal
            id="profileModal"
            title={`${userState?.user?.name} ${userState?.user?.family} - [ ${userState?.user?.username} ]`}
        >
            <InputTextColumn
                field="nameModal"
                readonly={true}
                strings={strings}
                showLabel
                icon="icon-user"
                value={userState?.user?.name}
                inputStyle={{ opacity: "1" }}
            />
            <InputTextColumn
                field="familyModal"
                readonly={true}
                strings={strings}
                showLabel
                icon="icon-user"
                value={userState?.user?.family}
                inputStyle={{ opacity: "1" }}
            />
            {userState?.user?.role === USER_ROLES.USER && (
                <>
                    <InputTextColumn
                        field="fatherNameModal"
                        readonly={true}
                        strings={strings}
                        showLabel
                        icon="icon-personalcard4"
                        value={userState?.user?.fatherName}
                        inputStyle={{ opacity: "1" }}
                    />
                    <InputTextColumn
                        field="nationalNoModal"
                        readonly={true}
                        strings={strings}
                        showLabel
                        textAlign="left"
                        icon="icon-personalcard4"
                        value={userState?.user?.nationalNo}
                        inputStyle={{ opacity: "1" }}
                    />
                    <InputTextColumn
                        field="birthDateModal"
                        readonly={true}
                        strings={strings}
                        showLabel
                        textAlign="left"
                        direction={"rtl"}
                        icon="icon-calendar-1"
                        value={
                            userState?.user?.birthDate
                                ? utils.toLocaleDateString(
                                      userState.user.birthDate,
                                      "fa-IR"
                                  )
                                : ""
                        }
                        inputStyle={{ opacity: "1" }}
                    />
                    <InputTextColumn
                        field="genderModal"
                        readonly={true}
                        strings={strings}
                        showLabel
                        icon="icon-user"
                        value={userState?.user?.genderText}
                        inputStyle={{ opacity: "1" }}
                    />
                    <InputTextColumn
                        field="mobileModal"
                        readonly={true}
                        strings={strings}
                        showLabel
                        textAlign="left"
                        icon="icon-mobile"
                        value={userState?.user?.mobile}
                        inputStyle={{ opacity: "1" }}
                    />
                    <InputTextColumn
                        field="telModal"
                        readonly={true}
                        strings={strings}
                        showLabel
                        textAlign="left"
                        icon="icon-call-calling"
                        value={userState?.user?.tel}
                        inputStyle={{ opacity: "1" }}
                    />
                </>
            )}
            <InputTextColumn
                field="emailModal"
                readonly={true}
                strings={strings}
                showLabel
                textAlign="left"
                icon="icon-sms4"
                value={userState?.user?.email}
                inputStyle={{ opacity: "1" }}
            />
            {userState?.user?.role === USER_ROLES.USER && (
                <>
                    <InputTextColumn
                        field="addressModal"
                        readonly={true}
                        strings={strings}
                        showLabel
                        icon="icon-location4"
                        value={userState?.user?.address}
                        inputStyle={{ opacity: "1" }}
                    />
                    <div className="d-flex d-flex-column">
                        <div className="input-info">
                            {strings.selfieFileModal}
                        </div>
                    </div>
                    <div className="d-flex d-flex-column">
                        <div className="input-info">
                            {strings.identityFileModal}
                        </div>
                    </div>
                </>
            )}
        </Modal>
    );
}

export default ProfileModal;
