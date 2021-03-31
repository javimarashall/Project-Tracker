function presentData(name, type, wage, due) {

}

var projectFormEl = $("#project-form")
var submitButton = document.querySelector("#submitButton")
var projectName = document.querySelector("#projectName")
var projectType = document.querySelector("#projectType")
var projectWage = document.querySelector("#projectWage")
var projectDue = document.querySelector("#projectDue")

submitButton.addEventListener("click", takeValue );

function takeValue() {
    projectName.val()
    projectType.val()
    projectWage.val()
    projectDue.val()   
}