import React, { useState } from 'react'
import { Button, Form, Segment, Image, Header, Grid } from 'semantic-ui-react'

const Signup = ({loginUser}) => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/signup",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
              username: username,
              password: password,
              passwordConfirmation: passwordConfirmation
          })
        })
        .then (resp => resp.json())
        .then (user => loginUser(user))
    }

    return (
        <Segment inverted>
             <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
             <Header as='h2' color='teal' textAlign='center'>Sign-up for a new account</Header>
            <Form size='large'  onSubmit={handleSubmit}>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)} />
                     <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password Confirmation'
                        type='password'
                        value={passwordConfirmation} 
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />

                    <Button color='teal' fluid size='large' type='submit'>
                        Signup
                    </Button>
                </Segment>
            </Form>
            </Grid.Column>
            </Grid>
        </Segment>
        // <div>
        //     <form className="sign-up" onSubmit={handleSubmit}>
        //         <label> Username:</label>
        //         <br/>
        //         <input type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)}></input>
        //         <br/>
        //         <br/>
        //         <label> Password:</label>
        //         <br/>
        //         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        //         <br/>
        //         <br/>
        //         <label> Confirm Password:</label>
        //         <br/>
        //         <input type="password" id="password_confirm" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
        //         <br/>
        //         <Button  color='blue' size='small' type='submit'>Confirm</Button>
        //     </form>
        // </div>
    )
}


export default Signup;