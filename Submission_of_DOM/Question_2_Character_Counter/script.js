const field=document.querySelector("#message"), counter=document.querySelector("#counter"), status=document.querySelector("#status");
function refresh(){const left=100-field.value.length;counter.textContent=`${left} characters remaining`;counter.classList.toggle("warning",left<=20&&left>0);counter.classList.toggle("danger",left===0);status.textContent=left===0?"Limit reached":"Typing enabled"}
field.addEventListener("input",refresh);
field.addEventListener("beforeinput",e=>{if(e.inputType.startsWith("insert")&&field.value.length>=100){e.preventDefault();status.textContent="Character limit reached"}});
document.querySelector("#reset").addEventListener("click",()=>{field.value="";refresh();field.focus()});refresh();
