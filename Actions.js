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
