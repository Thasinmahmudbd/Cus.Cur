function themeChange() {
    var mode = document.querySelector('.themeMode');

    let theme;

    if(mode.classList.contains("LightMode")){
        mode.classList.remove("LightMode");
        mode.classList.add("DarkMode");
        theme = "dark";
    }else{
        mode.classList.add("LightMode");
        mode.classList.remove("DarkMode");
        theme = "light";
    }

    localStorage.setItem("ModeTheme", JSON.stringify(theme));
} 

let restoreTheme = JSON.parse(localStorage.getItem("ModeTheme"));
var mode = document.querySelector('.themeMode');

if(restoreTheme === "light"){
    mode.classList.add("LightMode");
    mode.classList.remove("DarkMode");
}else{
    mode.classList.add("DarkMode");
    mode.classList.remove("LightMode");
}