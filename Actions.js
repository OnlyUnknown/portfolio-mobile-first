function myFunction() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    
  }

  function changeIcon(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-close');
  
     anchor.querySelector("span").textContent = icon.classList.contains('fa-bars');
  }


function statment(name) {
    var ac = name.querySelector(a)
    if(document.getElementById("nav-links").style.display === "none"){
        document.getElementById("btn").classList.toggle('fa-bars')
    } else{
        document.getElementById("btn").classList.add('fa-bars')
    }
}