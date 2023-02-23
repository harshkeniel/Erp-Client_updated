import React from 'react'

const SampleCard = ({label, h}) => {
    return (
        <div className="card my-lg-0 my-3 d-flex justify-content-center align-items-center" style={ { height : h ? `${h}vh` : "100%"}}>
            <span style={ {fontSize : "30px", fontWeight : "bold"}}>{label}</span>
        </div>
    )
}

export default SampleCard