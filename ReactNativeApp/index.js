<<<<<<< HEAD
const container = document.querySelector('#headContainer')



    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
  
    // add the text node to the newly created div
    container.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");

function vasia(selector) {
    const button = document.createElement('button');
    const span = document.createElement('sapn');
    const div = document.createElement('div');
    const img = document.createElement('img');

    button.setAttribute('class', 'sosy');

    div.appendChild(img);
    span.appendChild(div);
    button.appendChild(span);

    document.querySelector(selector).appendChild(button);
}
=======
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
>>>>>>> developer
