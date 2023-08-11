import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState('dark');

  const [alert,setAlert] = useState();

   const showAlert = (message, type )=>{
     setAlert({
      msg: message,
      type: type 

     })
   }





   
    const toggleMode = ()=> {
      if(mode === 'light') {
        setMode = ('dark');
        document.body.style.backgroundColor = "grey";
      }
      else{
        setMode = ('light');
      }
    }
   


  return (
    <>




<center><Navbar title ="UPPERCASE CONVERTER" text="Company" text2="contact us" mode= {mode} toggleMode = {toggleMode} /></center>
<Alert alert="This Website is underdevelopment and its is only for educational purpose only "/>
<div className ="container my-7">

          
          <TextForm heading="ENTER TEXT HERE" mode={mode}/>
        <About/>
      
      </div>
    
</>
  );
}

 //export default App;
 export default App;

