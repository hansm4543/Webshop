import React, {useEffect, useState} from "react";
import Item from "./Item";


function SingleAttribute(props){

    //console.log(props.attributes.type)
    let length = props.attributes.items.length; 
    if(props.attributes.type == "text" || props.attributes.type == "swatch"){
        if(length == 1){
            return (

                <div className="Attributes">
                <p>Please select {props.attributes.name}:</p>
                <input defaultChecked type="radio" id={props.attributes.items[0].value} name={props.attributes.name} value={props.attributes.items[0].displayValue}/>
                <label for={props.attributes.items[0].value}>{props.attributes.items[0].displayValue}</label>
                </div>
                
        
            )
        }else if(length == 2){
            return (
                <form>
                <div className="Attributes">
                <p>Please select {props.attributes.name}:</p>
                <input defaultChecked type="radio" id={props.attributes.items[0].value} name={props.attributes.name} value={props.attributes.items[0].displayValue}/>
                <label for={props.attributes.items[0].value}>{props.attributes.items[0].displayValue}</label>
                <input type="radio" id={props.attributes.items[1].value} name={props.attributes.name} value={props.attributes.items[1].displayValue}/>
                <label for={props.attributes.items[1].value}>{props.attributes.items[1].displayValue}</label>
                                    
                </div>
                </form>
        
            )
        }else if(length == 3){
            return (
                <form>
                <div className="Attributes">
                <p>Please select {props.attributes.name}:</p>
                <input defaultChecked type="radio" id={props.attributes.items[0].value} name={props.attributes.name} value={props.attributes.items[0].displayValue}/>
                <label for={props.attributes.items[0].value}>{props.attributes.items[0].displayValue}</label>
                <input type="radio" id={props.attributes.items[1].value} name={props.attributes.name} value={props.attributes.items[1].displayValue}/>
                <label for={props.attributes.items[1].value}>{props.attributes.items[1].displayValue}</label>
                <input type="radio" id={props.attributes.items[2].value} name={props.attributes.name} value={props.attributes.items[2].displayValue}/>
                <label for={props.attributes.items[2].value}>{props.attributes.items[2].displayValue}</label>
                                    
                </div>
                </form>
        
            )
        }else if(length == 4){
            return (
                <form>
                <div className="Attributes">
                <p>Please select {props.attributes.name}:</p>
                <input defaultChecked type="radio" id={props.attributes.items[0].value} name={props.attributes.name} value={props.attributes.items[0].displayValue}/>
                <label for={props.attributes.items[0].value}>{props.attributes.items[0].displayValue}</label>
                <input type="radio" id={props.attributes.items[1].value} name={props.attributes.name} value={props.attributes.items[1].displayValue}/>
                <label for={props.attributes.items[1].value}>{props.attributes.items[1].displayValue}</label>
                <input type="radio" id={props.attributes.items[2].value} name={props.attributes.name} value={props.attributes.items[2].displayValue}/>
                <label for={props.attributes.items[2].value}>{props.attributes.items[2].displayValue}</label>
                <input type="radio" id={props.attributes.items[3].value} name={props.attributes.name} value={props.attributes.items[3].displayValue}/>
                <label for={props.attributes.items[3].value}>{props.attributes.items[3].displayValue}</label>
                                    
                </div>
                </form>
        
            )
        }else if(length == 5){
            return (
                <form>
                <div className="Attributes">
                <p>Please select {props.attributes.name}:</p>
                <input defaultChecked type="radio" id={props.attributes.items[0].value} name={props.attributes.name} value={props.attributes.items[0].displayValue}/>
                <label for={props.attributes.items[0].value}>{props.attributes.items[0].displayValue}</label>
                <input type="radio" id={props.attributes.items[1].value} name={props.attributes.name} value={props.attributes.items[1].displayValue}/>
                <label for={props.attributes.items[1].value}>{props.attributes.items[1].displayValue}</label>
                <input type="radio" id={props.attributes.items[2].value} name={props.attributes.name} value={props.attributes.items[2].displayValue}/>
                <label for={props.attributes.items[2].value}>{props.attributes.items[2].displayValue}</label>
                <input type="radio" id={props.attributes.items[3].value} name={props.attributes.name} value={props.attributes.items[3].displayValue}/>
                <label for={props.attributes.items[3].value}>{props.attributes.items[3].displayValue}</label>
                <input type="radio" id={props.attributes.items[4].value} name={props.attributes.name} value={props.attributes.items[4].displayValue}/>
                <label for={props.attributes.items[4].value}>{props.attributes.items[4].displayValue}</label>
                                    
                </div>
                </form>
        
            )
        }else if(length == 6){
            return (
                <form>
                <div className="Attributes">
                <p>Please select {props.attributes.name}:</p>
                <input defaultChecked type="radio" id={props.attributes.items[0].value} name={props.attributes.name} value={props.attributes.items[0].displayValue}/>
                <label for={props.attributes.items[0].value}>{props.attributes.items[0].displayValue}</label>
                <input type="radio" id={props.attributes.items[1].value} name={props.attributes.name} value={props.attributes.items[1].displayValue}/>
                <label for={props.attributes.items[1].value}>{props.attributes.items[1].displayValue}</label>
                <input type="radio" id={props.attributes.items[2].value} name={props.attributes.name} value={props.attributes.items[2].displayValue}/>
                <label for={props.attributes.items[2].value}>{props.attributes.items[2].displayValue}</label>
                <input type="radio" id={props.attributes.items[3].value} name={props.attributes.name} value={props.attributes.items[3].displayValue}/>
                <label for={props.attributes.items[3].value}>{props.attributes.items[3].displayValue}</label>
                <input type="radio" id={props.attributes.items[4].value} name={props.attributes.name} value={props.attributes.items[4].displayValue}/>
                <label for={props.attributes.items[4].value}>{props.attributes.items[4].displayValue}</label>
                <input type="radio" id={props.attributes.items[5].value} name={props.attributes.name} value={props.attributes.items[5].displayValue}/>
                <label for={props.attributes.items[5].value}>{props.attributes.items[5].displayValue}</label>
                                    
                </div>
                </form>
        
            )
        }else if(length == 7){
            return (
                <form>
                <div className="Attributes">
                <p>Please select {props.attributes.name}:</p>
                <input defaultChecked type="radio" id={props.attributes.items[0].value} name={props.attributes.name} value={props.attributes.items[0].displayValue}/>
                <label for={props.attributes.items[0].value}>{props.attributes.items[0].displayValue}</label>
                <input type="radio" id={props.attributes.items[1].value} name={props.attributes.name} value={props.attributes.items[1].displayValue}/>
                <label for={props.attributes.items[1].value}>{props.attributes.items[1].displayValue}</label>
                <input type="radio" id={props.attributes.items[2].value} name={props.attributes.name} value={props.attributes.items[2].displayValue}/>
                <label for={props.attributes.items[2].value}>{props.attributes.items[2].displayValue}</label>
                <input type="radio" id={props.attributes.items[3].value} name={props.attributes.name} value={props.attributes.items[3].displayValue}/>
                <label for={props.attributes.items[3].value}>{props.attributes.items[3].displayValue}</label>
                <input type="radio" id={props.attributes.items[4].value} name={props.attributes.name} value={props.attributes.items[4].displayValue}/>
                <label for={props.attributes.items[4].value}>{props.attributes.items[4].displayValue}</label>
                <input type="radio" id={props.attributes.items[5].value} name={props.attributes.name} value={props.attributes.items[5].displayValue}/>
                <label for={props.attributes.items[5].value}>{props.attributes.items[5].displayValue}</label>
                <input type="radio" id={props.attributes.items[6].value} name={props.attributes.name} value={props.attributes.items[6].displayValue}/>
                <label for={props.attributes.items[6].value}>{props.attributes.items[6].displayValue}</label>
                                    
                </div>
                </form>
        
            )
        }
        
    }




    return (
        <div>
            
            <label for="options">Something went wrong with options:</label>

           

        </div>

    )



    
}

export default SingleAttribute;