import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from '@reach/router';

const OnePet = props =>{
    const [pet, setPet] = useState(null);
    const[ update, setUpdate] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => setPet(res.data.Pet))
    }, [update])
    
    return(
        <>
            <h1> Here is one pet you selected</h1>

            
            {
                pet ? <>
                    <h1> {pet.name}</h1>
                    {/* <p> <button  onClick={() => props.removePet(props.pet._id)} class="btn btn-danger"> Adopt</button></p> */}
                    {/* <button  onClick={(removePet={removePet}) => props.removePet(props.pet._id)}  class="btn btn-danger"> Adopt</button> */}
                    
                    <div className="row"
                        div className="col-sm-4">
                        
                    </div>

                    <div className="col-sm-4">
                        <h3> Type: {pet.ptype}</h3>
                        <h3>Description: {pet.description}</h3>
                        <h3>Skills: {pet.skill}</h3>
                        
                           
                            
                        
                    </div>
                </> : ""
            }
        </>
    )
}
export default OnePet;