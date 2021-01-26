import axios from 'axios';
import React, { useState, useEffect } from 'react';
const Form = props =>{
    // const [crewPosition, setCrewPosition] = useState({
        
    // })
    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/pirate`)
    //         .then(res => setCrewPosition(res.data.crewPosition))
    // }, [])
    return(
<div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <form onSubmit={props.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name"> Name:</label>
                        <input type="text" name="name"
                        className="form-control"  onChange={props.onChangeHandler} value={props.form.name}/>
                        {
                            props.error.name ? <span className="text-danger">{props.error.name.message}</span> : ""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="ptype"> Pet Type:</label>
                        <input type="text" name="ptype"
                        className="form-control" onChange={props.onChangeHandler} value={props.form.ptype}/>
                        {
                            props.error.ptype ? <span className="text-danger">{props.error.ptype.message}</span> : ""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="description"> description</label>
                        <input type="text" name="description"
                        className="form-control" onChange={props.onChangeHandler} value={props.form.description}/>
                        {
                            props.error.description ? <span className="text-danger">{props.error.description.message}</span> : ""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="skill"> skill</label>
                        <input type="text" name="skill"
                        className="form-control" onChange={props.onChangeHandler} value={props.form.skill}/>
                        {
                            props.error.skill ? <span className="text-danger">{props.error.skill.message}</span> : ""
                        }
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                    <br/>
                </form>
            </div>

        </div>
        )
    }
    
    
    export default Form;
