let username;
document.getElementById("submitB").onclick =function(){
    username= document.getElementById("rogers").value; 
















fetch(`https://api.github.com/users/${username}`).then((data) =>{
   return data.json();
}).then((objectData)=>{
    console.log(objectData);
    console.log(objectData.public_repos);
    document.getElementById("Mylabel").innerHTML= username ;
  
})


fetch(`https://api.github.com/users/${username}/repos`).then((dataR) =>{
   return dataR.json();
}).then((objectDataR)=>{
    console.log(objectDataR);
  
    
})
}
