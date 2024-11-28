import React, { useState, useEffect } from 'react';

function App(){
  const [data, setData] = useState('Loading...');

  const callAPI = async () => {
    try {
      const res = await fetch("http://localhost:4000/");
      const data = await res.json();
      setData(data.message);
    } catch (error){
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className='App'>
      <h1>Backend Response: </h1>
      <p>{data}</p>
    </div>
  );
}

export default App;