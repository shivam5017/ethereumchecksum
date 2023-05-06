
import React, { useState } from 'react'
import { ActionButton } from '../modules'
import {FaEthereum} from "react-icons/fa"
import palette from "../styles/palette"
import "../styles/2-sections/wallet.css"
import "../styles/3-modules/form-item.css"
import Web3 from "web3";




const Wallet = () => {

     const [message,setMessage]=useState("")
     const [color,setColor]=useState("")
     const [input,setInput]=useState("")
 

    const Submit=(e)=>{
     e.preventDefault();
    
     if(input.length!==42||!input.startsWith("0x")){
      
        setMessage("Address needs to be 42 characters and start with 0x")
        setColor(palette.alert.red)
      
     }else{
        try{

       
            const web3=new Web3()
            web3.utils.checkAddressChecksum(input)
           const finaladress= web3.utils.checkAddressChecksum(input)
            
            if(finaladress===true){
                setColor(palette.alert.green)
                setMessage("Address is already checksummed")
                
            }else if(finaladress===false){
                setColor(palette.eth.gold)
                setMessage("Address has been checksummed")
              
            }
          
            return true
        }catch(e){
            console.log("error")
        }
     }

    }



  return (
    <div className={"main-container"}>
        <div className={"wrap-container"}>
            <form className={"wrap-form"} onSubmit={Submit}>
                <h1 className={"wrap-form-title"}>
                    {"Ethereum Address CheckSum"}
                </h1>
                <div className={"form-item"}> 
                   <input className={"input-item"}
                       type={"text"}
                       name={"input"}
                       value={undefined}
                       placeholder={"Your Address"}
                       autoComplete={""}
                       required={true}
                       onChange={(e)=>setInput(e.target.value)}
                       readOnly={false}
                      
                   />
                    <span className={"focus"}/>
                <span className={"symbol"}>
                    <FaEthereum size={18}/>
                </span>
                </div>
                 <p className={"output-text"} style={{color:color}}>
                    {message}
                 </p>
                 <ActionButton 
                 text={"Submit"}
                 loading={false}
                 />
            </form>
        </div>
    </div>
  )
}

export default Wallet