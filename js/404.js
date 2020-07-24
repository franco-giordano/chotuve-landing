console.log(window.location.href);

const url = window.location.href
if (url) {
    const paths = url.split('/');
    console.log(paths);
}