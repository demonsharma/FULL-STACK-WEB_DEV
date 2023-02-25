import React, { useState } from 'react'
import Two from './Two'

export default function One() {
    const[params,setParams] = useState({
        name1:"",
        password:"",
        ischecked:""
    })
    const[icheck,ucheck] = useState("")
    const[error,nerror] = useState("")
    const ischeck=(event)=>{
        ucheck(!icheck)
    }
    const handleName=(event)=>{
        // let a = event.target.value ;
        // if(a.length<3){
        //     nerror("Length should be more than 3")
        // }
        // else{
        //     nerror("")
        // }
        console.log(event.target) ;
        // con
        setParams({...params, name1:event.target.value}) ;
    }
    const a = <div>
        <h1>Hellow World</h1>
        <h2>Hellow World</h2>
    </div>
    return (
        <div>
            <form className='container'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value = {params.name1}  onChange={handleName} aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div>{error}</div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" checked = {icheck} onChange={ischeck} id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {/* <Two Name={name}/> */}
        </div>
    )
}
