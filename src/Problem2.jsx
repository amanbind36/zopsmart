import React,{ useState, useEffect }  from 'react'

const Problem2 = () => {
    const [color,setColor]=useState("green");
   

   
    useEffect(() => {
        const cycle = ['green', 'yellow', 'red', 'yellow', 'green']; // Color cycle
        const durations = [3000, 2000, 2000, 5000, 2000]; // Durations for each color (in ms)

        let index = 0; 

        
        const interval = setInterval(() => {
            setColor(cycle[index]);
            index = (index + 1) % cycle.length; 
        }, durations[index]); 

        return () => clearInterval(interval);
    }, []);
  return (
    <div style={{height:"100px",width:"100px",border:"1px solid black",backgroundColor:color}}>
        
    </div>
  )
}

export default Problem2