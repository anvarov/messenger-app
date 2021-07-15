import React from 'react'

function ContactItem({id, username}) {
    console.log(id)
    return (
        <div>
            <p>{username}</p>
        </div>
    )
}

export default ContactItem
