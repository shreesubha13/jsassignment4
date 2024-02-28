const linkedinProfileRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

function isValidLinkedInProfileURL(url) {
    return linkedinProfileRegex.test(url);
}

let url = 'https://www.linkedin.com/in/subhashree-g-6928801a7/'


if (isValidLinkedInProfileURL(url)) {
    console.log(`"${url}" is a valid LinkedIn profile URL.`);
} else {
    console.log(`"${url}" is not a valid LinkedIn profile URL.`);
}