import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Header, Image, Button, Icon} from 'semantic-ui-react'

const PublicListingLink = ({listing}) => {
    
    return (
        <Segment basic inverted>
            <Link to={`/listing/${listing.id}`} className='form-title'>
                {/* <h3>{listing.name}</h3> */}
                <Header  as='h3' color='orange'  style={{ fontSize: '2em', marginTop:'2em', height: '1vh' }} textAlign='center' >{listing.name}</Header>
            </Link>
           
        </Segment>
    )
}

export default PublicListingLink;