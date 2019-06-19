let content = document.querySelector("#content ul");
let header = document.querySelector("#content h1");

onload = getUsers();

function getUsers()
{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json()})
        .then(data => {
            header.innerHTML = "Users"
            content.innerHTML = "";
            data.forEach(user => {
                content.innerHTML += `
                    <li>
                        <a href="#" onclick="getUser(${user.id})">${user.name}</a>
                        <ul>
                            <li>${user.email}
                            <li><a href="${user.website}">${user.website}</a>
                        </ul>
                    </li>
                `
            });
        }
    );
}

function getUser(userId)
{
    fetch('https://jsonplaceholder.typicode.com/users/'+userId)
        .then(response => {return response.json()})
        .then(user => {
            header.innerHTML = user.name;
            content.innerHTML = `
                <li>${user.username}
                <li>${user.email}
                <li>${user.phone}
            `
        }
    );

}