import React from 'react';
import { Link } from 'react-router-dom';

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }
    
    onSubmitSignin = () => {
        fetch('http://localhost:3000/login',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
        .then(user => {
            if(user){
                this.props.loadUser(user);
                //this.props.onRouteChange('home');
            }else{
                alert('Incorrect username and password!');
            }
        })
    }

    render(){
        const { onRouteChange }= this.props;
    return(
        <article className="br3 ba b--black-10 mv6 w-100 w-50-m w-33-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" name="email"  id="email" 
                        onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" name="password"  id="password" 
                        onChange={this.onPasswordChange}
                        />
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                        onClick = {this.onSubmitSignin}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Sign in" 
                    />
                    <Link 
                        //onClick = {this.onSubmitSignin}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        to="/register">Register
                    </Link>
                    </div>
                    <div className="lh-copy mt3">
                    <Link 
                        //onClick={() => onRouteChange('register')}
                        className="f6 link dim black db pointer" 
                        to="/homepage" > 
                        ***
                    </Link>
                    </div>
                </div>
            </main>
        </article>
    );
}
    

}


export default Signin;