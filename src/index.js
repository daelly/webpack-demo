import _ from 'lodash';
import './style.css'
import Icon from './toy.ico'

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());