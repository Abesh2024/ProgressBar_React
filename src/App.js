import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  useEffect(()=>{
    if(number < 100){
      const timer = setTimeout(()=>{
        setNumber(number + 2)
      }, 100)
    }
    
  }, [number]);

  return (
      <div className='App'>
        <h1>ProgressBar</h1>
        <div className="progress-container" style={{height:'32px', width:'380px', borderRadius:'20px', border:'1px solid black'}}> 
        
          <div className="progressbar" style={{
            height: '100%',
            width: `${number}%`,
            backgroundColor: 'purple',
            transition: 'width 0.4s ease-in',
            borderRadius:'30px'
          }}>
            <span style={{position:'absolute', padding:'5px 160px', color: number > 60 ? 'white' : 'black'}}>{number}%</span>
          </div>
        </div>
    </div>
  )
}
export default App;
