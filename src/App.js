import './App.scss';
import{Routes, Route} from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Skills from './containers/skills'
import Contact from './containers/contact'
import Portfolio from './containers/portfolio'
import NavBar from './components/navBar';


function App() {
  return (
    <div className="App">
      {/*practicles js*/}

      {/*anvBar*/}
      <NavBar/>
      {/*main page content*/}

      <div className='App-main-page-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>

    </div>
  );
}

export default App;
