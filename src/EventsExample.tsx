import React from 'react'

export default class EventsExample extends React.Component<any,{clickCount:number}>{
    constructor(props:any){
        super(props)
        this.state = {
            clickCount: 0
        }
    }
    increment(){
        this.setState((prevState)=>{
            return {
                clickCount: prevState.clickCount + 1
            }
        })
    }
    render(){
        return(
            <>
                You have clicked {this.state.clickCount} times.<br/>
                <input type='button' value='Click Me' onClick={()=>{
                    this.increment()
                }}/>
            </>
        )
    }
}