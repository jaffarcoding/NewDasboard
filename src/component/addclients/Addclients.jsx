import React, { Fragment } from 'react'
import Home from '../Home/Home'
import "./Addclients.scss"
const Addclients = () => {
  return (
    <Fragment>
    <Home/>
    <div className="add-clients">
    <h3>Add Client</h3>
        <p>
          <span>Client Master</span> /{" "}
          <span className="second">Add Clients</span>
        </p>
    </div>
    </Fragment>
  )
}

export default Addclients