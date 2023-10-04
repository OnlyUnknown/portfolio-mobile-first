function myFunction() {
  const x = document.querySelector('#nav-links');
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

document.querySelector('#nav-links').addEventListener('click', myFunction());
document.getElementById('btn').addEventListener('click', changeIcon());

const projects = [{
  projectId: 'projectOne',
  name: 'Rescue the Earth page',
  description: 'The home page displays all the main information about the'
  + 'community as weel as speakers information The about page displays information'
  + 'about previous community work it has a mobile version too for each page',
  mobileimage: 'Mobile-pop.png',
  image: 'capstone module 1.png',
  technologies: ['HTML', 'CSS', 'JavaScript'],
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
  mobileimage: 'Mobile-pop.png',
  technologies: ['Ruby on Rails', 'Css', 'JavaScript', 'HTML'],
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
  mobileimage: 'Mobile-pop.png',
  technologies: ['Ruby on Rails', 'Css', 'JavaScript', 'HTML'],
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
  mobileimage: 'Mobile-pop.png',
  technologies: ['Ruby on Rails', 'Css', 'JavaScript', 'HTML'],
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
  mobileimage: 'Mobile-pop.png',
  technologies: ['Ruby on Rails', 'Css', 'JavaScript', 'HTML'],
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
  mobileimage: 'Mobile-pop.png',
  technologies: ['Ruby on Rails', 'Css', 'JavaScript', 'HTML'],
  link: 'https://onlyunknown.github.io/portfolio-mobile-first',
  source: 'https://onlyunknown.github.io/portfolio-mobile-first',
},

];

// eslint-disable-next-line no-unused-vars

function createpop(item) {
  // write daynamic list
  const html = `<section class="popup-d">
  <div class="pop-mobile-container">
  <div class="img-pop-holder">
      <img src="Mobile-pop.png">
      <div class="pop-mobile-close">X</div>
      </div>

<div class="close-background"><i id="pop-close" class="fa fa-close fa-2x"></i></div>
<div class="pop-img" ><img src="Snapshoot Portfolio.png"></div>
<div class="pop-title-container"><div class="pop-title"><h2>Multi-Post Stories Gain+Glory</h2> <div class="button-p-p btn-pop-d"><button class="trans-btn pop-btn">See live<img class="pop-icon" src="Iconseelive.png"></button><button class="trans-btn pop-btn">See source<img class="pop-icon" src="Vectorgithub.png"></button></div></div>
</div>
   <ul class="pop-prog-flex">
      <li class="prog-li-pop">Codekit</li>
      <li class="prog-li-pop">GitHub</li>
      <li class="prog-li-pop">Javascript</li>
      <li class="prog-li-pop popg1">Bootstrap</li>
      <li class="prog-li-pop popg1">Terminal</li>
      <li class="prog-li-pop popg1">Codepen</li>
     </ul>
     <div class="msg-contaier-pop"><p class="pop-msg">Lorem Ipsum is simply dummy text of the printing'
     + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
     + 'text ever since the 1500s, when an unknown printer took a galley of type and'
     + 'scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing '
     + "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since "
     + 'the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
     image: 'Snapshoot Portfolio.png</p></div>
      <div class="button-p btn-pop pop-img-p"><button class="trans-btn pop-btn" href"'https://onlyunknown.github.io/portfolio-mobile-first'">See live<img class="pop-icon" src="Iconseelive.png"></button><button class="trans-btn pop-btn" href="'https://onlyunknown.github.io/portfolio-mobile-first'">See source<img class="pop-icon" src="Vectorgithub.png"></button></div>
  </div></section>`;
  const parent = document.querySelector('#pop-1');
  parent.insertAdjacentHTML('beforeend', html);
}

function Load() {
  // Recent work project list
  projects.forEach((item, index) => {
    createpop(item, index);
    const img = document.createElement("img")
    
    img.src = item.image
    img.classList.add("modifiypic")
    const parents = document.querySelector('.grid-container');

    const workHolder = document.createElement('div');
    workHolder.classList.add('work');

    const titleholder = document.createElement('div');
    titleholder.classList.add('item');

    const title = document.createElement('h3');
    title.classList.add('title-p');

    title.innerHTML = item.name;

    const techListH = document.createElement('ul');
    techListH.classList.add('flex-prog');

    const projectBtnH = document.createElement('div');
    projectBtnH.classList.add('button-p');

    const projectBtn = document.createElement('button');
    projectBtn.classList.add('trans-btn');
    projectBtn.innerHTML = 'See project';
    projectBtn.setAttribute('onclick', 'popup()');
    projectBtnH.appendChild(projectBtn);

    for (let i = 0; i < item.technologies.length; i += 1) {
      const techList = document.createElement('li');
      techList.classList.add('prog-li');

      techList.innerHTML = item.technologies[i];
      techListH.appendChild(techList);
    }

    workHolder.appendChild(titleholder);
    workHolder.appendChild(img)
    titleholder.appendChild(title);
    titleholder.appendChild(techListH);
    titleholder.appendChild(projectBtnH);
    parents.appendChild(workHolder);
  });
}


// document.addEventListener('DOMContentLoaded', Load);

const seeproject = document.querySelector('#pop-1');
function popup() {
  seeproject.innerHTML = html2;
}

function sss() {
  const closebtn = document.querySelector('.close-background');
  const closebtnm = document.querySelector('.pop-mobile-close');
  closebtnm.onclick = function h1() {
    seeproject.innerHTML = '';
  };
  closebtn.onclick = function h2() {
    seeproject.innerHTML = '';
  };
}

document.addEventListener('DOMContentLoaded', popup);

document.addEventListener('click', sss);

function s1() {
  seeproject.innerHTML = '';
}
document.addEventListener('DOMContentLoaded', s1);

// const form = document.getElementById('contact');
// const email = form.element['inp-email']
// let = emailAddress = email.value;
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
// })
// form.submit();

const errorElement = document.querySelector('.error');

const emailValid = document.querySelector('.inp-email');

function validateForm() {
  if (emailValid.value.toLowerCase() !== emailValid.value) {
    errorElement.innerHTML = 'The Email needs to be in lower case';
    return false;
  }
  return true;
}

validateForm();


// Function to create and display a project popup
function displayProjectPopup(project) {
  // Create a div for the popup overlay
  const popupOverlay = document.createElement('div');
  popupOverlay.classList.add('project-popup');
  document.body.appendChild(popupOverlay);

  // Create a div for the popup content
  const popupContent = document.createElement('div');
  popupContent.classList.add('project-popup-content');
  popupOverlay.appendChild(popupContent);

  // Add close button to the popup content
  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
      popupOverlay.style.display = 'none';
  });
  popupContent.appendChild(closeButton);

  // Create and populate the project details in the popup content
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = project.name;
  popupContent.appendChild(projectTitle);

  const projectDescription = document.createElement('p');
  projectDescription.textContent = project.description;
  popupContent.appendChild(projectDescription);

  // Display the popup
  popupOverlay.style.display = 'block';
}

// Function to create project items and attach click event listeners
function createProjectItems() {
  const projectList = document.getElementById('projectList');

  projects.forEach((project) => {
      // Create a project item
      
      const projectItem = document.createElement('div');
      projectItem.classList.add('project-item');
      const img = document.createElement("img")
    
    img.src = project.image
    img.classList.add("modifiypic")
    const parents = document.querySelector('.grid-container');

    const workHolder = document.createElement('div');
    workHolder.classList.add('work');

    const titleholder = document.createElement('div');
    titleholder.classList.add('item');

    const title = document.createElement('h3');
    title.classList.add('title-p');

    title.innerHTML = project.name;

    const techListH = document.createElement('ul');
    techListH.classList.add('flex-prog');

    const projectBtnH = document.createElement('div');
    projectBtnH.classList.add('button-p');

    const projectBtn = document.createElement('button');
    projectBtn.classList.add('trans-btn');
    projectBtn.innerHTML = 'See project';
    
    projectBtnH.appendChild(projectBtn);

    for (let i = 0; i < project.technologies.length; i += 1) {
      const techList = document.createElement('li');
      techList.classList.add('prog-li');

      techList.innerHTML = project.technologies[i];
      techListH.appendChild(techList);
    }

    workHolder.appendChild(titleholder);
    workHolder.appendChild(img)
    titleholder.appendChild(title);
    titleholder.appendChild(techListH);
    titleholder.appendChild(projectBtnH);
    parents.appendChild(workHolder);
      projectItem.innerHTML = `
          <h3>${project.name}</h3>
          <button class="view-button">View Details</button>
      `;
      projectList.appendChild(projectItem);

      // Add click event listener to open the popup
      const viewButton = projectItem.querySelector('.view-button');
      viewButton.addEventListener('click', () => {
          displayProjectPopup(project);
      });
      const viewButton2 = workHolder.querySelector('.trans-btn');
      viewButton2.addEventListener('click', () => {
          displayProjectPopup(project);
      });
  });
}

// Initialize the project items
createProjectItems();