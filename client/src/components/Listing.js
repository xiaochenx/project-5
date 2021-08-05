import React, { useState, useEffect } from 'react'
import EditForm from './EditForm';
import {  Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Listing = (props) => {

    const [listing, setListing] = useState([])
    const [error, setError] = useState("")
    const [editFormFlag, setEditFormFlag,] = useState(false)


    useEffect(() => {
        fetch(`/listings/${props.match.params.id}`)
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

    const deleteListing = () =>{
        fetch(`/listings/${listing.id}`,{
          method: "DELETE",
          headers:{
            "Content-Type": "application/json"
          },
        })
        .then(() => {
            setListing([]) 
        })
    }



    const editListing = (content) =>{
        fetch(`/listings/${listing.id}`,{
          method: "PATCH",
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body:JSON.stringify(content)
        })
        .then(resp => resp.json())
        .then((data) => {
            setListing(data) 
        })
        setEditFormFlag(false)
    }

// const commentsList = listing.comments.map( l => <li key={l.id}>{l.content}</li>)

    if (error ===''){
        return (
            <div>
                {listing.id > 0 ?
                    <div>
                        <h2 className='home'>Name: {listing.name}</h2>
                        <p className='content'>Descriptions: {listing.description}</p>
                        <p>Price: {listing.price}</p>
                       
                        {/* <p>{commentsList}</p> */}
                        {editFormFlag ? <EditForm editListing={editListing} listing={listing} /> : <Button circular size='small' color='teal' onClick={() => setEditFormFlag(true)}>Edit</Button>} 
                        <Button circular color='red' size='small' icon='trash alternate' onClick={deleteListing}></Button>
                        <hr />
                        {/* <Link to={`/listings/${listing.id}/comments`}>
                            <button className="submit-button">Show Comments</button>
                        </Link> */}
                        <Button primary size='big' as={Link} to={`/listings/${listing.id}/comments`}>Show Comments</Button>
                    </div>
                    :
                    <div>
                        <h2>Listing Deleted!</h2>
                    </div>
                }
                
            </div>
        )
    }else{
        return(
            <div>
                <h3>Not authorized - Please Sign up or Login</h3>
            </div>
            
        )
    }
}

export default Listing