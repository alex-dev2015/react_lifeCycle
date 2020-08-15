import React, { Component } from 'react';
import User from './User';

export default class Users extends Component {
    constructor(){
        super();

        this.state = {
            secoundsVisible: 0,
        };

        this.interval = null;
    }

    componentDidMount(){
        
        this.interval = setInterval(() => {
            const { secoundsVisible } = this.state;
            
            this.setState({
                secoundsVisible: secoundsVisible +1,
            });
        }, 1000);
    }
  
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const {users} = this.props;
        const {secoundsVisible} = this.state;
        return (
            <div>
                <p>Componente Users visível por {secoundsVisible} segundos </p>
                {users.map((user) => {
                    const { login,name, picture } = user;

                    return  <li key={login.uuid}>
                                <User user={user}/>
                            </li>

                })}
            </div>
        )
    }
}