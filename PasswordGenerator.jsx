
import { useState } from "react";
import "./PasswordGenerator.css";

export const PasswordGenerator = ()=> {

    const [length,setLength] = useState("8");
    const [upperCase,setUpperCase] = useState(true);
    const [lowerCase,setLowerCase] = useState(true);
    const [numbers,setNumbers] = useState(true);
    const [specialCase,setSpecialCase] = useState(true);
    const [password,setPassword] = useState("");

    const generatePassword = ()=>{
        let charSet = "";

        if(upperCase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(lowerCase) charSet += "abcdefghijklmnopqrstuvwxyz";
        if(numbers) charSet += "0123456789";
        if(specialCase) charSet += "!@#$%^&*()_-+=";

        let generatedPassword = "";

        for(let i=0; i<length; i++){
            const randomIndex = Math.floor(Math.random() * charSet.length);
            generatedPassword += charSet[randomIndex];
        }

        setPassword(generatedPassword);
    };

    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(password);
        alert("Password Copied!");
    }

    return(
        <div className="password-generator">
            <h2 className="heading"> PASSWORD GENERATOR</h2>

            <div className="inputs">
                <label htmlFor="numLength">Password Length :</label>
                <input type="number" id="numLength" value={length} placeholder="Enter length in numbers" onChange={(e)=>{
                    setLength(parseInt(e.target.value));
                }}></input>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="upperChar" checked={upperCase} onChange={(e)=>{
                    setUpperCase(e.target.checked);
                }}/>
                <label htmlFor="upperChar">Include Uppercase</label>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="lowerChar" checked={lowerCase} onChange={(e)=>{
                    setLowerCase(e.target.checked);
                }}/>
                <label htmlFor="lowerChar">Include Lowercase</label>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="numberChar" checked={numbers} onChange={(e)=>{
                    setNumbers(e.target.checked);
                }}/>
                <label htmlFor="numberChar">Include Numbers</label>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="specialChar" checked={specialCase} onChange={(e)=>{
                    setSpecialCase(e.target.checked);
                }}/>
                <label htmlFor="specialChar">Include Special Characters</label>
            </div>

            <button className="generate-button" onClick={generatePassword}>Generate password</button>

            <div className="generated-password">
                <input type="text" readOnly value={password}></input>
                <button className="copy-button" onClick={copyToClipboard}>Copy</button>
            </div>

        </div>
    )
}