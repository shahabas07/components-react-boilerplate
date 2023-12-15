import './App.css';
import { imageData } from './components/ImageData';
import GallaryFooter from './components/GallaryFooter';
import {Header} from './components/Header';
import {Body} from './components/Body';



function App() {
  return (
    <div>
      <Header/> 
      <Body shabs={imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
