function copyHTML() {
    navigator.clipboard.writeText("<div class=\"cusCur\"></div>");

    const note = document.querySelector('.noteTarget');

    note.classList.add("note");
    setTimeout(()=>{
    note.classList.remove("note");
    }, 500)
} 