export default function urlFix(pathname) {
    const newURL = pathname.replace("/", "");
    return (String(newURL));
};