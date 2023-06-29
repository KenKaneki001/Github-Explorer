let username;
document.getElementById("submitB").onclick =function(){
    username= document.getElementById("rogers").value; 
















fetch(`https://api.github.com/users/${username}`).then((data) =>{
   return data.json();
}).then((objectData)=>{
    console.log(objectData);
    document.getElementById("raze").innerHTML= `${objectData.name}(@${username}) ` ;
    document.getElementById("fade").innerHTML= objectData.public_repos;
    document.getElementById("sova").innerHTML= objectData.followers;
    document.getElementById("sage").innerHTML= objectData.following;
})


fetch(`https://api.github.com/users/${username}/repos`).then((dataR) =>{
   return dataR.json();
}).then((objectDataR)=>{
    console.log(objectDataR);
  
    
})
}
