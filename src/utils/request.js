async function httpGetPixels(query) {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=12`, {
        headers: new Headers({
            'Authorization': "Bearer 563492ad6f917000010000019fad8ac1dcc7459fa5a4dd7008cd0ab6",
            "Content-Type": "application/json"
        })
    });
    return response.json();
}

export {
    httpGetPixels
}

