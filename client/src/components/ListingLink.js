import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Header, Image, Button, Icon} from 'semantic-ui-react'

const ListingLink = ({listing}) => {
    
    return (
        <Segment basic inverted>
            <Link to={`/listings/${listing.id}`} className='form-title'>
                <Header  as='h3' color='orange'  style={{ fontSize: '2em', marginTop:'2em', height: '1vh' }} textAlign='center' >{listing.name}</Header>
            </Link>
        </Segment>
    )
}

export default ListingLink;