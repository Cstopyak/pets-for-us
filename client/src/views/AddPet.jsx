import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from '@reach/router';

const AddPet = props =>{
    const [form, setForm] = useState({
        name: "",
        ptype: "",
        description: "",
        skill: ""

        
    })
    const [error, setError] = useState({});
    
    const onChangeHandler = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pet/new", form)
            .then(res =>{
                if(res.data.error){
                    setError(res.data.error.errors)
                } else{
                    navigate("/")
                }
            })
            .catch(err=> console.log("something went wrong adding a pet!", err))
}
    return(
        <>
        <h2> This is the new pet page</h2>
        <Form form={form} onChangeHandler={onChangeHandler}  onSubmitHandler={onSubmitHandler} error={error}/>
        </>
    )
}
export default AddPet;