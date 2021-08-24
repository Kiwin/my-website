import React from "react"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="header">
        <div>
          <h1>
            Welcome
            <span className="slogan slogan-scale">Slogan!</span>
          </h1>
        </div>
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <p>Home</p>
            </li>
            <li className="nav-item">
              <p>About</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default App
