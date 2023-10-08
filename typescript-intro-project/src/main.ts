import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

//Import the new modules
import './topics/01-basic-types.ts' 
import './topics/02-object-interface.ts'
import './topics/03-functions.ts'
import './topics/04-functions-2.ts'
import './topics/05-exercise-types.ts'
import './topics/06-basic-destructuring.ts'
import './topics/07-array-destructuring.ts'
import './topics/08-functions-destructuring.ts'
import './topics/09-import-export.ts'
import './topics/10-classes.ts'
import './topics/11-classes-2.ts'
import './topics/12-generics.ts'
import './topics/13-decorators.ts'
import './topics/14-optional-chaining.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

console.log("Hello world from main.ts");