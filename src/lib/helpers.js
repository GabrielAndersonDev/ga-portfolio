export default function urlFix(pathname) {
    const newURL = pathname.replace("/", "");
    return (String(newURL));
};

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export function removeSpaces(text) {
    const replace = "%20";

    var newText = text.replace(" ", replace);

    return newText;
};