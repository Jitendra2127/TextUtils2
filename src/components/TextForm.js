// import { useState } from "react"
import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase is clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Upper Case","success");
    }
     
    const handleLoClick =()=>{
        setText(text.toLowerCase());
        props.showAlert("Convert to Lower Case","success");

    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const clean=()=>{
        setText("");
        props.showAlert("clean the text","success");
    }

    const [text, setText] = useState('');
    // text="new text"  wrong way to assign 
    // setText('fhsdh'); //right
    return (
        <>
            <div className='container'>
                <h1 className={`text-${props.title_color} mb-3`}>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Upper Case</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lower Case</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={clean}>Clean Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>  
                <p className="text-danger">{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p className='text-danger'>{0.008* text.split(" ").filter((element)=>{ return element.length!==0}) .length} Minutes read</p>
                <h2>Preview</h2>
                <p className="text-danger">{text.length>0?text:"Nothing to preview "}</p>
            </div>
        </>
    )
}
