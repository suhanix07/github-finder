document.getElementById("SearchBtn").addEventListener("click", function(){
    let username = document.getElementById("usernameInput").value;
    if(username === ""){
        document.getElementById("result").innerHTML = `<p>Please enter username.</p>`
        return;
    }
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        if(data.message === "Not Found"){
            document.getElementById("result").innerHTML = `<p>Username not found. Try again`;
        }else{
            document.getElementById("result").innerHTML = `
              <h2>${data.login}</h2>
              <img src="${data.avatar_url}">
              <p>No. of repos : ${data.public_repos}</p>
              <p>Followers : ${data.followers}</p>
              <p>Following : ${data.following}</p>
              <p>Link to Profile : <a href="${data.html_url}" target="_blank">View GitHub Profile</a></p>`
        }
      });
});
