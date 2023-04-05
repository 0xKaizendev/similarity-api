

export default async function revokeApiKey({ keyId } : { keyId : string }) {
     // POST request to prevent CSRF in combination with SameSite LAX cookies, see
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    const res = await fetch("api/api-key/revoke", {
        method :  'POST' , 
        headers : {
            'Content-Type' :  "application/json"
        }, 
        body : JSON.stringify({keyId})
    })

    const data = (await res.json()) as {error?: string}

    if(data.error) {
        throw new Error(data.error)
    }
}