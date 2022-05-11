import React from "react";

interface IProps{
    name:string;
    age?:number;
}

export default class PropsExample extends React.Component<IProps>{
    render(){
        const {name,age}=this.props
        return(
           <>
            Name: {name}<br/>
            Age: {age || 'Unspecified'}
           </> 
        )
    }
}