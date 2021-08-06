import React, { useState, useEffect } from 'react'
import {  Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

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
        <div>
            <h2>Name: {listing.name}</h2>
            <p>Descriptions: {listing.description}</p>
            <p>Price: {listing.price}</p>
            <hr />   
            <Button primary as={Link} to={`/listings/${listing.id}/comments`}>Show Comments</Button>      
           
        </div>
        
    )
}

export default PublicListing