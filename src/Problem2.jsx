import React,{ useState, useEffect }  from 'react'

const Problem2 = () => {
    const [color,setColor]=useState("green");
   

   
    useEffect(() => {
        const allColor = ['green', 'yellow', 'red', 'yellow', 'green']; 
        const durations = [3000, 2000, 2000, 5000, 2000]; 

        let index = 0; 

        
        const interval = setInterval(() => {
            setColor(allColor[index]);
            index = (index + 1) % allColor.length; 
        }, durations[index]); 

        return () => clearInterval(interval);
    }, []);
  return (
    <div style={{height:"300px",width:"300px",border:"1px solid black",backgroundColor:color}}>
        
    </div>
  )
}

export default Problem2;