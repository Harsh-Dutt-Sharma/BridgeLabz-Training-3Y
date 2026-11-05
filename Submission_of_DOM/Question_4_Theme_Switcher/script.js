const body=document.body, output=document.querySelector("#current");
document.querySelectorAll("[data-theme]").forEach(button=>button.addEventListener("click",()=>{const theme=button.getAttribute("data-theme");body.setAttribute("data-theme",theme);document.documentElement.setAttribute("data-theme",theme);output.textContent=`Current theme: ${theme[0].toUpperCase()+theme.slice(1)}`}));
