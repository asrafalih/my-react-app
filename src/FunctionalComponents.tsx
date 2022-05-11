import React from 'react'

interface FcProps{
    message:string
}

function FunctionalComponents(props:FcProps){
    return(
        <>Your message: {props.message}</>
    )
}

export default FunctionalComponents