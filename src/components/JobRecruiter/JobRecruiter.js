import React from "react";
import { Link } from "react-router-dom";


const JobRecruiter = ({ email, userName }) =>  {
   
    return(
        <div className="mv4">
            <div style={{display: 'flex',justifyContent: 'flex-end'}}>
                <Link 
                        className='f3 link dim black underline pa3 pointer'
                        to="/">
                        Sign Out
                </Link>
            </div>
            <h1>Job Recruiter</h1>
            <h2>Click here to add new jobs </h2>
            <h2>{email} <br/> {userName}</h2>
            <Link
                className="mv1 f6 link dim ba bw2 ph3 pv2 mb2 dib purple" 
                to="/jobAppl" >
                Add New Jobs</Link>
        </div>   

    );
    

}


export default JobRecruiter;