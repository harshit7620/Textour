import React ,{useState} from 'react';

export default function TextForm(props) {
    const handleUpclick = () =>
    {
        console.log("uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Letters convert to Upper case" , "success");
        
    }

    const handleDownclick = () =>
    {
        console.log("uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Letters convert to Lower case" , "success");
  
         
    }
    const clearText = () =>
    {
        let newText = "";
        setText(newText); 
        props.showAlert("text cleared" , "success");
         
    }

    const copyText = () =>
    {
      let textt = document.getElementById("myBox");
      textt.select();
      navigator.clipboard.writeText(textt.value);
      props.showAlert("Copied to clipboard!" , "success");
    }

    const handleOnChange=(event) =>
    {
        console.log("change");
        setText(event.target.value);
        
    }


    
    const [text,setText]= useState('');
    // const [valuee,setValuee] = useState('false');
 
  return (
    <>
<div  className='container' style={{color: props.mode==='theme'?'white':'black'}}>  

<h2 className="d-inline">{props.heading}</h2>
<div  className="my-3">
  <textarea  className="form-control opacity-75 " value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='theme'?'black':'white' , color: props.mode==='theme'?'white':'black'}} id="myBox" rows="10"></textarea>
</div>
<button className='btn btn-primary mx-2 abc' onClick={handleUpclick}>Convert to Capital letters</button>
<button className='btn btn-primary mx-2 abc' onClick={handleDownclick} >Convert to Small letters</button>
<button className='btn btn-primary mx-2 abc' onClick={clearText}>Clear Text</button>
<button className='btn btn-primary mx-2 abc' onClick={copyText}>Copy Text</button>



</div>  
<div className="container my-5 " style={{color: props.mode==='theme'?'white':'black'}}>

    <h5 className=" bg-gradient-primary"> Your Word Summary : </h5>
    <p className=' opacity-75'>   {text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>

</div>
</>
  )
}

