import React ,{ useState } from "react"
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("upper case ws clicked" + Text)
        let newtext =Text.toUpperCase();
        setText(newtext)
    }

    const handleOnChange = (event)=>{
        // console.log("on change ");
        setText(event.target.value);
        
    }

    const [Text , setText] = useState("Enter the text");
    
  return (
    <div>
        <h1>{props.heading}</h1>
        
            <div className="form-group mb-3">
                
                <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
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
