import axios from "axios"
import { useGithubEditing } from "react-tinacms-github";

export default function auth() {
    console.log("Test");
    console.log(process.env.APP_CLIENT_ID);

    const authState = Math.random()
    .toString(36)
    .substring(7)

    

    //var authTab = open(`https://github.com/apps/edit-before-auth/installations/new`,'windowName','height=300,width=300')

     var authTab = open(`https://github.com/login/oauth/authorize?client_id=${process.env.APP_CLIENT_ID}&state=${authState}`,'windowName','height=300,width=300')
    
    window.addEventListener('storage', function(e: StorageEvent) {
        if (e.key == "github_auth_code") {
        fetch(
            `/api/create-github-access-token?code=${e.newValue}&state=${authState}`
        ).then(() => {
            if (authTab) {
                authTab.close()
            }

            
            
        })
        }
    })

    // axios({
    // method: "GET",
    // url: "https://github.com/login/oauth/authorize",
    // data: {
    //     client_id: process.env.APP_CLIENT_ID
    // }
    // }).then(resp => {

    // console.log(resp);
    //     ;
    //     newWin.document.write(resp.data);
    
    
    
    // }).catch(err => {
    // console.log(err);
    
    // })
}