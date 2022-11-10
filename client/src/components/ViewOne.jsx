import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect } from 'react'
import axios from 'axios'
import imgStyle from "./Main.module.css"


const ViewOne = (props) => {
 //grab the url variable
    const {id} = useParams();
    const navigate = useNavigate();

    const [thisPirate, setThisPirate] = useState(null)

useEffect(() => {
    axios.get(`http://localhost:8000/api/pirates/${id}`)
    .then(response => {
        console.log(response.data)
        setThisPirate(response.data)
    })
    .catch(error => {
        console.log(error)
    })
},[id])

    return (
    <div>
    {thisPirate ? (
        <>
        <div>
            <h1>{thisPirate.name}</h1>
        </div>
            <div>
                <img src={thisPirate.image} alt="where did you go"  className={imgStyle.img}/>
                <h2>{thisPirate.catchPhrase}</h2>
            </div>
            <div>
                <h3>About</h3>
                <p>Position:{thisPirate.crewPosition}</p>
                <p>Treasures:{thisPirate.treasure}</p>
                <p>Peg Leg:{thisPirate.pegLeg ? "Yes" : "no"} <button>{thisPirate.pegLeg ? "Yes" : "No"}</button></p>
                <p>Eye Patch:{thisPirate.eyePatch ? "Yes" : ""} <button>{thisPirate.pegLeg ? "Yes" : "No"}</button></p>
                <p>Hook Hand:{thisPirate.hookHand ? "Yes" : ""} <button >{thisPirate.pegLeg ? "Yes" : "No"}</button></p>
                </div>
        </>
        ): ("You have not joined the crew...")
    }
    <button onClick={() => navigate('/pirates')}>Home</button>
    </div>
    )
}


export default ViewOne