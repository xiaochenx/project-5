import React from 'react'
import {  Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

const Navbar = (props) => {
    if (props.loggedIn){
        return (
            <div>
                <h1>Hello {props.user.username}</h1>
                <Button animated compact color='red' size='samll' onClick={props.logoutUser}>
                    <Button.Content visible>Logout</Button.Content>
                     <Button.Content hidden>
                        <Icon name='user x' />
                     </Button.Content>
                </Button>
                
                <br/>
                {/* <Link to="/listing/all">
                    <button className="submit-button">Marketplace</button>
                </Link> */}
                <Button animated  color='vk' as={Link} to="/listing/all">
                    <Button.Content visible>Marketplace</Button.Content>
                    <Button.Content hidden>
                        <Icon name='exchange' />
                    </Button.Content>
                </Button>
                
                <br />
                {/* <Link to="/listings">
                    <button className="submit-button">Your items for sale</button>
                </Link> */}
                <Button animated primary as={Link} to="/listings">
                    <Button.Content visible>Your items for sale</Button.Content>
                    <Button.Content hidden>
                        <Icon name='dollar sign' />
                    </Button.Content>
                </Button>
                <hr/>
            </div>
        )
    } else{
        return (
            <div>
                <br/>
                {/* <Link to="/signup">
                    <button className="submit-button">Signup</button>
                </Link> */}
                <Button animated color='orange' as={Link} to="/signup">
                    <Button.Content visible>Signup</Button.Content>
                        <Button.Content hidden>
                         <Icon name='signup' />
                        </Button.Content>
                </Button>
                <br/>
                {/* <Link to="/login">
                    <button className="submit-button">Login</button>
                </Link> */}
                <Button animated color='blue' as={Link} to="/login">
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