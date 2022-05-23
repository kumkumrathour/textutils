import Navbar from './components/Navbar';
import React,{useState} from'react';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Alert from './components/Alert';
import { Route,Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //it tell us that weather dark mode is unable or not 
  const[alert, setAlert]= useState(null);
  // methord of setNAme of alert(ya ek function ha jo help krega alert to show kwene ma ) 
  const showAlert = (message,type)=>{
    // now alert become an object here
    console.log("Inside show alert!",message,type)
    setAlert({                
        msg:message,
        type:type                
      })
      setTimeout(()=>{
        setAlert(null);
      },3000);
  }
    //function for togglemode 
  const toggleMode = ()=>{
      if(mode === 'light'){
        setMode ('dark');
       document.body.style.backgroundColor ='#042743';
       showAlert("dark mode has been enables" ," success");
      }
      else{
        setMode(' light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enable" , "success");
      }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode= { toggleMode}/>
      <Alert alert = {alert}/>      
      <Routes>      
      <Route path="/" element={<HomePage showAlert={showAlert} toggleMode={toggleMode} />}/>
      <Route path="/about" element={<AboutPage />}/>
      
      </Routes>
    </>
  );
}

export default App;
