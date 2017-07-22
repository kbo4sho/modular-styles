import h1 from './h1.css';

export default function() {
  var element = document.createElement('h1');
  element.innerHTML = 'Pizza Time';
  element.classList.add(h1.red);
  document.body.appendChild(element);
}



