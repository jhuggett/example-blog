import jwt from "jsonwebtoken"
import axios from "axios"

export default function test() {
    console.log("TEST");

    const key = process.env.PRIVATE_KEY
    
    const iss = process.env.APP_ID
    
    const now = Math.floor(Date.now() / 1000)

    const payload = {
        iat: now,
        exp: now + (10 * 60),
        iss: iss
    }

    console.log(Date.now());
    

    const appJWT: string = jwt.sign(payload, key, { algorithm: 'RS256'});
    
    console.log("JWT (below):");
    
    console.log(appJWT);
    console.log(payload);
    

    axios({
        method: "POST",
        url: "https://api.github.com/app/installations/8881373/access_tokens",
        headers: {
            Authorization: `Bearer ${appJWT}`,
            Accept: 'application/vnd.github.machine-man-preview+json'
        },
    }).then( response => {
        console.log("success");
        console.log(response);
        
        
    }).catch( err => {
        console.log("failed");
        console.log(err.response);
        
        
    })
    
    
}