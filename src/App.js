import Nav from './components/Nav'
import Header from './components/Header';
import Featurspage from './Featurspage';
import {Routes,Route} from 'react-router-dom'
import Simplebook from './components/Simplebook'
import Speedsearch from './components/Speedsearch'
import Easysharing from './components/Easysharing'
import Extension from './components/Extension';
import Faq from './components/Faq';
import Contact from './components/Contact';
import { useState } from 'react';
function App() {
  const [isactive,setIsactive] = useState('simple')
  return (
    <div className='font-rubik'>
        <Nav/>
        <Header/>
        <Featurspage setIsactive={setIsactive} isactive={isactive}/>
        <Routes>
               <Route path='/' exact element={<Simplebook />}/>
               <Route path='/speedsearch' exact element={<Speedsearch/>}/>
               <Route path='/easysharing' exact element={<Easysharing/>}/>
        </Routes>
        <Extension/>
        <Faq/>
        <Contact/>

    </div>
  );
}

export default App;
