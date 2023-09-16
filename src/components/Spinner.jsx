import React from 'react'
import './Spinner.css'

function Spinner() {
    return (
        <div className="lds-roller flex w-full justify-center pt-48 ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    )
}

export default Spinner