function myFunction() {
  const x = document.querySelector('#nav-links');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function changeIcon() {
  const icon = document.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-close');
}

document.querySelector('#nav-links').addEventListener('click', myFunction());
document.getElementById('btn').addEventListener('click', changeIcon());

const projects = [
  {
    projectId: 'projectSix',
    aimation: 'fade-left',
    name: 'Weather App',
    description: 'A single-page application has been built using React and incorporates the API exclusively through React.js and Redux Toolkit. The project retrieves data from two APIs provided by the same source to display daily forecasts for the top 50 cities.',
    image: './pics/WeatherAppProject.png',
    mobileimage: './pics/WeatherAppProject.png',
    technologies: ['React.js', 'Redux-ToolKit', 'Responsive', 'CSS', 'JavaScript'],
    link: 'https://weather-website-z9by.onrender.com/',
    source: 'https://github.com/OnlyUnknown/weather-react-capstone',
  },

  {
    projectId: 'projectFive',
    aimation: 'fade-bottom',
    name: 'Math Magician',
    description: 'It\'s a single application that utilizes React and Redux to add books via an API, and also has the capability to remove books.',
    image: './pics/MathMagicianProject.png',
    mobileimage: './pics/MathMagicianProject.png',
    technologies: ['React.js', 'JavaScript', 'API', 'HTML'],
    link: 'https://math-magician-abdullah-render.onrender.com/',
    source: 'https://github.com/OnlyUnknown/Math-magicians',
  },

  {
    projectId: 'projectFour',
    aimation: 'fade-right',
    name: 'Books Store',
    description: 'It\'s a single application that uses React and Redux to add books via an API and also has the ability to delete them.',
    image: './pics/BooksStoreProject.png',
    mobileimage: './pics/BooksStoreProject.png',
    technologies: ['React', 'Redux', 'API', 'Css', 'JavaScript', 'HTML'],
    link: 'https://book-store-f2pi.onrender.com/',
    source: 'https://github.com/OnlyUnknown/book-store',
  },

  {
    projectId: 'projectThree',
    aimation: 'fade-left',
    name: 'Leaderboard',
    description: 'I have utilized Webpack for the leaderboard and API for posting and recording your score.',
    image: './pics/leaderboard.png',
    mobileimage: './pics/leaderboard.png',
    technologies: ['Webpack', 'Css', 'JavaScript', 'HTML'],
    link: 'https://leaderboard-cwrq.onrender.com/',
    source: 'https://github.com/OnlyUnknown/re-Leaderboard',
  },

  {
    projectId: 'projectTwo',
    aimation: 'fade-bottom',
    name: 'Awsome Books',
    description: 'It\'s a website featuring a single-page application that utilizes Local Storage. The technologies used include JavaScript, HTML, and CSS.',
    image: './pics/AwsomeBooks.png',
    mobileimage: './pics/AwsomeBooks.png',
    technologies: ['Css', 'JavaScript', 'HTML'],
    link: 'https://onlyunknown.github.io/Awesome-books-ES6/',
    source: 'https://github.com/OnlyUnknown/Awesome-books-ES6',
  },
  {
    projectId: 'projectOne',
    aimation: 'fade-right',
    name: 'Rescue the Earth page',
    description: 'The home page displays all the main information about the community, as well as information about the speakers. The about page provides details about the community\'s previous work. Each page also has a mobile version.',
    mobileimage: './pics/capstoneModule1.png',
    image: './pics/capstoneModule1.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    link: 'https://onlyunknown.github.io/Capstone-Mudole1/',
    source: 'https://github.com/OnlyUnknown/Capstone-Mudole1',
  },
];

// eslint-disable-next-line no-unused-vars

// document.addEventListener('DOMContentLoaded', Load);

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
  const html = document.createElement('section');
  html.classList.add('popup-d');
  html.innerHTML = `<div class="pop-mobile-container">
  <div class="img-pop-holder">
      <img src=${project.image}>
      <div class="pop-mobile-close">X</div>
      </div>

<div class="close-background"><i id="pop-close" class="fa fa-close fa-2x"></i></div>
<div class="pop-img" ><img class="pop-img" src=${project.image}></div>
<div class="pop-title-container"><div class="pop-title"><h2>${project.name}</h2> <div class="button-p-p btn-pop-d"><a href=${project.link} target=_blank><button class="trans-btn pop-btn">See live<img class="pop-icon" src="./pics/Iconseelive.png"></button></a><a href=${project.source} target=_blank><button class="trans-btn pop-btn">See source<img class="pop-icon" src="./pics/Vectorgithub.png"></button></a></div></div>
</div>
   <ul class="pop-prog-flex">
      
     </ul>
     <div class="msg-contaier-pop"><p class="pop-msg">${project.description}</p></div>
      <div class="button-p btn-pop pop-img-p"><a href=${project.link} target=_blank><button class="trans-btn pop-btn" >See live<img class="pop-icon" src="./pics/Iconseelive.png"></button></a><a href=${project.source} target=_blank><button class="trans-btn pop-btn">See source<img class="pop-icon" src="./pics/Vectorgithub.png"></button></a></div>
  </div>`;
  // Create a div for the popup overlay

  const popupOverlay = document.createElement('div');
  popupOverlay.classList.add('project-popup');
  document.body.appendChild(popupOverlay);

  // Create a div for the popup content
  const popupContent = document.createElement('div');
  popupContent.classList.add('project-popup-content');
  popupOverlay.appendChild(html);

  // Add close button to the popup content
  const closeButtons = document.querySelectorAll('.close-background');
  const closeMobileButtons = document.querySelectorAll('.pop-mobile-close');
  closeMobileButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
      popupOverlay.style.display = 'none';
    });
  });
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
      popupOverlay.style.display = 'none';
    });
  });
  const techul = document.querySelectorAll('.pop-prog-flex');
  techul.forEach((tech) => {
    project.technologies.forEach(((techn) => {
      const techli = document.createElement('li');
      techli.classList.add('prog-li-pop');
      techli.innerHTML = techn;
      tech.appendChild(techli);
    }));
  });
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
  projects.forEach((project) => {
    // Create a project item

    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    const img = document.createElement('img');

    img.src = project.image;
    img.classList.add('modifiypic');
    const parents = document.querySelector('.grid-container');

    const workHolder = document.createElement('div');
    workHolder.classList.add(project.aimation);
    workHolder.classList.add('reveal');

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
    workHolder.appendChild(img);
    titleholder.appendChild(title);
    titleholder.appendChild(techListH);
    titleholder.appendChild(projectBtnH);
    parents.appendChild(workHolder);
    projectItem.innerHTML = `
          <h3>${project.name}</h3>
          <button class="view-button">View Details</button>
      `;

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

function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i += 1) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', reveal);
