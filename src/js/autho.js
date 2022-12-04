import {clientId,authority,redirectUri} from '../../config.js'
var loginBtn = document.getElementById('loginbtn');

async function run(){
    console.log("running...");

    const config = {
        auth:{
            clientId: clientId,
            authority: authority,
            redirectUri: redirectUri
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