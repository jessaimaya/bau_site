const switchTheme = () => {
    let theme = document.documentElement.className == 'light' ? 'dark' : 'light';
    document.documentElement.className = theme;
    toggleThemedElements(); 
};

const toggleThemedElements = () => {
    let theme = document.documentElement.className == 'light' ? 'dark' : 'light';
    let themedElements = document.getElementsByClassName('themed');
    console.log(theme);
    Array.from(themedElements).forEach(elem => { 
        console.log(elem.style.display);
        if (elem.classList.contains(theme)) {
            elem.style.display = "block";
        } else {
            elem.style.display = "none";
        }

        console.log(elem.style.display);
    });
};

const clicking = () => console.log("click");

(function(){
    document.addEventListener("DOMContentLoaded", function() {
        toggleThemedElements();
        window.fitText( document.getElementsByClassName("fit"), 0.6 );
        window.fitText( document.getElementsByClassName("job__title"), 2 );
        window.fitText( document.getElementsByClassName("job__details"), 2 );
        window.fitText( document.getElementsByClassName("minfit"), 0.7 );
        window.fitText( document.getElementsByClassName("minim"), 1.4 );
        window.fitText( document.getElementById("skills"), 1.3 );
        window.fitText( document.getElementById("experience"), 0.5 );
        console.log("ready");
    });
})();