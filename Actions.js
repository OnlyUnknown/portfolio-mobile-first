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

const seeproject = document.querySelector('.popup-d');
const seebtn = document.querySelector('#myBtn');
const closebtn = document.querySelector('.close-background');

seebtn.onclick = function aaa() {
  seeproject.style.display = 'block';
};

closebtn.onclick = function bbb() {
  seeproject.style.display = 'none';
};

const seeprojectm = document.querySelector('.popup-d');
const seebtnm = document.querySelector('#myBtn');
const closebtnm = document.querySelector('.pop-mobile-close');

seebtnm.onclick = function ccc() {
  seeprojectm.style.display = 'block';
};

closebtnm.onclick = function ddd() {
  seeprojectm.style.display = 'none';
};


const projects = [{
  name: "Multi-Post Stories Gain+Glory",
  description: "A platform website built as part of the Microverse JavaScript program.",
  image: "Snapshoot Portfolio.png",
  technologies: ["Ruby on Rails","CSS", "JavaScript", "HTML"],
  link: "https://onlyunknown.github.io/portfolio-mobile-first",
}]
