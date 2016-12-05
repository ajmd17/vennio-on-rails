import React from 'react';

class NavItem extends React.Component {
    render() {
        return (
            <li className={this.props.side}>{this.props.content}</li>
        );
    }
}

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    {this.props.leftItems.map((item, i) => {
                        return <NavItem side="left" content={item} key={i}/>
                    })}
                    {this.props.rightItems.map((item, i) => {
                        return <NavItem side="right" content={item} key={i}/>
                    })}
                </ul>
            </div>
        );
    }
}

export default Navbar;