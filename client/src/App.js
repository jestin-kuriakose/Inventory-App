import {useState} from "react"
import axios from "axios"
import './App.css';

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = async(e) => {
    e.preventDefault()
    try{
      const res = await axios.get('http://localhost:8800/api/user/login')
      setMessage(res.data.message)
    } catch(err) {
      setMessage(err.response)
    }

  }
  return (
    <div className="App">
      <div className="form-container">
        <form className='form' onSubmit={handleLogin}>
          <h5>Sign in</h5>
          <input className='form-input' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
          <input className='form-input' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
          <button className='form-button' type='submit'>Login</button>
          <p>{message}</p>
        </form>
      </div>

    </div>
  );
}

export default App;
