import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () =>{
    return(
        <div className="mv4" >
            <div style={{display: 'flex',justifyContent: 'flex-end'}}>
                <Link 
                        className='f3 link dim black underline pa3 pointer'
                        to="/">
                        Sign Out
                </Link>
            </div>
            <h1>Welcome to the Millionjobs.com</h1><br/>
            {/* <h1 className='center f3'>Welcome to the Millionjobs.com</h1> */}
            <br/>
            <Link className="f6 link dim ba bw2 ph3 pv2 mb2 dib purple" 
                to="/jobseeker">JOB SEEKER</Link>
            <br/>
            <Link className="mv3 f6 link dim ba bw2 ph3 pv2 mb2 dib purple" 
                to="/adminpage">ADMIN</Link>
            <br/>
            <Link className="f6 link dim ba bw2 ph3 pv2 mb2 dib purple" 
                to="/jobrecruiter">JOB RECRUITER</Link>
            <br/>
            
           
        </div>
        
        // style={{display: 'flex', justifyContent:'center'}}
    );
}


export default Homepage;