let username;
fetch("https://api.github.com/users/KenKaneki001").then((data) =>{
   return data.json();
}).then((objectData)=>{
    console.log(objectData);
})


fetch("https://api.github.com/users/KenKaneki001/repos").then((dataR) =>{
   return dataR.json();
}).then((objectDataR)=>{
    console.log(objectDataR);
})
