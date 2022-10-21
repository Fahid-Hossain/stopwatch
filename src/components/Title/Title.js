import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "./Title.css"

const Title = () => {
    const [title,setTitle] = useState("Hello Stopwatch");
    const [isInput,setIsInput] = useState(false);

    // Handle Icon events
    const handleIconClick =()=>{
        console.log("Clicked");
        setIsInput(true);
    }


    const handleIconBlur =(e)=>{
        setTitle(e.target.value)
        setIsInput(false)
    }

    const handleOnChange =(e)=>{
        setTitle(e.target.value);
    }

    const hanleOnKeyPress = (e)=>{
        e.key === "Enter" && setIsInput(false);
    }

    return (
        <div>
            { isInput ?  <Form.Control onBlur={handleIconBlur} onChange={handleOnChange} onKeyPress={hanleOnKeyPress} className="w-75 m-auto mt-4" size="lg" type="text" value={title} /> :
                <div className="mt-4 d-flex justify-content-around edit-title">
                    
                    <h1><i class="fas 
                    fa-light fa-stopwatch"></i> {title}</h1>
                    <span onClick={handleIconClick} className="edit-icon"><i className="fas fa-solid fa-pen"></i></span>
                </div>

            }
        </div>
    );
};

export default Title;