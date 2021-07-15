import React from 'react'
import ContactItem from './ContactItem'

function ContactList() {
    // will get contacts from context
    const contacts = [{id: 1, username: 'Akmal'}]
    return (
        <li>
            {contacts.map((contact) => (
                <ContactItem key={contact.id} {...contact} />
            ))}
        </li>
    )
}

export default ContactList
