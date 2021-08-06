import React from 'react'
import {  Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import "../Images/style.css"

const Navbar = (props) => {
    if (props.loggedIn){
        return (
            <div>
                <h1>Hello {props.user.username}</h1>
                <Button  animated floated='right' compact color='red' size='samll' onClick={props.logoutUser}>
                    <Button.Content visible>Logout</Button.Content>
                     <Button.Content hidden>
                        <Icon name='user x' />
                     </Button.Content>
                </Button>
                
              
                <Button floated='left' animated='fade'  color='vk' as={Link} to="/listing/all">
                    <Button.Content visible>Marketplace</Button.Content>
                    <Button.Content hidden>
                        <Icon name='exchange' />
                    </Button.Content>
                </Button>
                
                
               
                <Button floated='left' animated='fade' primary as={Link} to="/listings">
                    <Button.Content visible>Your items</Button.Content>
                    <Button.Content hidden>
                        <Icon name='dollar sign' />
                    </Button.Content>
                </Button>
                
            </div>
        )
    } else{
        return (
            <div className='login_bar'>
                
              
                <Button style={{ marginLeft: '1em', marginRight: '5em', marginTop: '2em' }} floated='right' animated='fade' color='orange' as={Link} to="/signup">
                    <Button.Content visible>Signup</Button.Content>
                        <Button.Content hidden>
                         <Icon name='signup' />
                        </Button.Content>
                </Button>
                
                
                <Button style={{ marginTop: '2em'}} floated='right' animated='fade' color='blue' as={Link} to="/login">
                <Button.Content visible>Login</Button.Content>
                        <Button.Content hidden>
                            <Icon name='user' />
                        </Button.Content>
                </Button>
            </div>
        )
    }
}

export default Navbar;