import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            userName: '',
            role: '',
            password: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    onUserNameChange = (event) => {
        this.setState({userName: event.target.value})
    }
    onRoleChange = (event) => {
        this.setState({role: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                userName: this.state.userName,
                role: this.state.role,
                password: this.state.password,
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user ){
                this.props.loadUser(user);
                //this.props.onRouteChange('signin');
            } else{
                alert('Please provide all information');
            }
        })
    }

    render(){
       
        return(
            <article className="br3 ba b--black-10 mv5 w-100 w-50-m w-33-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="register" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" name="email"  id="email"
                            onChange ={this.onEmailChange} 
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="userName">Username</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" name="userName"  id="userName" 
                            onChange ={this.onUserNameChange} 
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="role">Role</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" name="role"  id="role" 
                            onChange ={this.onRoleChange} 
                            
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" name="password"  id="password" 
                            onChange ={this.onPasswordChange} 
                            />
                        </div>
                        </fieldset>
                        <div className="">
                        <input 
                            onClick={this.onRegister}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Register" 
                        />
                        </div>
                        <div className="lh-copy mt3">
                        <Link className="f6 link dim black db pointer" 
                           to="/ " >Signin
                        </Link>
                        </div>
                        
                    </div>
                </main>
            </article>
        );
    }
    
    

}


export default Register;