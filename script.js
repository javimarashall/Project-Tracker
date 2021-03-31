function presentData(name, type, wage, due) {

}


var submitButton = $("#submitButton")
var projectName = $("#projectName")
var projectType = $("#projectType")
var projectWage = $("#projectWage")
var projectDue = $("#projectDue")
var tableRow = $("<tr>")
var tableDetail = $("<td>")

submitButton.addEventListener("click", takeValue );

function takeValue( ) {
    
    nameOfProject = projectName.val()
    typeOfProject = projectType.val()
    wageOfProject = projectWage.val()
    dueOfProject =projectDue.val()
    presentData(nameOfProject, typeOfProject, wageOfProject, dueOfProject) 
}

