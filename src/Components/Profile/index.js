import React from 'react'
import photoProfile from '../../image/oter/bemVindas.jpeg'
import './index.css'

function Profile() {
    return (
        <div
            className='Profile'>
                <div>
                    <img
                        alt='Profile'
                        src={photoProfile} />
                </div>
        </div>
    )
}

export default Profile