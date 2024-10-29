        const click = document.getElementById('click');
        const textDiv = document.getElementById('text');
        click.addEventListener('click', () => {
setTimeout(function() {
    document.getElementById("click").style.display="none";
    document.getElementById("content").style.opacity = 1;
	document.documentElement.style.backgroundColor = "#fff";
}, 9000);
        });