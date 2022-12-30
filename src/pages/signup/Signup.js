import React, { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import './Signup.css'

export default function Signup() {
    //states for signup fields
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [thumbNail, setThumbNail] = useState(null) //users will upload their pics
    const [thumbnailError, setThumbNailError] = useState(null) //for file selection errors
    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName, thumbNail)
    }
    const handleFileChange = (e) => {
        setThumbNail(null) //just incase user selected something and then changed it
        let selected = e.target.files[0] //we only want one file in the first position in the array
        console.log(selected)

        //check for correct file selected - type, size and if file is selected
        if (!selected) {
            setThumbNailError('Please select a file')
            return //means if the check fails, it returns out of the function and the subsequent codes will not run
        }
        if (!selected.type.includes('image')) {
            setThumbNailError('Selected file must be an image')
            return
        }
        if (selected.size > 100000) {
            setThumbNailError('image file size must be less than 100kb')
            return
        }

        setThumbNailError(null) //if code passes check, reset the error to null
        setThumbNail(selected)
        console.log('thumbnail updated')
    }
    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <label>
                <span>email:</span>
                <input
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input
                    required
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>Display Name:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            <label>
                <span>Profile Thumbnail:</span>
                <input
                    required
                    type="file" //when clicked, opens up window explorer for file
                    onChange={handleFileChange}
                />
                {thumbnailError && <div className="error">{thumbnailError}</div>}
            </label>
            {!isPending && <button className='btn'>Signup</button>}
            {isPending && <button className='btn' disabled>Loading..</button>}
            {error && <div className='error'>{error}</div>}

        </form>
    )
}
