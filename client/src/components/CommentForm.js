import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

const CommentForm = ({addComment}) => {
    const [content, setContent] = useState("")
    

    const handleSubmit = (event) => {
        event.preventDefault()
        addComment({
            content: content,
            
        })
    }

    return (
        <div>
            <form className="listing-form" onSubmit={handleSubmit}>
                <h3 className='form-title'>Complete the form below to add a new comment!</h3>
                <label>Content</label>
                <br/>
                <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)}></input>
                <br/>
                <Button color='blue' size='small' type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default CommentForm;