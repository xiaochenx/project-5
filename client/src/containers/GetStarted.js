import React from 'react'
import { Segment, Header, Image, Button, Icon} from 'semantic-ui-react'

 const GetStarted = () => {
    return (
        <Segment  style={{ padding: '20em 5em' }} basic inverted> 
           <Header  as='h1' style={{ fontSize: '3em', marginTop:'-1em', marginBottom:'1em' }} textAlign='right' >First Signup or Login above</Header>
           <br />
           <Header  as='h1' style={{ fontSize: '3em', marginTop:'-1em', marginBottom:'1em' }} textAlign='right' >Click Marketplace to view everything for sale</Header>
           <br />
           <Header  as='h1' style={{ fontSize: '3em', marginTop:'-1em', marginBottom:'1em' }} textAlign='right' >Click Your Items to add, update and delete your listings</Header>
            <br />
            <Header  as='h1' style={{ fontSize: '3em', marginTop:'-1em', marginBottom:'1em'}} textAlign='right' >Have fun!</Header>
        </Segment>
    )
}

export default GetStarted