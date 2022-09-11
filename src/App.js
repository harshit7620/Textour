import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React ,{useState} from 'react';

function App() {
  const [mode , setMode] = useState('theme');
  const [alert , setAlert] = useState(null);

  const showAlert=(message , type) =>
  {
    setAlert({
      msg:message,
      type:type

    })

    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const toggleMode=() =>
  {
    if(mode==='theme')
    {
      document.body.style.backgroundImage = "url('https://wallpaperaccess.com/plain-white')"; 
    setMode('light');
    showAlert("Light Mode is enable" , "success");
    
    }
    else{
       document.body.style.backgroundImage = "url('https://wallpaperset.com/w/full/b/b/9/194930.jpg')"; 
      setMode('theme');
      showAlert("Theme Mode is enable" , "success");
     
    }
  }
  return (
<>

<Navbar title = "Textour" mode={mode} toggleMode={toggleMode}/>
<Alert alert = {alert}/>
<div className="container my-3">
            
  <TextForm className="abc" showAlert = {showAlert} heading= "Enter your Text :  " mode={mode}/>
         
          
</div>


</>
  );
}

export default App;
