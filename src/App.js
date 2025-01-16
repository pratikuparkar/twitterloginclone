
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='logo-box '>
     <img src="./download.png" alt="logo" className='logo'></img>
     <h2>Sign In to Twitter</h2>
     <button>
      <img src="./download2.png" alt="glogo" ></img>
      Sign in with Google
     </button>
     <button>
      <img src="./download3.webp" alt="glogo" ></img>
      Sign in with Google
     </button>
     <hr></hr>
     <span>Or</span>
     <form>
      <input type="text" placeholder="Phone email or username"/>
      <button>Next</button>
     </form>
     <button>Forget Password</button>
     <p>Don't have an account <a>Sign Up</a> </p>
     </div>
     
    </div>
  );
}

export default App;
