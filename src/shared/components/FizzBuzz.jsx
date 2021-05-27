import React from 'react'

const FizzBuzz = ( {arr}) => {
        return (
                <div>
                        {
                                arr.map(  ( data, idx) => {
                                        if(data % 3 === 0 && data % 5 === 0 ){
                                                return <div key = {idx} style = {{backgroundColor : "green"  }}  >  Fizz Buzz </div>
                                        }
                                        else if( data % 3 === 0){
                                                return <div key = {idx} style = {{backgroundColor : "red"  }}  >  Fizz </div>
                                        }else if (data % 5 === 0){
                                                return <div key = {idx} style = {{backgroundColor : "yellow"  }}  >  Buzz </div>

                                        }else{
                                                return  <div key = {idx}>  {data}   </div>
                                        }
                                        
                                })
                        }   
                </div>
        )
}

export default FizzBuzz;
