import React from 'react'


const Bands = props => {

    let bands = props.bands.map( (band,id) => {return  <li key={id}>{band}</li> })

    return (
        <div>
            {bands}
        </div>
    )
}

export default Bands