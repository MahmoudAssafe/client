import React,{useEeffect,useState} from 'react'

function App() {
  const [backendData, setBackenData] = useState([{}])
  useEeffect(()=>{
    fetch('/api').then(
      response=>response.json()
    ).then(
      data => {
        setBackenData(data)
      }
    )

  },[])
  
  return (
    <div className="App">

      {(typeof backendData.users === 'undefined') ? (
        <p>Lodaing...</p>
      ) : (
          backendData.users.map((user, i) => (
            <p key={i} >{ user }</p>
         )) 
      )}

    </div>
  );
}

export default App;
