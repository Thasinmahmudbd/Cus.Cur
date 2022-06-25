const cusCur = document.querySelector('.cusCur');

document.addEventListener('mousemove', e =>{
    cusCur.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
})

document.addEventListener('click', () =>{
    cusCur.classList.add("clickAnimation");
    setTimeout(()=>{
    cusCur.classList.remove("clickAnimation");
    }, 500)
})