import React ,{ useState } from "react"
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("upper case ws clicked" + Text)
        let newtext =Text.toUpperCase();
        setText(newtext)
    }
    const handlelowClick = ()=>{
        // console.log("upper case ws clicked" + Text)
        let newtext =Text.toLowerCase();
        setText(newtext)
    }
    const handleclearClick = ()=>{
        // console.log("upper case ws clicked" + Text)
        let newtext ="";
        setText(newtext)
    }

    const handleOnChange = (event)=>{
        // console.log("on change ");
        setText(event.target.value);
        
    }

    const [Text , setText] = useState("");
    
  return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
            
                <div className="form-group mb-3">
                    
                    <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handlelowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleclearClick}>Clear text</button>
        </div>
        <div className="container my-2">
                <h1>Your Text Summary</h1>
                <p> {Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{Text}</p>
        </div>
    </>
  )
}

//we will define types of props 
TextForm.prototype={
    heading: PropTypes.string.isRequired,
    
     }
//default props
TextForm.defaultProps={
    heading: 'Set title here',
    
}
