import { Patient } from "./module/patientModule.js";

let patient = [];
const formvvalue = document.getElementById("patientForm");
formvvalue.onsubmit = function (e) {
    e.preventDefault();
    const patientId = $("#patientIdNumber").val();
    const firstName = $("#firstName").val();
    const middleName = $("#middleInitials").val();
    const lastName = $("#lastName").val();
    const dateOfBirth = $("#dateOfBirth").val();
    const department = $("#ddlDepartment").val();
    const isOutPatient = $('input[name="radioIsOutPatient"]:checked').val();
    const individualPatient = new Patient(patientId, firstName, middleName, lastName, dateOfBirth, department, isOutPatient);
    patient.push(individualPatient);
    addRowToTable(individualPatient);
    this.reset();

}

const outPatientCheck = document.getElementById("chkShowOutPatients");
const elderlyPatient = document.getElementById("chkElderlyPatients");
outPatientCheck.onchange = checkOutPatient;
elderlyPatient.onchange = checkElderPatient;


//check checkoutPatient
function checkOutPatient(e) {
    console.log(patient);
    if (this.checked) {
        document.getElementById("chkElderlyPatients").checked = false;
        $("#tbodyPatientsList").html("");
        patient.filter(p => p.getIsOut() === "Yes").forEach(p => addRowToTable(p));
    }
    else {
        $("#tbodyPatientsList").html("");
        patient.forEach(p => addRowToTable(p));
    }

}

//check elder patieng
function checkElderPatient(e) {

    if (this.checked) {
        document.getElementById("chkShowOutPatients").checked=false;

        $("#tbodyPatientsList").html("");

        patient.filter(p => calculateAge(p) > 63).forEach(p => addRowToTable(p));
    }
    else {
        $("#tbodyPatientsList").html("");
        patient.forEach(p => addRowToTable(p));
    }
}

function calculateAge(p) {


    var today = new Date();
    var birthDate = new Date(p.getDateOfBirth());
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


function addRowToTable(p) {
    const row = `<tr>
    <td> ${p.getPatient()}</td>
    <td> ${p.getFirstName()}</td>
    <td> ${p.getMiddleName()}</td>
    <td> ${p.getLastName()}</td>
    <td> ${p.getDateOfBirth()}</td>
    <td> ${p.getDepartment()}</td>
    <td> ${p.getIsOut()}</td>
    </tr>`;
    $("#tblPatient tbody").append(row);

}