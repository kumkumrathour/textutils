import React,{useState} from 'react'

 
export default function Textform(props) {
    // usestate is a hook
    const [text , setText ] = useState("");    

    // handles click uppercase button
    const handleUpClick= ()=>{
        console.log("Uppercase was clicked" + text);
        let newText =text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!", "success");
    }

    // handles click lowercase button
    const handleLoClick= ()=>{
        console.log("Lowercase was clicked" + text);
        let newText =text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!", "success");
    }

    // handles click clear text button
    const handleclearClick= ()=>{
        console.log("clearcase was clicked" + text);
        let newText = "";
        setText(newText)
        props.showAlert("cleared text", "success");
    }

    const handleOnChange = (event)=>{
            // console.log("on change ");
            setText(event.target.value);

    }
 
    return (
        <div>
            <div className=" container" style = {{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>
                    {props.heading}
                </h1>
                <div className="mb-3">
                    <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white' ,
                     color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                     {/* this is a object inside javascript */}
                </div>
                <button className="btn btn-primary mx-3" onClick = {handleUpClick}>convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick = {handleLoClick}>convert to Lowercase</button>
                <button className="btn btn-primary mx-3" onClick = {handleclearClick}>clear Text</button>
            </div>
            <div className="container my-3" style= {{color: props.mode==='dark'?'white':'#042743'}}>
            <h1> your text summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters </p>
            <p> { 0.008 * text.split(" ").length}minutes read </p>
            <h2>preview</h2>
            <p>{text .length>0?text:" enter something  in the text box above to preview it here"}</p>
            </div>
        </div>
    )
}
