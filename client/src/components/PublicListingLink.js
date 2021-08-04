import React from 'react'
import { Link } from 'react-router-dom'

const PublicListingLink = ({listing}) => {
    
    return (
        <div className='trip-link'>
            <Link to={`/listing/${listing.id}`} className='form-title'>
                <h3>{listing.name}</h3>
            </Link>
           
        </div>
    )
}

export default PublicListingLink;