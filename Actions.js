function myFunction() {
  const x = document.getElementById('nav-links');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

function changeIcon() {
  const icon = document.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-close');
}

document.getElementById('nav-links').addEventListener('click', myFunction);
document.getElementById('btn').addEventListener('click', changeIcon());

var seeproject = document.querySelector(".popup-d");
var seebtn = document.querySelector("#myBtn");
var closebtn = document.querySelector(".close-background");

seebtn.onclick = function() {
  seeproject.style.display = "block"
};


closebtn.onclick = function() {
  seeproject.style.display = "none"
};


var seeprojectm = document.querySelector(".pop-mobile-container");
var seebtnm = document.querySelector("#myBtn");
var closebtnm = document.querySelector(".pop-mobile-close");

seebtnm.onclick = function() {
  seeprojectm.style.display = "block"
};


closebtn.onclick = function() {
  seeprojectm.style.display = "none"
};
