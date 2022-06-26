import './styles/style.scss';

import TestComponent from './components/TestComponent';

const appEl = document.getElementById('app');
const testEl = document.createElement('div');

testEl.innerHTML = `<h1>test element inside ABOUT PAGE...</h1>`;
appEl.appendChild(testEl);

TestComponent();
