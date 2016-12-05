import React from 'react'
import Navbar from './nav';
import Canvas from './canvas';

class IntroBox extends React.Component {
    render() {
        return (
            <div className="introduction">
            <div>
                <h1 className="intro-title">Welcome to your universe.</h1>
                <p>Vennio does organization in a way that's never been done before.</p>
                </div>
            </div>
        );
    }
}

class RegistrationBox extends React.Component {
    handleSubmit() {
    }

    render() {
        return (
            <div className="registration">
                <div className="registration-form">
                    <h3 className="registration-title">Sign up to get started</h3>

                    <form id="register" action="register" method="post" onSubmit={this.handleSubmit}>
                        <input name="authenticity_token" type="hidden" value={this.props.token}/>
                        <input type="text" name="email" placeholder="Email"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <input type="password" name="password_confirm" placeholder="Confirm Password"/>

                        <div className="btn-wrapper">
                            <button form="register" type="submit" className="btn accept">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

class Landing extends React.Component {
    render() {
        return (
            <div>
                <div className="landing-page-bg">
                    <Navbar leftItems={[
                        <div className="main-brand">Vennio</div>,
                    ]} rightItems={[
                        <div className="nav-link">Log In</div>
                    ]}>
                        <div className="blurred"/>
                    </Navbar>
                    {/*<Canvas isLandingPage={true}/>-->*/}
                    <div className="landing-page-center">
                        <IntroBox/>
                        <RegistrationBox token={this.props.route.token}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;