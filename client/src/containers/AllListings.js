import React, { useState, useEffect } from 'react';
import PublicListingLink from '../components/PublicListingLink';


const AllListings = () => {
    const [listings, setListings] = useState([])
    const [error, setError] = useState("")


    useEffect(() => {
        fetch("/listings/all")
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


    const listingsList = listings.map( l => <PublicListingLink key={l.id} listing={l} />)


    return(
        <div>
            <h3>Everything in the marketplace!</h3>
            {listingsList}
        </div>
        
    )

}

export default AllListings;