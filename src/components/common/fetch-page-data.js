import fetch from 'isomorphic-fetch';

export const fetchPageData = (locale) => {
    return fetch(`${process.env.PUBLIC_URL}/data-${locale}.json`).then(function(response) {
        return response.json();
    })
}

export const postFormspree = (form) => {
    //TODO: ENV config to add
    let CONTACT_EMAIL = 'duckbar2010@gmail.com';
    let url = `https://formspree.io/${CONTACT_EMAIL}`;
    return fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });
}