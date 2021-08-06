import React, { useState, useEffect } from 'react'
import CommentForm from '../components/CommentForm'

import { Segment, Header, Image, Button, Grid, Icon, List} from 'semantic-ui-react'


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


    const commentsList = comments.map(c =><List key={c.id} size='huge'><List.Item><List.Icon name='comment alternate' />{c.content}</List.Item></List>)

 
    if (error ===''){
        return (
            <Segment style={{ padding: '28em 5em' }} basic inverted>
                {comments.length > 0 ?
                    <div className="card">
                        
                        <Header  as='h3' inverted style={{ fontSize: '3em', marginTop:'-7em'}} textAlign='center' >Here are all your comments!</Header>
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
            </Segment>
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