function softUniReception(arr){
    let employe1 = Number(arr[0]);
    let employe2 = Number(arr[1]);
    let employe3 = Number(arr[2]);
    let students = Number(arr[3]);

    let employeesSum = employe1 + employe2 + employe3;
    let hours = 0;

    while(students > 0){
        hours++
        if(hours % 4 == 0){
            continue;
        }
        students -= employeesSum;
     }
     console.log(`Time needed: ${hours}h.`);
    }
softUniReception(['5','6','4','20'])