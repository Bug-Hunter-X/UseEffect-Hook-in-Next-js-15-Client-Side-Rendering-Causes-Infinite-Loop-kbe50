```javascript
//pages/aboutSolution.js
import {useEffect,useState} from 'react';

export default function About(){
    const [count,setCount]=useState(0);
    useEffect(()=>{setCount(count+1)},[]); //Corrected dependency array
    return(
        <h1>About page</h1>
    );
}
```