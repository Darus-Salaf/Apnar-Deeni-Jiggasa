import { Button, TextField } from '@material-ui/core'
import { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { ModeratorContext } from '../../../App'
import c from '../../../styles/ath.module.css'

export default function ModeratorLogin() {

    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: '/' } }

    // eslint-disable-next-line
    const [isMod, setIsMod] = useContext(ModeratorContext)
    const [input, setInput] = useState({
        email: '',
        password: '',
    })
    const handleChange = e => {
        let initialData = { ...input }
        initialData[e.target.name] = e.target.value
        setInput(initialData)
    }
    const handleLogin = () => {

        if (input.email && input.password) {

            fetch('/backend/api/v1/moderator/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })
                .then(res => {
                    if (res.status !== 200) {
                        alert('Incorrect Credentials, Please try again.')
                    } else {
                        const { email, password } = input
                        setIsMod({
                            email,
                            password,
                        })
                        localStorage.setItem('email', email)
                        localStorage.setItem('password', password)
                        history.replace(from)
                    }
                })
                .catch(err => alert(err.message))

        } else alert('Please fill all the field')
    }

    return (
        <div style={{ position: 'relative' }}>
            <div className={c.loginBg}>
                <div className={c.loginForm}>
                    <div className="my-4">
                        <TextField name="email" value={input.email} onChange={handleChange} label="Email Address" style={{ width: '100%' }} />
                    </div>
                    <div className="my-4">
                        <TextField name="password" type="password" value={input.password} onChange={handleChange} label="Password" style={{ width: '100%' }} />
                    </div>
                    <div className="my-5">
                        <Button variant="contained" color="primary" onClick={handleLogin}>Login Moderator</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
