

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
  mobileimage: `Mobile-pop.png`,
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
  mobileimage: `Mobile-pop.png`,
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
  mobileimage: `Mobile-pop.png`,
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
  mobileimage: `Mobile-pop.png`,
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
  mobileimage: `Mobile-pop.png`,
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
  mobileimage: `Mobile-pop.png`,
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootsrap', 'Terminal', 'Codepen'],
  link: 'https://onlyunknown.github.io/portfolio-mobile-first',
  source: 'https://onlyunknown.github.io/portfolio-mobile-first',
},

];

let modal = "";



// eslint-disable-next-line no-unused-vars


function popup() {
  seeproject.innerHTML = html;
};
addEventListener("click", sss);

function sss(){
const closebtn = document.querySelector('.close-background');
const closebtnm = document.querySelector('.pop-mobile-close');
closebtnm.onclick = function(){
  seeproject.innerHTML = ''
};
closebtn.onclick = function() {
  seeproject.innerHTML = '';
};
};

  function createpop(item, index) {
    // write daynamic list
    const html = `<section class="popup-d" id="project${index}">
  <div class="pop-mobile-container">
  <div class="img-pop-holder">
      <img src="${item.mobileimage}">
      <div class="pop-mobile-close">X</div>
      </div>

<div class="close-background"><i id="pop-close" class="fa fa-close fa-2x"></i></div>
<div class="pop-img" ><img src="${item.image}"></div>
<div class="pop-title-container"><div class="pop-title"><h2>${item.name}</h2> <div class="button-p-p btn-pop-d"><button class="trans-btn pop-btn">See live<img class="pop-icon" src="Iconseelive.png"></button><button class="trans-btn pop-btn">See source<img class="pop-icon" src="Vectorgithub.png"></button></div></div>
</div>
   <ul class="pop-prog-flex">
      <li class="prog-li-pop">Codekit</li>
      <li class="prog-li-pop">GitHub</li>
      <li class="prog-li-pop">Javascript</li>
      <li class="prog-li-pop popg1">Bootstrap</li>
      <li class="prog-li-pop popg1">Terminal</li>
      <li class="prog-li-pop popg1">Codepen</li>
     </ul>
     <div class="msg-contaier-pop"><p class="pop-msg">${item.description}</p></div>
      <div class="button-p btn-pop pop-img-p"><button class="trans-btn pop-btn" href"${item.link}">See live<img class="pop-icon" src="Iconseelive.png"></button><button class="trans-btn pop-btn" href="${item.source}">See source<img class="pop-icon" src="Vectorgithub.png"></button></div>
  </div></section>`
  const parent = document.getElementById('pop-1');
  parent.insertAdjacentHTML('beforeend', html);

  };


  addEventListener('DOMContentLoaded', Load);

   function Load() {
    
      
      // Recent work project list
      projects.forEach((item, index) => {
        createpop(item, index);
      const parents = document.querySelector('.grid-container');

      const workHolder = document.createElement('div');
      workHolder.classList.add("wrok")

      const titleholder = document.createElement('div');
      titleholder.classList.add('item');
      
      const title = document.createElement("h3")
      title.classList.add("title-p")
      
     
      const techListH = document.createElement("ul");
      techListH.classList.add("flex-project");

      const techList = document.createElement("li");
      techList.classList.add("prog-li");

      techListH.appendChild(techList);

      titleholder.appendChild(title);
    workHolder.appendChild(titleholder);
    workHolder.appendChild(techListH)
    parents.appendChild(workHolder)
    
      
    

       } )
      /*email.oninvalid = function(event) {
        console.log(event);
        event.target.setCustomValidity('Email should only contain lowercase letters. e.g. mamun@example.com');
      }*/
   }
    





     