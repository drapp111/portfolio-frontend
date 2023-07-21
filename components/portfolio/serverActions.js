'use server'

export async function getImages(show_name) {
    const fetch_response = await fetch(process.env.API_ENDPOINT + 'retrieve-portfolio-images?show_name=' + show_name, {method: "GET", cache: "no-cache"});
    const images = await fetch_response.json();
    return images.images;
}

export async function getPageText(show_name) {
    const fetch_response = await fetch(process.env.API_ENDPOINT + 'retrieve-page-text?show_name=' + show_name, {method: "GET", cache: "no-cache"});
    const page_text = await fetch_response.json();
    return page_text.page_text;
}

export async function getShows() {
    const fetch_response = await fetch(process.env.API_ENDPOINT + 'retrieve-shows', {method: "GET", cache: "no-cache"});
    const shows = await fetch_response.json();
    return shows.shows;
}

export async function getStaticParams() {
    const fetch_response = await fetch(process.env.API_ENDPOINT + 'retrieve-static-params', {method: "GET", cache: "no-cache"});
    const static_params = await fetch_response.json();
    return static_params.static_params;
}
