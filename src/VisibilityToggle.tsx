import React, { useState } from "react";
import StateExample from './StateExample'

export default function VisibilityToggle() {
    const [isVisible, setVisibility] = useState(true);
    return (
      <>
        {isVisible && <StateExample />}
        <input type="button" value="Toggle" onClick={()=>{setVisibility(!isVisible)}}/>
      </>
    );
  }