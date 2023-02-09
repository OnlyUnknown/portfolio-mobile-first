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

document.getElementById('nav-links').addEventListener('click', myFunction());
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
  description: "Lorem Ipsum is simply dummy text of the printing"
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  + "text ever since the 1500s, when an unknown printer took a galley of type and"
  + "scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing "
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
  + "the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: "Snapshoot Portfolio.png",
  technologies: ["Codekit","GitHub", "JavaScript", "Bootsrap", "Terminal", "Codepen"],
  link: "https://onlyunknown.github.io/portfolio-mobile-first",
  source: "https://onlyunknown.github.io/portfolio-mobile-first",
},

{
  name: "Multi-Post Stories Gain+Glory",
  description: "Lorem Ipsum is simply dummy text of the printing"
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  + "text ever since the 1500s, when an unknown printer took a galley of type and"
  + "scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing "
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
  + "the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: "Snapshoot Portfolio.png",
  technologies: ["Codekit","GitHub", "JavaScript", "Bootsrap", "Terminal", "Codepen"],
  link: "https://onlyunknown.github.io/portfolio-mobile-first",
  source: "https://onlyunknown.github.io/portfolio-mobile-first",
},

{
  name: "Multi-Post Stories Gain+Glory",
  description: "Lorem Ipsum is simply dummy text of the printing"
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  + "text ever since the 1500s, when an unknown printer took a galley of type and"
  + "scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing "
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
  + "the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: "Snapshoot Portfolio.png",
  technologies: ["Codekit","GitHub", "JavaScript", "Bootsrap", "Terminal", "Codepen"],
  link: "https://onlyunknown.github.io/portfolio-mobile-first",
  source: "https://onlyunknown.github.io/portfolio-mobile-first",
},

{
  name: "Multi-Post Stories Gain+Glory",
  description: "Lorem Ipsum is simply dummy text of the printing"
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  + "text ever since the 1500s, when an unknown printer took a galley of type and"
  + "scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing "
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
  + "the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: "Snapshoot Portfolio.png",
  technologies: ["Codekit","GitHub", "JavaScript", "Bootsrap", "Terminal", "Codepen"],
  link: "https://onlyunknown.github.io/portfolio-mobile-first",
  source: "https://onlyunknown.github.io/portfolio-mobile-first",
},

{
  name: "Multi-Post Stories Gain+Glory",
  description: "Lorem Ipsum is simply dummy text of the printing"
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  + "text ever since the 1500s, when an unknown printer took a galley of type and"
  + "scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing "
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
  + "the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: "Snapshoot Portfolio.png",
  technologies: ["Codekit","GitHub", "JavaScript", "Bootsrap", "Terminal", "Codepen"],
  link: "https://onlyunknown.github.io/portfolio-mobile-first",
  source: "https://onlyunknown.github.io/portfolio-mobile-first",
},

{
  name: "Multi-Post Stories Gain+Glory",
  description: "Lorem Ipsum is simply dummy text of the printing"
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  + "text ever since the 1500s, when an unknown printer took a galley of type and"
  + "scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing "
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
  + "the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: "Snapshoot Portfolio.png",
  technologies: ["Codekit","GitHub", "JavaScript", "Bootsrap", "Terminal", "Codepen"],
  link: "https://onlyunknown.github.io/portfolio-mobile-first",
  source: "https://onlyunknown.github.io/portfolio-mobile-first",
},

]
