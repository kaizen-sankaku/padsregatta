import TestComponent from './components/TestComponent';

const appEl = document.getElementById('app');

if (appEl) {
  const testEl = document.createElement('div');

  testEl.innerHTML = `<h2>test element inside about.js...</h2>`;
  appEl.appendChild(testEl);
}

TestComponent();
