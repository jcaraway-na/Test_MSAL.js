
var loginBtn = document.getElementById('loginbtn');

async function run(){
    console.log("running...");

    const config = {
        auth:{
            clientId: '8ecfdcd6-cd01-4f15-935b-af8d2b00c77b',
            authority: 'https://login.microsoftonline.com/organizations',
            redirectUri: 'http://localhost:8080'
        }
    };

    var client = new Msal.UserAgentApplication(config);
    var options = {
        scopes:['user.read']
    };
    let loginResponse = await client.loginPopup(options);

    console.dir(loginResponse);
};

loginBtn.addEventListener("click",run());