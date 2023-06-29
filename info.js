let username= "";
fetch(`https://api.github.com/users/${username}`).then((data) =>{
   return data.json();
}).then((objectData)=>{
    console.log(objectData);
})


fetch(`https://api.github.com/users/${username}/repos`).then((dataR) =>{
   return dataR.json();
}).then((objectDataR)=>{
    console.log(objectDataR);
})
console.log()