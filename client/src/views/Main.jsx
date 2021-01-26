import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import PetCard from '../components/PetCard';
import { navigate } from '@reach/router';

const Main = props => {
    const [allPet, setAllPet] = useState(null);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
            .then(res => {
                let pets = res.data.Pet
                pets.sort(function(a, b){
                    return a.pets - b.pets;
                });
                setAllPet(res.data.Pet)
            })
    }, [update])
    const removePet = _id => {
        axios.delete(`http://localhost:8000/api/pet/delete/${_id}`)
            .then(setUpdate(!update))
        navigate("/")

            .catch(err => console.log(err))
    }
    return (
        <>
            {/* <table>
                <thead>
                    <tr>
                        <th> name</th>
                        <th> type</th>
                        <th> action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    allPet.map((p,i) =>{
                        return <tr key ={i}>
                            <td>{allPet.name}</td>
                            <td>{allPet.type}</td>
                            <td>Action</td>
                        </tr>
                    })
                    }
                </tbody>
            </table> */}

        {
            allPet ?
            allPet.map((p, i ) => {
                return <PetCard pet={p} removePet={removePet} />
            }) : ""
        }
        </>
    )
}
export default Main;