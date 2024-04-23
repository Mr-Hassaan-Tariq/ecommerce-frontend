import {useState,useEffect} from 'react' 
import Styles from '../styles/Login.module.css'
import Link from "next/link";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // TODO: Submit the login form to your backend API
    };
    return (
        <div className='mt-4 vh-100 '>

        <div className={Styles.login}>
            <div className={Styles.login__header}>
                <h1>Login</h1>
            </div>

            <div className={Styles.login__body}>
                <form onSubmit={handleSubmit}>
                    <input
className={Styles.input}

                        type="email"name="email" placeholder="Email" value={email}


                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <input
className={Styles.input}

                        type="password"


                        name="password"


                        placeholder="Password"


                        value={password}


                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <input

                        type="submit"

                        value="Login" />
                </form>

                <a href="/forgot-password">Forgot your password?</a>

            </div>
                <a href="/register">New customer? Register</a>
        <hr></hr>
        <div style={{marginTop:"50px"}}>

        <h3 >Continue as Guest</h3>
        <Link href="/checkout">
        <button style={{backgroundColor:"black",color:"#fff",width:"43%",fontSize:"20px",padding:"10px 0px"}}>Continue</button>
        </Link>
        </div>
        </div>
        </div>

    )
}
export default Login;