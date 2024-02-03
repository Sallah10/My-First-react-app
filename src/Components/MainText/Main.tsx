import React from 'react'
import list from  '../../assets/images/icon-list.svg' 
import image from  '../../assets/images/illustration-sign-up-desktop.svg' 
import './Main.css'

const Main = () => {
    const [email, setEmail] = React.useState("")
    const [showMessage, setShowMessage] = React.useState(false);

    const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
            setEmail(event.target.value);
          };

    function submitButton(event: { preventDefault: () => void }){
        event.preventDefault()
        setShowMessage(true) 
        }
    
    return (
         <>
                {!showMessage ? ( <>
                    <div className='wholeContent'>   
                    {/* <!-- Sign-up form start --> */}
                        <main>
                            <h1>Stay updated!</h1>

                            <p className='main-paragraph'>Join 60,000+ product managers receiving monthly <br />updates on:</p>
                            <div className='ads'>
                                <div className='sub-ads'><img src={list} alt="icon-list" /><p>Product discovery and building what matters</p></div>
                                <div className='sub-ads'><img src={list} alt="icon-list" /><p>Measuring to ensure updates are a success</p></div>
                                <div className='sub-ads append-ads'><img src={list} alt="icon-list" /><p>And much more!</p></div>       
                            </div>

                            <h3>Email address</h3>
                            {/* <form action="" onSubmit={submitButton}> */}
                                <input type="email" placeholder='email@company.com' name="email" value={email} onChange={handleChange}/>
                                <button onClick={submitButton} >Subscribe to monthly newsletter</button>
                            {/* </form> */}
                        </main>    
                        {/* <!-- Sign-up form end --> */}
                        <div className='main-image'>
                            <img src={image} alt="main-image" />
                        </div>
                    </div>
                    <div className="attribution">
                            <p>Challenge by  <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor.</a></p> 
                            <p>Coded by  <a href="#">  Sallah </a>.</p>
                    </div> 
                    </>
                        )
                     : (<section>
                        <img src={list} alt="icon-list" />

                        <h1>Thanks for <br /> subscribing!</h1>

                        <p>A confirmation email has been sent to <br /> <span> {email} </span>
                            Please open it and click <br /> the button inside to confirm your subscription.</p>
                        
                        <button onClick={() =>{setShowMessage(false)}}>Dismiss message</button>
                    </section>)
                }           
        </>
    )
}

export default Main


 