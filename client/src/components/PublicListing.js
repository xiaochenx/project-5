import React, { useState, useEffect } from 'react'


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
            <h4>Comments</h4>
            {/* {commentsList} */}
           
        </div>
        
    )
}

export default PublicListing