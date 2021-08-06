import React, { useState } from 'react'
import { Button, Form, Segment, Image, Header, Grid } from 'semantic-ui-react'

const Login = ({loginUser}) => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/login",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
              username: username,
              password: password
          })
        })
        .then (resp => resp.json())
        .then (user =>  loginUser(user))
    }
    
    return (
        <Segment inverted>
             <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
             <Header as='h2' color='teal' textAlign='center'>Log-in to your account</Header>
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

                    <Button color='teal' fluid size='large' type='submit'>
                        Login
                    </Button>
                </Segment>
            </Form>
            </Grid.Column>
            </Grid>

            {/* <Form className="sign-up" size='large' onSubmit={handleSubmit}>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)}/>
                    <label> Username:</label>
                    <br/>
                    <input type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)}></input>
                    <br/>
                    <br/>
                    <label> Password:</label>
                    <br/>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <br/>
                    <Button  color='blue' size='small' type='submit'>Confirm</Button>
                <Segment />
            </Form> */}
        </Segment>
    )
}

export default Login;