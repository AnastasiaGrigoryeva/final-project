import React from "react";
import './input.css'

function TextInput () {



    return( 
        <>
            <input className="input"   
                        type={type} 
                        value={value} 
                        autoComplete="off"
                        required
                        placeholder={type}
                        aria-describedby="uidnote"
            />
        </>
    )

}

export default TextInput;