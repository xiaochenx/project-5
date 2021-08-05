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


    // const commentsList = listing.comments.map( l => <li key={l.id}>{l.content}</li>)
    return(
        <div>
            <h2>Name: {listing.name}</h2>
            <p>Descriptions: {listing.description}</p>
            <p>Price: {listing.price}</p>
            <hr />
            {/* <h4>Comments</h4> */}

            {/* <Link to={`/listings/${listing.id}/comments`}>
            <Button primary>Show Comments</Button>
            </Link> */}
            <Button primary as={Link} to={`/listings/${listing.id}/comments`}>Show Comments</Button>
           

            {/* {commentsList} */}
            
            {/* <ul>
                {listing.comments.map(item =>
                    <li key={item}>{item.content}</li>
                )}
            </ul> */}
           
        </div>
        
    )
}

export default PublicListing