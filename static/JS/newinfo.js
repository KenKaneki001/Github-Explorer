let username;
document.getElementById("submitB").onclick =function(){
    username= document.getElementById("rogers").value; 
 


    fetch(`https://api.github.com/users/${username}`).then((data) =>{
   return data.json();
}).then((objectData)=>{
    console.log(objectData);
    document.getElementById("profile").src=objectData.avatar_url;
    document.getElementById("proName").innerHTML=`${objectData.name}(@${objectData.login})`
    document.getElementById("Fr").innerHTML=`Followers:${objectData.followers}`
    document.getElementById("Fg").innerHTML=`Followings:${objectData.following}`
    document.getElementById("Rep").innerHTML=`Repositories(${objectData.public_repos})`
})
fetch(`https://api.github.com/users/${username}/repos`).then((dataR) =>{
   return dataR.json();
}).then((objectDataR)=>{
    console.log(objectDataR);
    let i;
    for(i=0; i<objectDataR.length; i++){
        document.getElementById(`Repo${i}`).innerHTML=objectDataR[i].name;
        document.getElementById(`Repo${i}`).href=objectDataR[i].html_url;
        document.getElementById(`FOR${i}`).innerHTML=`fork(${objectDataR[i].forks_count})`;
        document.getElementById(`FOR${i}`).href=`https://github.com/${username}/${objectDataR[i].name}/fork` ;

    }
    
})
}