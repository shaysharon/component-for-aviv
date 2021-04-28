import ReactDOM from 'react-dom'
import React from 'react'
import App from './src/app'

console.log('in wrapper.js');

let container = null;
let m = {}

const rerender = options => {
  m.options = {...options}
  render()
}

const render = () => {
  ReactDOM.render(
    <App color={m.options.color} />,
    container
  )
}
const augmentedC = (options, element) => {
  m = { options, element }

  container = element.querySelector('#augmentedC__');
  if (container === null) {
    container = document.createElement('div');
    container.id = 'augmentedC__';
    container.style.cssText = 'position:fixed; top:0; left:0; right:0; bottom:0;'
    element.appendChild(container);
  }

  render()

  return rerender;
}

export default augmentedC