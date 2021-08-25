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
            Kiwin Andersen
            <span className="slogan slogan-scale">Welcome!</span>
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
      </div>
      <footer className="footer">
      </footer>
    </div>
  )
}

export default App
