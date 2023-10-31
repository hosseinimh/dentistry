import React from "react";

import {
    BlankPage,
    InputCheckboxContainer,
    InputCheckboxColumn,
    InputTextAreaColumn,
    InputSelectColumn,
    InputRow,
} from "../../../components";
import { PageUtils } from "./PageUtils";
import PatientFileHeader from "../components/PatientFileHeader";
import {
    lesionClassification,
    specialLesionClassification,
    editPatientFileForm2 as strings,
} from "../../../../constants/strings/fa";
import PatientFileFooter from "../components/PatientFileFooter";
import { patientReferals } from "../../../../constants/lists";

const EditPatientFileForm2 = () => {
    const pageUtils = new PageUtils();

    return (
        <BlankPage pageUtils={pageUtils}>
            <div className="section fix-mr15">
                <PatientFileHeader />
                <div className="block pd-30">
                    <InputCheckboxContainer
                        label={strings.lesionClassification}
                    >
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
                    <InputRow>
                        <InputSelectColumn
                            field="patientReferal"
                            showLabel
                            items={patientReferals}
                            fullRow={false}
                        />
                        <div></div>
                        <div></div>
                        <div></div>
                    </InputRow>
                    <div className="block-border"></div>
                    <InputCheckboxContainer
                        label={strings.specialLesionClassification}
                    >
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
                    <InputTextAreaColumn field="chiefCompliant" showLabel />
                    <InputTextAreaColumn
                        field="chiefCompliantHistory"
                        showLabel
                    />
                    <InputTextAreaColumn field="timeInterval" showLabel />
                    <InputTextAreaColumn field="referalHistory" showLabel />
                    <InputTextAreaColumn field="treatmentHistory" showLabel />
                    <PatientFileFooter pageUtils={pageUtils} />
                </div>
            </div>
        </BlankPage>
    );
};

export default EditPatientFileForm2;
