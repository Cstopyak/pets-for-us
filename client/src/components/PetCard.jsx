import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

const PetCard = props => {
    return (
        <div className="card">
            
            <div class="card-body"></div>
            <div>
                {/* <h3>About:</h3>
                <p>{props.pet.name}</p>
                <p>Adopt {props.pet.name}</p> */}
            </div>
            <div className="card">
                <div class="card-body">
                </div>
                
                    <h3>About:</h3>
                    <p>{props.pet.name}</p>
                    <p> Type: {props.pet.ptype}</p>
                    <p>Description: {props.pet.description}</p>
                    <div>
                        <h4> Actions:</h4>
                    <p> <a href={`/pet/update/${props.pet._id}`} className="btn btn-primary"> Update</a></p>
                    <p> <a href={`/pet/${props.pet._id}`} className="btn btn-dark"> Details</a></p>
                    <p> <button  onClick={() => props.removePet(props.pet._id)} class="btn btn-danger"> Adopt</button></p>
                    </div>
                </div>
            </div>
        )

        
    }
    
    
    export default PetCard;
