import './ComponentsCSS/Header.css'
import './ComponentsCSS/Nav.css'
import './ComponentsCSS/Main.css'
import './App.css'
import Header from './Conponents/Header'
import Main from './Conponents/Main'
import Nav from './Conponents/Nav'

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  )
}

export default App
