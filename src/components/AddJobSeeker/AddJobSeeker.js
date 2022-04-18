import React from 'react';

class AddJobSeeker extends React.Component {
    constructor(props){
        super(props);
        this.state={
            experience: '',
            skills: '',
            project: '',
            aboutMe: '',
            phoneNumber:''
        }
    }

    onExpChange = (event) => {
        this.setState({experience: event.target.value})
    }
    onSkillsChange = (event) => {
        this.setState({skills: event.target.value})
    }
    onProjectChange = (event) => {
        this.setState({project: event.target.value})
    }
    onAboutmeChange = (event) => {
        this.setState({aboutMe: event.target.value})
    }
    onNumberChange = (event) => {
        this.setState({phoneNumber : event.target.value})
    }
    

    onAddJS = () => {
        fetch('http://localhost:3000/addjobS', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                experience: this.state.experience,
                skills: this.state.skills,
                project: this.state.project,
                aboutMe: this.state.aboutMe,
                phoneNumber:this.state.phoneNumber
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.jobseekerId){
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
                        <legend className="f2 fw6 ph0 mh0">New Job Seeker</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="experience">Experience</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="number" name="experience"  id="experience"
                            onChange ={this.onExpChange} 
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="skills">Skills</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" name="skills"  id="skills"
                            onChange ={this.onSkillsChange} 
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="project">Project</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" name="project"  id="project"
                            onChange ={this.onProjectChange} 
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="aboutMe">About Me</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" name="aboutMe"  id="aboutMe" 
                            onChange ={this.onAboutmeChange} 
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="phoneNumber">Phone Number</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" name="phoneNumber"  id="phoneNumber" 
                            onChange ={this.onNumberChange} 
                            
                            />
                        </div>
                        
                        </fieldset>
                        <div className="">
                        <input 
                            onClick={this.onAddJS}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Add" 
                        />
                        </div>
                        
                    </div>
                </main>
            </article>
        );
    }

}


export default AddJobSeeker;