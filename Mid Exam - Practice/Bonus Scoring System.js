function bonusScoringSystem(arr){

    let students = Number(arr[0]);
    let lectures = Number(arr[1]);
    let aditionalBonus = Number(arr[2]);
    let totalBonus = 0;
    let maxBonus = 0;
    let atends = 0;

    for(let i = 3; i < arr.length; i++){
         
        let studentAtends = Number(arr[i]);

        totalBonus = studentAtends / lectures * (5 + aditionalBonus);

        if(maxBonus <= totalBonus){
            maxBonus = totalBonus;
            atends = studentAtends;
        }
        
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${atends} lectures.`);
}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])