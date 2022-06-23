/* eslint-disable node/no-unsupported-features/es-syntax */

import styles from './TestComponent.module.scss';

console.log(...Object.keys(styles));

function TestComponent() {
  const appEl = document.getElementById('app');
  const testCompEl = document.createElement('div');

  testCompEl.innerHTML = `<h3>TestComponent</h3>`;

  // apply styles from './TestComponent.module.scss'
  testCompEl.classList.add(...Object.values(styles));
  appEl.appendChild(testCompEl);
}

export default TestComponent;
