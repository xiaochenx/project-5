import React, { useState, useEffect } from 'react';
import PublicListingLink from '../components/PublicListingLink';
import { Segment, Header, Image, Button, Icon} from 'semantic-ui-react'


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
        <Segment style={{ padding: '28em 5em' }} basic inverted>
            {/* <h3>Everything in the marketplace!</h3> */}
            <Header  as='h3' style={{ fontSize: '3em', marginTop:'-7em'}} textAlign='center' >Everything in the marketplace!</Header>
            {listingsList}
        </Segment>
        
    )

}

export default AllListings;