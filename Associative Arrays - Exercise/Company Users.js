function companyUsers(input){

    let companyEmployees = {};

    for(let companyEmployee of input){
        let [company , employeeID] = companyEmployee.split(' -> ');
        if(company in companyEmployees){
            if(!companyEmployees[company].includes(employeeID)){
                companyEmployees[company].push(employeeID);
            }
        }else {
            companyEmployees[company] = [employeeID];
        }
    }
    let entries = Object.entries(companyEmployees).sort((a , b) => a[0].localeCompare(b[0]));
    for(let [company , employeeID] of entries){
        console.log(company);
        employeeID.forEach(id => console.log(`-- ${id}`));
    }
}
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])