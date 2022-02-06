// code your solution here
function superbowlWin(record){
    const win = record.find(result => result === 'W');
        if (win === 'W'){
            return record.year;
        }
}
