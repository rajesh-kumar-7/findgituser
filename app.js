let btn=document.querySelector("#search").addEventListener('click',getuser);

async function getuser(){
    let username=document.querySelector("#username").value;
    
    let api=`https://api.github.com/users/${username}`;
    let response = await fetch(api);
    let data= await response.json();
    
let profile=document.querySelector("#pic").src= data.avatar_url;
let url=document.querySelector("#url")
url.href= data.html_url;
 url.innerText="Go to profile";
let follower=document.querySelector("#followers");
follower.innerText=`Follower:${data.followers}`;
let following= document.querySelector("#following");
following.innerText= `Following: ${data.following}`;
let name= document.querySelector("#name");
if(data.name === undefined){
    name.innerText="wrong username";
}else{

    name.innerText=data.name;
}
let bio=document.querySelector("#bio")
if(data.bio===null){
    bio.innerText="";

}else {

    bio.innerText=`Bio: ${data.bio}`;
}

};