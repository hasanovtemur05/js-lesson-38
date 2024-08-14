// let result = document.getElementById("result")
// document.addEventListener("DOMContentLoaded", function(){
//     getUsers();
// });
// async function getUsers(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const users = await response.json()
//     displayUsers(users)   
// }
// function displayUsers(users){
//     result.innerHTML = ""
//     users.forEach((item, index)=>{
//         console.log(item);
        
//         let tr = document.createElement("tr")
//         tr.innerHTML = `
//             <td>${index + 1}</td>
//             <td>${item.name}</td>
//             <td>${item.username}</td>
//             <td>${item.email}</td>
//             <td>${item.address.street}</td>
//             <td>${item.phone}</td>
//             <td>${item.website}</td>
//             <td>${item.company.name}</td>
//         `
//         result.appendChild(tr)
//     })
// }


const name2 = document.getElementById("name")
const username = document.getElementById("username")
const email = document.getElementById("email")
const addres = document.getElementById("addres")
const phone = document.getElementById("phone")
const website = document.getElementById("website")
const company = document.getElementById("company")

name2.addEventListener("click", function(){
    document.addEventListener("DOMContentLoaded", function(){
    getUsers();
    });
    async function getUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    displayUsers(users)  
    }
    console.log(users);
})


   
