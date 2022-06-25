function copyHTML() {
    navigator.clipboard.writeText("<div class=\"cusCur\"></div>");

    const note = document.querySelector('.noteTarget');

    note.classList.add("note");
    setTimeout(()=>{
    note.classList.remove("note");
    }, 500)
} 

function copyJS() {
    navigator.clipboard.writeText("https://raw.githack.com/Thasinmahmudbd/Cus.Cur/Thasin/Scripts/cusCur.js");

    const note = document.querySelector('.noteTarget');

    note.classList.add("note");
    setTimeout(()=>{
    note.classList.remove("note");
    }, 500)
}

function copyCSS(curName) {

    if(curName=='hulkSmash'){
        navigator.clipboard.writeText("https://raw.githack.com/Thasinmahmudbd/Cus.Cur/Thasin/CursorStyle/hulkSmash.css");
    }else if(curName=='captainAmerica'){
        navigator.clipboard.writeText("https://raw.githack.com/Thasinmahmudbd/Cus.Cur/Thasin/CursorStyle/captainAmerica.css");
    }else if(curName=='thorHammer'){
        navigator.clipboard.writeText("https://raw.githack.com/Thasinmahmudbd/Cus.Cur/Thasin/CursorStyle/thorHammer.css");
    }

    const note = document.querySelector('.noteTarget');

    note.classList.add("note");
    setTimeout(()=>{
    note.classList.remove("note");
    }, 500)
}