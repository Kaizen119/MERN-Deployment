import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import imgStyle from "./Main.module.css"

const Main = (props) => {

    const navigate = useNavigate()
    const [pirates, setPirates] = useState([]);

    //trigger when the component has finished loading
    useEffect(() => {
        //get all the notes from the server
        axios.get("http://localhost:8000/api/pirates")
        .then(response => {
            console.log(response.data)
            setPirates(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[]);

    //go to the update route 
    const goToViewOne = (pirateMongoId) => {
        navigate(`/pirates/${pirateMongoId}`)
        console.log("you a hoe")
    }

    //Delete
    const deletePirate = (deleteId) => {

        if(window.confirm("Walk the plank matey")){
        axios.delete(`http://localhost:8000/api/pirates/${deleteId}`)
        .then(response => {
            console.log("Delete Success", response.data)

            //remove from the DOM after a successful delete
            setPirates(pirates.filter((pirate) => pirate._id !== deleteId)) 
        })
        .catch(err => console.log(err))
        }
    }



return (
    <div className={imgStyle.background}>
        <div>
            <h1>Pirate Crew</h1>
            <button onClick={() => navigate('/create')}>Add Pirate</button>
        </div>
        {
                pirates.map((onePirate) => {
                    return(<div key={onePirate._id}>
                                <img src={onePirate.image} alt="pirate name" className={imgStyle.img}/>
                                <h3>{onePirate.name}</h3>
                                <button onClick={() => goToViewOne(onePirate._id)}>View Pirate</button>
                                <button onClick={() => deletePirate(onePirate._id)}>Walk the Plank</button>
                    </div>)
                })
            }
    </div>
  )
}

export default Main