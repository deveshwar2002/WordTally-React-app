import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text );
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
       console.log("on change");
       setText(event.target.value)
  }
  const handleClearClick = ()=>{
    let newText = " ";
    setText(newText)
  }
  
    const [text,setText] = useState('Enter text here');


  return (
    <>
    <div
      ClassName="container">
     <h1>{props.heading}</h1>
<div ClassName="mb-7">
  <textarea ClassName="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" column="100" rows="7"></textarea>
</div>
<button type="button" ClassName="btn btn-success"onClick={handleUpClick}>Convert To Uppercase </button>
<button type="button" ClassName="btn btn-success"onClick={handleClearClick}>Clear Text </button>

    </div>
    <div className="container my-7">
      <h2>Text </h2>
      <p>{text.split (" ").length} Words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} MInutes Read </p>
      <h2>Preview Text</h2>
      <p>{text}</p>

    </div>
    </>
  )
}
