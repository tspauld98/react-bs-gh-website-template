import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import OffcanvasToggleButton from './OffcanvasToggleButton.jsx'
import ExamplePopover from './ExamplePopover.jsx'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="container py-4 px-3 mx-auto">

        <header className="d-flex justify-content-between align-items-md-center pb-3 mb-5 border-bottom">
          <h1 className="h4">
            <a href="" className="d-flex align-items-center text-dark text-decoration-none" id="logo-anchor">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#6f42c1" className="bi bi-bootstrap-fill d-inline-block me-2" viewBox="0 0 16 16">
                <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
                <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
              </svg>
              <span>Sass &amp; JS</span>
            </a>
          </h1>
          <a href="https://github.com/twbs/examples/tree/main/sass-js/" target="_blank" rel="noopener">View on GitHub</a>
        </header>

        <h1>Get started with Bootstrap</h1>
        <div className="col-lg-8 px-0">
          <p className="fs-4">You&apos;ve successfully loaded up a Bootstrap example! It&apos;s loaded up with <a href="https://getbootstrap.com/">Bootstrap 5</a> and tooling for compiling our Sass and JavaScript to your needs.</p>
          <p>If this button appears blue and the link appears purple, you&apos;ve done it!</p>
        </div>

        <OffcanvasToggleButton/>
        <ExamplePopover/>

        <hr className="col-1 my-5 mx-0"></hr>

        <h2>Guides</h2>
        <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
        <ul className="icon-list">
          <li><a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">Bootstrap quick start guide</a></li>
          <li><a href="https://getbootstrap.com/docs/5.3/getting-started/webpack/">Bootstrap Webpack guide</a></li>
          <li><a href="https://getbootstrap.com/docs/5.3/getting-started/parcel/">Bootstrap Parcel guide</a></li>
          <li><a href="https://getbootstrap.com/docs/5.3/getting-started/vite/">Bootstrap Vite guide</a></li>
          <li><a href="https://getbootstrap.com/docs/5.3/getting-started/contribute/">Contributing to Bootstrap</a></li>
        </ul>

        <hr className="mt-5 mb-4"></hr>

        <p className="text-muted">Created and open sourced by the Bootstrap team. Licensed MIT.</p>
      </div>
    </>
  )
}

export default App
