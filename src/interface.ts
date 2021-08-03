interface employee{
    empFirstname?:string;
    empLastName?:string;
    empID?:number;
    empAges?:number;
    empSalary?:number;
    empIsBonus?:boolean;
}
function createAccount(config:employee):{empFirstname:string,empLastName:string, empID:number,empAges:number,empSalary:number,empIsBonus:boolean}{
    let newEmpolyee = {empFirstname:'Default firstname',empLastName:'Default Lastname',empID:111111 ,empAges:0,empSalary:20000,empIsBonus:true}
    if(config.empFirstname){
        newEmpolyee.empFirstname = config.empFirstname
    }
    if(config.empLastName){
        newEmpolyee.empLastName = config.empLastName
    }
    if(config.empID){
        newEmpolyee.empID = config.empID
    }
    if(config.empAges){
        newEmpolyee.empAges = config.empAges
    }
    if(config.empSalary){
        newEmpolyee.empSalary = config.empSalary
    }
    if(config.empIsBonus==true){
            newEmpolyee.empSalary = bonus(newEmpolyee.empSalary)
        }else{
            newEmpolyee.empIsBonus = false
        }
    
    return newEmpolyee
}
function bonus(salary:number, rate:number = 2.5){
    let bonusemployee = salary * rate
    return bonusemployee
}


let myEmp = createAccount({empFirstname:'Kanticha',empLastName:'Srisupanthong',empID:632110334 ,empAges:19,empSalary:20000,empIsBonus:true})
console.log(`Employee`, myEmp)