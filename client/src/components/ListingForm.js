import React, { useState } from 'react'


const ListingForm = ({addListing}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        addListing({
            name: name,
            description: description,
            price: price
        })
    }

    return (
        <div>
            <form className="listing-form" onSubmit={handleSubmit}>
                <h3 className='form-title'>Complete the form below to add a new listing!</h3>
                <label>Name</label>
                <br/>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <br/>
                <br/>
                <label>Description</label>
                <br/>
                <textarea type="text" id="description" rows="4" cols="50" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <br/>
                <br/>
                <label>Price</label>
                <br/>
                <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                <br/>
                <br/>
                <input className="submit-button" type="submit"/>
            </form>
        </div>
    )
}

export default ListingForm;