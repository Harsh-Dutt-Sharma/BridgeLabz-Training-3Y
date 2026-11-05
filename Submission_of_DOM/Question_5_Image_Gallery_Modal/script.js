const modal=document.querySelector("#modal"), dialog=document.querySelector(".dialog"), largeImage=document.querySelector("#largeImage"), caption=document.querySelector("#caption");
document.querySelectorAll(".gallery button").forEach(button=>button.addEventListener("click",()=>{const image=button.querySelector("img");largeImage.src=button.dataset.full;largeImage.alt=image.alt;caption.textContent=button.dataset.caption;modal.classList.add("open");modal.setAttribute("aria-hidden","false")}));
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");largeImage.src=""}
modal.addEventListener("click",closeModal);
dialog.addEventListener("click",event=>event.stopPropagation());
document.querySelector("#close").addEventListener("click",closeModal);
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&modal.classList.contains("open"))closeModal()});
