console.log(window.location.href);

const url = window.location.href;

if (url) {
    const paths = url.split('/');
    console.log(paths);

    const btn = document.getElementById('open');

    if (paths[3] == 'videos' && paths[4]) {
        btn.style.display = "";
        btn.href = "chotuve://videos/" + paths[4];
    }
    else if (paths[3] == 'users' && paths[4]) {
        btn.style.display = "";
        btn.href = "chotuve://users/" + paths[4];
    }
}