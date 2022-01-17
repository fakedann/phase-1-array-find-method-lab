// code your solution here

function superbowlWin(arr){
    
    let isWin = arr.find( element => element['result'] === 'W');
    if (isWin === undefined){
        return isWin;
    }
    return isWin['year'];
}


