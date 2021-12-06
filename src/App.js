// import logo from './logo.svg';
import './App.css';

//import components
import Home from './components/home/home';
import './assets/newStyle.css';
import './assets/mainstyle.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/gallery" element={<Home />}/>
          <Route path="/shop" element={<Home />}/>
          <Route path="/whitepaper" element={<Home />}/>
        </Routes>
      </div>
    </Router>
    
  );
}
// FONT REPLACEMENT
// @font-face {
//   font-family: newThing;
//   src: url(/src/components/header/ArchivoNarrow-VariableFont_wght.ttf);
// }

export default App;
