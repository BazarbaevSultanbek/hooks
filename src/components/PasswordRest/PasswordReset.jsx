import { useState } from 'react'
import './PasswordReset.scss'



const PasswordReset = () => {
    const [email, setEmail] = useState('')

    const SubmitPassword = () => {
        e.preventDefault();
        setEmail('')
    }

    return (
        <div className='Reset'>
            <div className="container">
                <div className="Reset-block">
                    <form onSubmit={SubmitPassword}>
                        <input type="text" className='email' onChange={(e) => setEmail(e.target.value)} placeholder="Email..." value={email} />
                        <button type='submit'>Reset Password</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default PasswordReset;