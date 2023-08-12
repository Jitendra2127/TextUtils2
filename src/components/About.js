import React, { useState } from 'react'

export default function About(props) {
    
    // let myStyle={
    //     color:'black',
    //     backgroundColor:'black'
    // }
    
    // const [myStyle,setmyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black',
    //     fontWeight:"normal"
    // })
    
    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'black':'white',
    }
   

    return (
        <div className='container'>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze YOur text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                           Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or convert UpperCase to LowerCase and LowerCase to UpperCase. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>Free to use</strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            Textutils is a free character cunter tool that provides instant character count & word count statistics for a gives text. Textutils reports the number of words and character.
                            Thus it is suitable for writing text with word / character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed " type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                           This word counter software works in any web browsers such as Chrome, Firefox, Internet Explore, Safari. It suits to count character in facebook, blog, books, excel document,
                            pdf document etc. 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
