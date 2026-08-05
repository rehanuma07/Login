const loadBtn=document.getElementById("loadBtn");
const search=document.getElementById("search");
const users=document.getElementById("users");
let allUsers=[];
loadBtn.addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        allUsers=data;
        displayUsers(allUsers);
      /* data.forEach((user)=>{

        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`<h3>${user.name} <p>${user.email}</p> <p>${user.phone}</p> <p>${user.website}</p>`;
        users.appendChild(card);
       })*/
    })

});
search.addEventListener("input",()=>{
    const text=search.value.toLowerCase();
    const filteredusers=allUsers.filter((user)=>{
        return user.name.toLowerCase().includes(text);
    })
    displayUsers(filteredusers);
    
});
function displayUsers(userList){
    users.innerHTML="";
    userList.forEach((user)=>{
        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`<h3>${user.name}</h3>
                       <p>${user.email}</p>
                       <p>${user.phone}</p>
                       <p>${user.website}</p>`;
                       users.appendChild(card);
    })
}


