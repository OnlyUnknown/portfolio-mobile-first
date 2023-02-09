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

const seeproject = document.querySelector('#pop-1');
const seebtn = document.querySelector("#myBtn");



const closebtnm = document.querySelector('.pop-mobile-close');

const projects = [{
  projectId: 'projectOne',
  name: 'Multi-Post Stories Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing'
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  + 'text ever since the 1500s, when an unknown printer took a galley of type and'
  + 'scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing '
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
  + 'the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  image: 'Snapshoot Portfolio.png',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootsrap', 'Terminal', 'Codepen'],
  link: 'https://onlyunknown.github.io/portfolio-mobile-first',
  source: 'https://onlyunknown.github.io/portfolio-mobile-first',
},

{
  projectId: 'projectTwo',
  name: 'Multi-Post Stories Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing'
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  + 'text ever since the 1500s, when an unknown printer took a galley of type and'
  + 'scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing '
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
  + 'the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  image: 'Snapshoot Portfolio.png',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootsrap', 'Terminal', 'Codepen'],
  link: 'https://onlyunknown.github.io/portfolio-mobile-first',
  source: 'https://onlyunknown.github.io/portfolio-mobile-first',
},

{
  projectId: 'projectThree',
  name: 'Multi-Post Stories Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing'
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  + 'text ever since the 1500s, when an unknown printer took a galley of type and'
  + 'scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing '
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
  + 'the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  image: 'Snapshoot Portfolio.png',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootsrap', 'Terminal', 'Codepen'],
  link: 'https://onlyunknown.github.io/portfolio-mobile-first',
  source: 'https://onlyunknown.github.io/portfolio-mobile-first',
},

{
  projectId: 'projectFour',
  name: 'Multi-Post Stories Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing'
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  + 'text ever since the 1500s, when an unknown printer took a galley of type and'
  + 'scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing '
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
  + 'the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  image: 'Snapshoot Portfolio.png',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootsrap', 'Terminal', 'Codepen'],
  link: 'https://onlyunknown.github.io/portfolio-mobile-first',
  source: 'https://onlyunknown.github.io/portfolio-mobile-first',
},

{
  projectId: 'projectFive',
  name: 'Multi-Post Stories Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing'
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  + 'text ever since the 1500s, when an unknown printer took a galley of type and'
  + 'scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing '
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
  + 'the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  image: 'Snapshoot Portfolio.png',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootsrap', 'Terminal', 'Codepen'],
  link: 'https://onlyunknown.github.io/portfolio-mobile-first',
  source: 'https://onlyunknown.github.io/portfolio-mobile-first',
},

{
  projectId: 'projectSix',
  name: 'Multi-Post Stories Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing'
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  + 'text ever since the 1500s, when an unknown printer took a galley of type and'
  + 'scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing '
  + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
  + 'the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  image: 'Snapshoot Portfolio.png',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootsrap', 'Terminal', 'Codepen'],
  link: 'https://onlyunknown.github.io/portfolio-mobile-first',
  source: 'https://onlyunknown.github.io/portfolio-mobile-first',
},

];




// eslint-disable-next-line no-unused-vars
const html = `<section class="popup-d" id="myModal">
  <div class="pop-mobile-container">
  <div class="img-pop-holder">
      <img src="Mobile-pop.png">
      <div class="pop-mobile-close">X</div>
      </div>

<div class="close-background"><i id="pop-close" class="fa fa-close fa-2x"></i></div>
<div class="pop-img" ><img src="Snapshoot Portfolio.png"></div>
<div class="pop-title-container"><div class="pop-title"><h2>Keeping track of hundreds of
  components</h2> <div class="button-p-p btn-pop-d"><button class="trans-btn pop-btn">See live<img class="pop-icon" src="Iconseelive.png"></button><button class="trans-btn pop-btn">See source<img class="pop-icon" src="Vectorgithub.png"></button></div></div>
</div>
   <ul class="pop-prog-flex">
      <li class="prog-li-pop">Codekit</li>
      <li class="prog-li-pop">GitHub</li>
      <li class="prog-li-pop">Javascript</li>
      <li class="prog-li-pop popg1">Bootstrap</li>
      <li class="prog-li-pop popg1">Terminal</li>
      <li class="prog-li-pop popg1">Codepen</li>
     </ul>
     <div class="msg-contaier-pop"><p class="pop-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy 
       text ever since the 1500s, when an unknown printer took a galley 
       of type and scrambled it 1960s with the releaLorem Ipsum is simply 
       dummy text of the printing and typesetting industry. Lorem Ipsum has 
       been the industry's standard dummy text ever since the 1500s, when an 
       unknown printer took a galley of type and scrambled it 
      1960s with the relea</p></div>
      <div class="button-p btn-pop pop-img-p"><button class="trans-btn pop-btn">See live<img class="pop-icon" src="Iconseelive.png"></button><button class="trans-btn pop-btn">See source<img class="pop-icon" src="Vectorgithub.png"></button></div>
  </div></section>`;

  projects.forEach((item, index) => {
    // write daynamic list
    console.log(item, index);
  });

 

seebtn.onclick = function() {
  seeproject.innerHTML = html;
};
seebtn.addEventListener("click", sss);

function sss(){
const closebtn = document.querySelector('.close-background');

closebtn.onclick = function() {
  seeproject.innerHTML = '';
};
}
