let result = document.getElementById("result");
let pagination = document.getElementById("pagination");

let current_page = 1;
let users_per_page = 4; 

document.addEventListener("DOMContentLoaded", function(){
    getUsers();
});

async function getUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    displayUsers(users);   
    setupPagination(users);
}

function displayUsers(users){
    result.innerHTML = "";
    let start_index = (current_page - 1) * users_per_page;
    let end_index = start_index + users_per_page;
    let paginated_users = users.slice(start_index, end_index);

    paginated_users.forEach((item, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${start_index + index + 1}</td>
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.address.street}</td>
            <td>${item.phone}</td>
            <td>${item.website}</td>
            <td>${item.company.name}</td>
        `;
        result.appendChild(tr);
    });
}

function setupPagination(users){
    pagination.innerHTML = "";
    let page_count = Math.ceil(users.length / users_per_page);

    for(let i = 1; i <= page_count; i++){
        let btn = document.createElement("button");
        btn.innerText = i;
        btn.className = current_page === i ? "btn btn-success mx-1" : "btn btn-outline-success mx-1";
        btn.addEventListener("click", function(){
            current_page = i;
            displayUsers(users);
            setupPagination(users); 
        });
        pagination.appendChild(btn);
    }
}