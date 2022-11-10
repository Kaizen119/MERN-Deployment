import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import imgStyle from "./Main.module.css"

const Create = (props) => {

    //for redirect
    const navigate = useNavigate()

    // forms submit variables 
    const[name, setName] = useState("")
    const[image, setImage] = useState("")
    const[catchPhrase, setCatchPhrase] = useState("")
    const[crewPosition, setCrewPosition] = useState("")
    const[treasure, setTreasure] = useState(0)
    const[pegLeg, setPegLeg] = useState(true)
    const[eyePatch, setEyePatch] = useState(true)
    const[hookHand, setHookHand] = useState(true)
    

    //DB error array
    const [errors,setErrors] = useState([]);

    const createPirate = (e) => {
        e.preventDefault();
        const tempObjToSendToDB = {
            name,
            image,
            catchPhrase,
            crewPosition,
            treasure,
            pegLeg,
            eyePatch,
            hookHand
        }
        axios.post('http://localhost:8000/api/pirates', tempObjToSendToDB)
        .then(response => {
            console.log("Client Success")
            console.log(response.data)
            navigate('/pirates')
        })
        .catch(error => {
            console.log("Something Went Wrong")
            console.log(error)
            const errorResponse = error.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
        }) 
    }
return (
    <div>
        <div>
            <h1>Add Pirate</h1>
            <button onClick={() => navigate('/pirates')}>Crew Board</button>
        </div>

            {errors.map((error,index) => <p key ={index} className={imgStyle.error}>{error}</p>)}

        <form onSubmit={createPirate}>
            Name:<input onChange={(e) => setName(e.target.value)} value={name}/><br/>
            <p className={imgStyle.error}>{name.length > 0 && name.length < 3? "A name cant be that shot lad.": ""}</p>

            Image Url:<input onChange={(e) => setImage(e.target.value)} value={image}/><br/>
            <p className={imgStyle.error}>{image.length > 0 && image.length < 3? "show us your best face": ""}</p>

            # of Treasure Chests:<input type="number" onChange={(e) => setTreasure(e.target.value)} value={treasure}/><br/>
            <p className={imgStyle.error}>{treasure.value > 0 && treasure.value < 1? "get more booty": ""}</p>

            Pirate Catch Phrase:<textarea onChange={(e) => setCatchPhrase(e.target.value)}value={catchPhrase}/><br/>
            <p className={imgStyle.error}>{catchPhrase.length > 0 && catchPhrase.length < 3? "Tell me your best Catch Phrase": ""}</p>

            Crew Position:
            <select onChange={(e) => setCrewPosition(e.target.value)} value={crewPosition}>
                <option value='Captain'>Captain</option>
                <option value='First Mate'>First Mate</option>
                <option value='Quarter Master'>Quarter Master</option>
                <option value='Boatswain'>Boatswain</option>
                <option value='Powder Monkey'>Powder Monkey</option>
            </select><br/>

            Peg Leg:<input type="checkbox" onChange={(e) => setPegLeg(e.target.checked)} checked={pegLeg}/><br/>
            Eye Patch:<input type="checkbox" onChange={(e) => setEyePatch(e.target.checked)} checked={eyePatch}/><br/>
            Hook Hand:<input type="checkbox" onChange={(e) => setHookHand(e.target.checked)} checked={hookHand}/><br/>
            <button>Add Pirate</button>
        </form>
    </div>
)
}

export default Create