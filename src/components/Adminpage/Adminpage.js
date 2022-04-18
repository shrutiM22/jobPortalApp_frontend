import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Adminpage = ({ email, userName,
                    job_description, required_skills,
                    required_experience, salary,
                    job_location, job_role}) => {

    

    return(
        <div className='mv4' >
            <div style={{display: 'flex',justifyContent: 'flex-end'}}>
            <Link 
                    className='f3 link dim black underline pa3 pointer'
                    to="/">
                    Sign Out
            </Link>
            </div>
            <h1>Admin page</h1>
            <h2> {email} <br/> {userName}</h2>
            <h1>Job Posts</h1>
            <div className="pa4">
            <div className="overflow-auto">
                <table className="f6 w-100 mw8 center" cellspacing="0">
                <thead>
                    
                    <tr>
                    <th className="fw6 bb b--black-20 tl pb4 pr4 bg-white ">Job Description</th>
                    <th className="fw6 bb b--black-20 tl pb4 pr4 bg-white">Required Skills</th>
                    <th className="fw6 bb b--black-20 tl pb4 pr4 bg-white">Required Experience</th>
                    <th className="fw6 bb b--black-20 tl pb4 pr4 bg-white">Salary</th>
                    <th className="fw6 bb b--black-20 tl pb4 pr4 bg-white">Job Location</th>
                    <th className="fw6 bb b--black-20 tl pb4 pr4 bg-white">Job Role</th>
                    </tr>
                </thead>
                <tbody class="lh-copy">
                    <tr>
                    <td className="pv3 pr3 bb b--black-20">{job_description}</td>
                    <td className="pv3 pr3 bb b--black-20">{required_skills}</td>
                    <td className="pv3 pr3 bb b--black-20">{required_experience}</td>
                    <td className="pv3 pr3 bb b--black-20">{salary}</td>
                    <td className="pv3 pr3 bb b--black-20">{job_location}</td>
                    <td className="pv3 pr3 bb b--black-20">{job_role}</td>
                    </tr>
                    <tr>
                    <td className="pv3 pr3 bb b--black-20">Backend Development</td>
                    <td className="pv3 pr3 bb b--black-20">java,js</td>
                    <td className="pv3 pr3 bb b--black-20">2</td>
                    <td className="pv3 pr3 bb b--black-20">334554</td>
                    <td className="pv3 pr3 bb b--black-20">Mumbai</td>
                    <td className="pv3 pr3 bb b--black-20">developer</td>
                    </tr>
                    <tr>
                    <td className="pv3 pr3 bb b--black-20">series acting</td>
                    <td className="pv3 pr3 bb b--black-20">dance,music</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">6733</td>
                    <td className="pv3 pr3 bb b--black-20">LA</td>
                    <td className="pv3 pr3 bb b--black-20">lead actor</td>
                    </tr>
                    </tbody>
               
                </table>
            </div>
            </div>


        </div>
    );
}


export default Adminpage;