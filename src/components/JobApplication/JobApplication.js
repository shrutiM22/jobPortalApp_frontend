import React from 'react';

class JobApplication extends React.Component {
    constructor(props){
        super(props);
        this.state={
            jobDescription: '',
            requiredSkills: '',
            requiredExperience: '',
            salary: '',
            jobLocation:'',
            jobRole: ''
        }
    }

  

    onJDChange = (event) => {
        this.setState({jobDescription: event.target.value})
    }
    onRSChange = (event) => {
        this.setState({requiredSkills: event.target.value})
    }
    onREChange = (event) => {
        this.setState({requiredExperience: event.target.value})
    }
    onSalaryChange = (event) => {
        this.setState({salary: event.target.value})
    }
    onLocationChange = (event) => {
        this.setState({jobLocation : event.target.value})
    }
    onRoleChange = (event) => {
        this.setState({jobRole: event.target.value})
    }

    onPost = () => {
        fetch('http://localhost:3000/jobApplication', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                jobDescription: this.state.jobDescription,
                requiredSkills: this.state.requiredSkills,
                requiredExperience: this.state.requiredExperience,
                salary: this.state.salary,
                jobLocation:this.state.jobLocation,
                jobRole: this.state.jobRole
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user){
                this.props.loadUser(user);
               // this.props.onRouteChange('signin');
            }
        })
    }

    render(){
       
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-33-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="jobappl" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Job Application</legend>
                        
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="jobDescription">Job Description</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" name="jobDescription"  id="jobDescription"
                            onChange ={this.onJDChange} 
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="requiredSkills">Required Skills</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" name="requiredSkills"  id="requiredSkills"
                            onChange ={this.onRSChange} 
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="requiredExperience">Required Experience</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="number" name="requiredExperience"  id="requiredExperience"
                            onChange ={this.onREChange} 
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="salary">Salary</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="number" name="salary"  id="salary" 
                            onChange ={this.onSalaryChange} 
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="jobLocation">Job Location</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" name="jobLocation"  id="jobLocation" 
                            onChange ={this.onLocationChange} 
                            
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="jobRole">Job Role</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="jobRole" name="jobRole"  id="jobRole" 
                            onChange ={this.onRoleChange} 
                            />
                        </div>
                        </fieldset>
                        <div className="">
                        <input 
                            onClick={this.onPost}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Post" 
                        />
                        </div>
                        
                    </div>
                </main>
            </article>
        );
    }
}



export default JobApplication;
