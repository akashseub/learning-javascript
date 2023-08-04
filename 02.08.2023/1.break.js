let girlFriend = ['Suma', 'Bristi', 'Runa', 'Pori', 'Mou'];


// for(let i=0; i<=girlFriend.length; i++){
//     let girl = girlFriend[i];
//     if(girl === 'Mou'){
//         break;
//     }
//     console.log(girl);
    
// }

for(let i=0; i<girlFriend.length; i++){
    let girl = girlFriend[i];
    if(girl === 'Bristi'){
        continue;
    }
    console.log(girl);
}