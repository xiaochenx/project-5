import React from 'react'
import { Segment, Header, Image, Button, Icon} from 'semantic-ui-react'
import homeimage from '../Images/2.jpg'
import homeimage2 from '../Images/1.jpg'
import "../Images/style.css"
import {  Link } from 'react-router-dom'
const Home = (props) => {
    console.log(props)
    return (
        <div>
             
        <Segment  style={{ padding: '28em 5em' }} basic inverted> 
             <Image className='home_image' floated='left' src={homeimage} size='large'  />
            <Header  as='h1' style={{ fontSize: '5em', marginTop:'-1em' }} textAlign='right' >Welcome to your</Header>
            <br />
            <Header  as='h1' style={{ fontSize: '2.6em'}} textAlign='right'>Online Garage Sale Marketplace!</Header>
            <br />
            <Header  as='h2'  textAlign='right'>In here you can easily list, buy and sell anything that you don't need anymore!</Header>
            
            <Button primary as={Link} to={`/getstarted`} floated='right' style={{ marginTop: '2em'}} size='huge'>
                 Get Started
                <Icon name='right arrow' />
            </Button>
        </Segment>
        </div>
    )
}

export default Home; 