import React, { useState, useEffect } from 'react';
import ListingLink from '../components/ListingLink';
import ListingForm from '../components/ListingForm'
import { Segment, Header, Image, Button, Grid, Icon} from 'semantic-ui-react'


const YourListings = () => {
    const [listings, setListings] = useState([])
    const [listingFormFlag, setListingFormFlag] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch("/listings")
          .then((r) => r.json())
          .then(data => {
            console.log("fetch all listings", data)
            if(data.error){
                setError(data.error)
            }else{
                setListings(data)
            }
          })
    }, []);


    const addListing = (listing) =>{
        fetch("/listings",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(listing)
        })
        .then(r => r.json())
        .then(data => {
            if (data.errors){
                alert("Please fill out the form completely. There should be at least one character in each text box.");
            }else{
                setListings([...listings, data])
                setListingFormFlag(false)
            }
        })
    }

    const listingsList = listings.map( l => <ListingLink key={l.id} listing={l} />)


    if (error ===''){
        return (
            <Segment style={{ padding: '28em 5em' }} basic inverted>
                {listings.length > 0 ?
                    <div className="card">
                        {/* <h3 className='form-title'>Here are all your listings. Just click to view!</h3> */}
                        <Header  as='h3' inverted style={{ fontSize: '3em', marginTop:'-7em'}} textAlign='center' >Here are all your listings. Just click to view!</Header>
                        {listingsList}
                        {listingFormFlag ? 
                            <ListingForm addListing ={addListing}/>
                            :
                            <Button color='teal'  onClick={() => setListingFormFlag(true)}>Add New Item</Button>
                            
                            
                        }
                    </div>
                    :
                    <div>
                        <h3>No Listings Found</h3>
                        <h3>Click the button below to start</h3>
                        {listingFormFlag ? 
                            <ListingForm addListing ={addListing}/>
                            :
                            <Button color='teal' textAlign="center" onClick={() => setListingFormFlag(true) }>Add New Item</Button>
                            
                        }
                        <hr/>
                    </div>
                }
            </Segment>
        )
    }else{
        return(
            <div>
                <h3>Not authorized - Please Sign up or Login</h3>
            </div>
            
        )
    }
}


export default YourListings;