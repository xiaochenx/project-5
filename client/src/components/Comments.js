import React, { useState, useEffect } from 'react'
import CommentForm from '../components/CommentForm'
import { Button } from 'semantic-ui-react'


const Comments = (props) => {
    const [comments, setComments] = useState([])
    const [error, setError] = useState("")
    const [commentFormFlag, setCommentFormFlag] = useState(false)


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

    const addComment = (comment) =>{
        fetch(`/listings/${props.match.params.id}/comments`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(comment)
        })
        .then(r => r.json())
        .then(data => {
            if (data.errors){
                alert("Please fill out the form completely. There should be at least one character in each text box.");
            }else{
                setComments([...comments, data])
                setCommentFormFlag(false)
            }
        })
    }


    const commentsList = comments.map(c =><li key={c.id}>{c.content}</li>)

 
    if (error ===''){
        return (
            <div>
                {comments.length > 0 ?
                    <div className="card">
                        <h3 className='form-title'>Here are all your comments!</h3>
                        {commentsList}
                        {commentFormFlag ? 
                            <CommentForm addComment ={addComment}/>
                            :
                            <Button size='large' color='blue' onClick={() => setCommentFormFlag(true)}>Add New Comment</Button>
                        }
                    </div>
                    :
                    <div>
                        <h3>No Comments Found</h3>
                        <h3>Click the button below to add</h3>
                        {commentFormFlag ? 
                            <CommentForm addComment ={addComment}/>
                            :
                            <Button size='large' color='blue' onClick={() => setCommentFormFlag(true)}>Add New Comment</Button>
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

export default Comments