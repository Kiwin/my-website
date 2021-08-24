import React from "react"
import "./App.css"
import BigNavItem from "./components/BigNavItem"
import LinkBar from "./components/LinkBar"

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
            <BigNavItem text="Projects" url="#" />
            <BigNavItem text="Gallery" url="#" />
            <BigNavItem text="Blog" url="#" />
          </ul>
          <LinkBar />
        </nav>
        <footer className="footer">
          <div>kiwin andersen</div>
        </footer>
      </div>
    </div>
  )
}

export default App
