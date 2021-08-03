import React, { useState, useEffect } from 'react';
import ListingLink from '../components/ListingLink';
import ListingForm from '../components/ListingForm'



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
            <div>
                {listings.length > 0 ?
                    <div className="card">
                        <h3 className='form-title'>Here are all your listings. Just click to view!</h3>
                        {listingsList}
                        {listingFormFlag ? 
                            <ListingForm addListing ={addListing}/>
                            :
                            <button className="submit-button" onClick={() => setListingFormFlag(true)}>Add New Listing</button>
                        }
                    </div>
                    :
                    <div>
                        <h3>No Listings Found</h3>
                        <h3>Click the button below to start</h3>
                        {listingFormFlag ? 
                            <ListingForm addListing ={addListing}/>
                            :
                            <button className="submit-button" onClick={() => setListingFormFlag(true) }>Add New Listing</button>
                        }
                        <hr/>
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


export default YourListings;