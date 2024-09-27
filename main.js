let btnModal = document.getElementById("btnModal")
let modal = document.getElementById("myModal")
let btnClose = document.getElementById("close")


btnModal.addEventListener("click", function(){
    modal.style.display = "block";
})

btnClose.addEventListener("click", function(){
    modal.style.display="none";
})
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }