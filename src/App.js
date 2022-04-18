import React, { Component } from 'react';
import Homepage from './components/Homepage/Homepage';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import JobSeeker from './components/JobSeeker/JobSeeker';
import './App.css';
import JobRecruiter from './components/JobRecruiter/JobRecruiter';
import JobApplication from './components/JobApplication/JobApplication';
import Adminpage from './components/Adminpage/Adminpage';
import AddJobSeeker from './components/AddJobSeeker/AddJobSeeker';
import UpdateJobSeeker from './components/UpdateJobSeeker/UpdateJobSeeker';
import { BrowserRouter as Router, Routes, Switch, Route, Redirect,} from 'react-router-dom';

const initialState = {
    input: '',
    route: 'signin',
    route2: 'jobrecruiter' ,
    isSignedIn: false,
    user: {
        usersId: '',
        job_id: '',
        job_recruiter_id:'',
        email: '',
        userName: '',
        role: '',
        jobDescription: '',
        requiredSkills: '',
        requiredExperience: '',
        salary: '',
        jobLocation:'',
        jobRole: ''
    }
}



class App extends Component {
constructor(){
    super();
    this.state= initialState;
}

loadUser = (data) => {
    this.setState({user: {
        usersId: data.usersId,
        job_id: data.job_id,
        job_recruiter_id: data.job_recruiter_id,
        email: data.email ? data.email : '',
        userName:  data.userName ? data.userName : '',
        role: data.role ? data.role : '',
        jobDescription: data.jobDescription ? data.jobDescription : '',
        requiredSkills: data.requiredSkills ? data.requiredSkills : '',
        requiredExperience: data.requiredExperience ? data.requiredExperience : '',
        salary: data.salary ? data.salary : '',
        jobLocation: data.jobLocation ? data.jobLocation : '',
        jobRole: data.jobRole ? data.jobRole : ''
    }})
}

// componentDidMount(){
//     fetch('http://localhost:3000/register')
//         .then(response => response.json())
//         .then(console.log)
// }

onInputChange = (event) => {
    this.setState({input : event.target.value});
}
    
onRouteChange = (route) => {
    if(route === 'signout'){
        this.setState(initialState);
    } else if(route === 'home'){
        this.setState({isSignedIn: true});
    }
    this.setState({route: route});
}

onRouteChange2 = () => {
    this.setState({route2: 'jobapplication'});
}

    render() {
        const { email, userName, role , jobDescription,requiredSkills,
        requiredExperience,salary,jobLocation,jobRole } = this.state.user;
        return (
          <div className='App'>
            <Router>
                <Routes>
                    <Route path="/" element={<Signin 
                        loadUser={this.loadUser}
                        onRouteChange={this.onRouteChange}
                         />} />
                    <Route path="/register" element={<Register 
                        loadUser={this.loadUser}
                        onRouteChange={this.onRouteChange}/>} />
                    
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/jobseeker" element={<JobSeeker 
                            email= {email} userName={userName}  
                            jobDescription={jobDescription} requiredSkills={requiredSkills}
                            requiredExperience={requiredExperience} salary={salary}
                            jobLocation={jobLocation} jobRole={jobRole}/>} />
                    <Route path="/addJobSeeker" element={<AddJobSeeker />} />
                    <Route path="/updateJobSeeker" element={<UpdateJobSeeker />} />
                    <Route path="/jobRecruiter" element={<JobRecruiter 
                            email= {email} userName={userName} />} />
                    <Route path="/jobAppl" element={<JobApplication 
                            loadUser={this.loadUser}/>} />
                    <Route path="/adminpage" element={<Adminpage 
                            email= {email} userName={userName}
                            jobDescription={jobDescription} requiredSkills={requiredSkills}
                            requiredExperience={requiredExperience} salary={salary}
                             jobLocation={jobLocation} jobRole={jobRole} />} />
                </Routes>
            </Router>
            
          

          </div>
        );     
    }
}

export default App;
