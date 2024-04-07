import React, {useEffect, useRef} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Page() {
    const ref = useRef(null);

    useEffect(() => {
        let container = ref.current;
    }) //I did not  use dependency array

    function handleAddClick() {
        container.classList.add("active");
    }

    function handleDelClick() {
        container.classList.remove("active")
    }

  return (
    <>
        <div className="container" id='container' ref={ref}>
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <div className="social-icons">
                    <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG}/></a> 
                    <a href="#" className="icon"><FontAwesomeIcon icon={faFacebook}/></a> 
                    <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a> 
                    <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn}/></a> 
                </div>
                <span>or use your email registration</span>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form>
            <h1>Sign In</h1>
            <div className="social-icons">
                <a href="" className="icon"><FontAwesomeIcon icon={faGooglePlusG}/></a> 
                <a href="" className="icon"><FontAwesomeIcon icon={faFacebook}/></a> 
                <a href="" className="icon"><FontAwesomeIcon icon={faGithub}/></a> 
                <a href="" className="icon"><FontAwesomeIcon icon={faLinkedinIn}/></a> 
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder='Email or Phone Number'/>
            <input type="password" placeholder='Password'/>
            <a href="#">Forgot Password?</a>
            <button>Sign In</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personel details to use all of site features</p>
                    <button className="hidden"  id='login' onClick={handleDelClick}>Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend</h1>
                    <p>Register with your personel details use all of site features</p>
                    <button className="hidden"  id='register' onClick={handleAddClick}>Sign Up</button>
            </div>
            </div>
        </div>
        </div>
  </>
  );
};

export default Page;
