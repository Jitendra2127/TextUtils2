import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

        

    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className={`navbar-brand text-${props.title_color}`} to="/">{props.title}</Link>  */}
                <Link className={`navbar-brand text-${props.title_color}`} to="/">{props.title}</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">{props.About}</Link>
                        </li>

                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button type="button" className="btn btn-danger">Search</button>
                    </form> */}


                    {/* <div className={`form-check form-switch text-${props.col}`}>
                        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                    </div>
                    <div className={`form-check form-switch text-${props.col}`}>
                        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                    </div> */}



                    {/* <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggle('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggle('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                        <div className="bg-success rounded mx-2" onClick={()=>{props.toggle('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggle('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                    </div> */}
                    
                   
                    <div className={`form-check form-switch text-${props.col}`}>
                        <input className="form-check-input" onClick={()=>{props.toggle(null)}} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.mode}-Mode </label>
                    </div>
                </div>
            </div>
        </nav>
    )
}


Navbar.prototypes = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired
}

// it is used when you pass no any props
Navbar.defaultProps = {
    title: "setdafault Jitu",
    About: "Set Default "
}

