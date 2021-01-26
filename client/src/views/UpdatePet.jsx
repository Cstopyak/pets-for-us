import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from '@reach/router';

const UpdatePet = props =>{
    const [form, setForm] = useState({
        name: "",
        ptype: "",
        description: "",
        skill: ""

        
    })
    const [error, setError] = useState({});
    
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => setForm(res.data.Pet))
    }, [])
    const onChangeHandler = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/update/${props._id}`, form)
            .then(res =>{
                if(res.data.error){
                    setError(res.data.error.errors)
                } else{
                    navigate("/")
                }
            })
            .catch(console.log("something went wrong updating a pety!!"))
}
    return(
        <>
        <h2> This is the new update page</h2>
        <Form form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error}/>
        </>
    )
}
export default UpdatePet;