import React, { useState } from "react";
import { CheckCircle} from 'phosphor-react';

interface Alertprops {
  state: string
}

export function CreatAlert(props: Alertprops) {
  return(
    <div className={`bg-violet-500
      rounded-md 
      w-1/4 
      absolute 
      -right-96 
      top-4 
      ${props.state ? 'animate-slideLeft' : ''}
      `} >
      <div className="flex items-center p-3 text-white">
        <CheckCircle size={35}/>
        <h2 className="pl-2">Anúncio criado!</h2>
      </div>
    </div>
  )

}

