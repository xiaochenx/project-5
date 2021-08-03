import React from 'react'
import { Link } from 'react-router-dom'

const ListingLink = ({listing}) => {
    
    return (
        <div className='trip-link'>
            <Link to={`/listings/${listing.id}`} className='form-title'>
                <h3>{listing.name}</h3>
            </Link>
        </div>
    )
}

export default ListingLink;