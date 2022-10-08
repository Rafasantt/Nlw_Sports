import React, { useState } from "react";
import { WarningCircle} from 'phosphor-react';

interface Alertprops {
  state: string
}

export function CratAlertError(props: Alertprops){
  return(
    <div className={`bg-red-500
      rounded-md
      w-1/4 absolute 
      -right-96 top-4
     ${props.state ? 'animate-slideLeft': ''}
    
    `}>
      <div className="flex items-center p-3 text-white">
        <WarningCircle size={35}/>
        <h2 className="pl-2">Error!</h2>
      </div>
    </div>
  )
}