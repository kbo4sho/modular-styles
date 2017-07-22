
import _ from 'lodash';
import style from './styles.css';

// style.use();

console.log('Webpack Boiler Running...');

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());