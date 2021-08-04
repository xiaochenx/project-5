import React, { useState } from 'react'

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
                <input className="submit-button" type="submit"/>
            </form>
        </div>
    )
}

export default CommentForm;