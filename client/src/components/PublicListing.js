import React, { useState, useEffect } from 'react'
import {  Link } from 'react-router-dom'
import { Button, Icon, Segment, Header } from 'semantic-ui-react'

const PublicListing = (props) => {

    const [listing, setListing] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`/listing/${props.match.params.id}`)
        .then((r) => r.json())
        .then(data => {
            console.log("fetch all listings", data)
            if(data.error){
                setError(data.error)
            }else{
                setListing(data)
                
            }
        })
    }, [])


    return(
        <Segment style={{ padding: '28em 5em' }} basic inverted>
           
            <Header  as='h3' inverted style={{ fontSize: '3em', marginTop:'-7em'}} textAlign='center' >Name: {listing.name}</Header>
            <Header  as='h3' inverted style={{ fontSize: '3em', marginTop:'1em'}} textAlign='center' >Descriptions: {listing.description}</Header>
            <Header  as='h3' inverted style={{ fontSize: '2em', marginTop:'1em'}} textAlign='center' ><Icon name='dollar sign' />{listing.price}</Header>
            <hr />   
            <Button primary size='big' as={Link} to={`/listings/${listing.id}/comments`}>Show Comments</Button>     
           
        </Segment>
        
    )
}

export default PublicListing