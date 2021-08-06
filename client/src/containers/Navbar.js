import React from 'react'
import {  Link } from 'react-router-dom'
import { Button, Icon, Header } from 'semantic-ui-react'
import "../Images/style.css"

const Navbar = (props) => {
    if (props.loggedIn){
        return (
            <div>
                <br />
                <Header  as='h1' style={{ fontSize: '2em', marginTop:'-0.5em', marginLeft:'2em' }} textAlign='left' >Hello {props.user.username}</Header>
                <Button  animated style={{ marginLeft: '1em', marginRight: '5em'}} floated='right' compact color='red' size='large' onClick={props.logoutUser}>
                    <Button.Content visible>Logout</Button.Content>
                     <Button.Content hidden>
                        <Icon name='user x' />
                     </Button.Content>
                </Button>

                <Button  animated style={{ marginLeft: '1em', marginRight: '1em'}} floated='right' compact color='linkedin' size='large' as={Link} to="/">
                    <Button.Content visible>Home</Button.Content>
                     <Button.Content hidden>
                        <Icon name='home' />
                     </Button.Content>
                </Button>
                
              
                <Button floated='left' style={{ marginLeft: '3em', marginRight: '0.3em' }} animated='fade'  size='large' color='vk' as={Link} to="/listing/all">
                    <Button.Content visible>Marketplace</Button.Content>
                    <Button.Content hidden>
                        <Icon name='exchange' />
                    </Button.Content>
                </Button>
                
                
               
                <Button floated='left' style={{ marginLeft: '1em', marginRight: '1em' }} animated='fade' size='large' primary as={Link} to="/listings">
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
                
              
                <Button style={{ marginLeft: '1em', marginRight: '5em', marginTop: '2em' }} floated='right' animated='fade' size='large' color='orange' as={Link} to="/signup">
                    <Button.Content visible>Signup</Button.Content>
                        <Button.Content hidden>
                         <Icon name='signup' />
                        </Button.Content>
                </Button>
                
                
                <Button style={{ marginTop: '2em'}} floated='right' animated='fade' color='blue' size='large' as={Link} to="/login">
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