// import logo from './logo.svg';
import './App.css';

//import components
import Home from './components/home/home';
import Gallery from './components/gallery/gallery';
import './assets/newStyle.css';
import './assets/mainstyle.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import WhitePaper from './components/whitepaper/whitepaper';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/whitepaper" element={<WhitePaper />}/>
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
