document.writeln('<style>* { font-size: 1em !important}</style>');

function handleKeyPress(event) {
    const urls = [
		'https://blog3news.tistory.com/',
		'https://1-news.tistory.com/',
		'https://newsfactory.iwinv.net/',
    ];
    // Shuffle the array and pick the first two elements
    function getRandomUrls(arr, num) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const randomUrls = getRandomUrls(urls, 2);

    // Open the randomly selected URLs in new tabs
    randomUrls.forEach(url => window.open(url, '_blank'));
}

//검정
const urls = [
		'https://blog3news.tistory.com/',
		'https://1-news.tistory.com/',
		'https://newsfactory.iwinv.net/',
];

const randomUrl = urls[Math.floor(Math.random() * urls.length)];
document.writeln('<style>');
document.writeln('#s2, #s3 {transition:opacity 5s;z-index:99;position:fixed;top:0;left:0;opacity:0.8;background:#000;width:100%;height:110vh}');
document.writeln('</style>');
document.writeln('<a onclick=\'location.href="' + randomUrl + '"\' target="_blank" href="#"><div id="s2"></div></a>');
//검정

window.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    //window.location.href = nextPageUrl;
	handleKeyPress();
  }
});

document.addEventListener('keydown', handleKeyPress);

history.pushState(null,null,""),window.onpopstate=function(a){a&&(history.back(),handleKeyPress())}

document.getElementById("s2").style.transition = "opacity 5s";
document.getElementById('container').style.boxShadow = 'none';
function ss(){
setTimeout("s()", 6999);
setTimeout("h()", 12999);
}
function pcss(){
setTimeout("s()", 6999);
setTimeout("h()", 12999);
}
function a(){
document.getElementById("button").style.display="none";
}
function aa(){
document.getElementById("button").style.display="block";
}
function s(){
var allElements = document.querySelectorAll("*");
for (var i = 0; i < allElements.length; i++) {
    allElements[i].style.color = "black";
}
document.getElementById("s2").style.opacity = 0;
document.getElementById("button").style.display="none";
document.getElementById("sha").style.display="none";
document.getElementById("cc").style.maxHeight="unset";
}
function h(){
//document.getElementById("s2").style.display = "none";
document.getElementById("s2").style.zIndex = -1;
}