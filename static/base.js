const switchTheme = () => {
    let theme = document.documentElement.className == 'light' ? 'dark' : 'light';
    document.documentElement.className = theme;
};
const clicking = () => console.log("click");

(function(){
    document.addEventListener("DOMContentLoaded", function() {
        window.fitText( document.getElementsByClassName("fit"), 0.6 );
        window.fitText( document.getElementsByClassName("minfit"), 0.7 );
        window.fitText( document.getElementsByClassName("minim"), 1.4 );
        console.log("ready");
    });
})();