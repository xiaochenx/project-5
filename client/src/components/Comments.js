import React, { useState, useEffect } from 'react'

const Comments = (props) => {
    const [comments, setComments] = useState([])
    const [error, setError] = useState("")


    useEffect(() => {
        fetch(`/listings/${props.match.params.id}/comments`)
        .then((r) => r.json())
        .then(data => {
            console.log("fetch all listings", data)
            if(data.error){
                setError(data.error)
            }else{
                setComments(data)
            }
        })
    }, [])


    const commentsList = comments.map(c =><li key={c.id}>{c.content}</li>)
    return(
        <div>
          

            {commentsList}
        </div>
        
    )

}

export default Comments