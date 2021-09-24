let button = document.querySelector('.get-user')


async function queryGitHub(event){
    let user = document.querySelector('.user').value
    let query = "https://api.github.com/users/" + user
    console.log(query)
    let response = await fetch(query);
    let coderData = await response.json();
    console.log(coderData)
    writeData(coderData)
    return coderData;

}


function writeData(userData){
    let space = document.querySelector('.user-data')
    space.innerHTML= `
    <h1 class="my-2">Username: ${userData['login']}</h1>
    <div class="my-2"><img src="${userData['avatar_url']}"></div>
    <h3 class="my-2">Followers: ${userData['followers']} </h3>
    <h3 class="my-2">Following: ${userData['following']} </h3>
    
    `

}

button.addEventListener("click", queryGitHub)