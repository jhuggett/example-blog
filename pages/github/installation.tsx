import { useGithubAuthRedirect } from 'react-tinacms-github'
import { useEffect } from 'react'

// Our GitHub app redirects back to this page with auth code
export default function Authorizing() {
  // Let the main app know, that we received an auth code from the GitHub redirect
  useEffect(() => {
 
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')

    localStorage["github_auth_code"] = code

}, [])

    return <h2>Authorizing with GitHub, please wait...</h2>
}