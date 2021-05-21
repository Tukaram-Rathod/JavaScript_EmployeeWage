class EmployeePayrollData {
    //Property
    id;
    name;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...param){
        this.id = param[0];
        this.name = param[1];
        this.salary = param[2];
        this.gender = param[3];
        this.startDate = param[4];
    }

    //getter and setter method
    get name(){return this._name;}
    set name(name){ this._name = name;}

    //method
    toString(){
        const options = { year: 'numeric', month: 'long' , day: 'numeric'};  
        const empDate = this.startDate === undefined ? " undefined" :
                        this.startDate.toLocaleDateString("en-US",options);
        return "id " + this.id + ", name = '" + this.name + ", salary= " + this.salary + " ,"+ 
                "gender= " +this.gender + ", startDate= " + empDate;

    }
}
employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.name = 'john';
console.log(employeePayrollData.toString());
employeePayrollData = new EmployeePayrollData(3,"Terrisa",30000,"F",new Date());
console.log(employeePayrollData.toString());