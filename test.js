// const isVerified = true;
// if(isVerified == true){
//     console.log("User is verified")
// }
// else{
//     console.log("User is not verified");
// }

// console.log(`${isVerified === true ? "user is verified": "user is not verified" }`)

function getTimeString(time){
    // get hour and rest seconds
    const hour = parseInt(time/3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hour ${minute} minute ${remainingSecond} seconds ago`;
}

console.log(getTimeString(7865))