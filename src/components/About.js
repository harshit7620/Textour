import React from 'react'

export default function(props) {
  return (
    <div className={`text-${props.mode==='theme'?'light':'dark'}`}>
    <h1>About Us</h1>

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Click here to know About Us.
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Textour </strong> is a text-based website which has a many features which provide you to convert text into uppercase , lowercase. You can also copy text from text-box. Textour can also counts the words and characters of a text which you have enter.
      </div>
    </div>
  </div>
  
    
</div>
      
    </div>
  )
}
