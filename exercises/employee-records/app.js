employees = [] 

function Employee(name, jobTitle, salary, status = "full-time" ) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary 
    this.status = status
    // this.printEmployeeForm = function() {
    //         console.log("Name: " + name + " Job title: " + jobTitle + " Salary: " + salary + " Status: " + status)
    // }
}

let nurs = new Employee("Nurs", "Sales Agent", "$60k")
let juma = new Employee("Juma", "Electrical Engineer", "$55k", "contract")
let samat = new Employee("Samat", "Cofounder", "$111k", "part-time")

// console.log(nurs)
// console.log(juma)
// console.log(samat)

// nurs.printEmployeeForm()
// juma.printEmployeeForm()
// samat.printEmployeeForm()

employees.push(nurs, juma, samat) 



console.log(employees)
