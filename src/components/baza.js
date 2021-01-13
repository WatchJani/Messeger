import React from "react"
import Enter from "./newmesseg"
import Mess from "./messeg"



const Baza  =({poruka, dodajporuku})=> {
   
  
     const sveporuke = poruka.map(mes=>{
        return(
            <Mess mes={mes} key={mes.id}/>
        )
     })
    

   return(
    <div className="baza">
    <div className="centar">

        <div className="poruke">
            {sveporuke}
            
           
        </div>
        <div className="dole">
            <Enter dodajporuku={dodajporuku}/>
        </div>

    </div>
</div>
   )
        
}


export default Baza