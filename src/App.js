import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from'react';
// import About from './components/About';
import Alert from './components/Alert';

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
    {/* { <Navbar title="TextUtils"/> } */}
    <Navbar title="Textutils" mode={mode} toggleMode= { toggleMode}/>
   {/* { <Navbar title = "TextUtils" aboutText="About TextUtils "/> } */}
  {/* <Navbar/> */}
    <Alert alert = {alert}/>
  <div className="container my-3">
  <Textform showAlert={showAlert} heading = " enter the text to ananlyse below" mode={mode} />
   {/* <About/ > */}
  </div> 
    </>
  );
}

export default App;
