import { Button, TextField } from '@material-ui/core'
import { useContext } from 'react'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { AdminContext } from '../../App'
import c from '../../styles/ath.module.css'

export default function Login() {

    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: '/' } }
// eslint-disable-next-line
    const [isAdmin, setIsAdmin] = useContext(AdminContext)
    const [input, setInput] = useState({
        email: '',
        password: '',
        code: ''
    })
    const handleChange = e => {
        let initialData = { ...input }
        initialData[e.target.name] = e.target.value
        setInput(initialData)
    }
    const handleLogin = () => {

        if (input.email && input.password && input.code) {

            fetch('/backend/api/v1/admin/login', {
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
                        const { email, password, code } = input
                        setIsAdmin({
                            email,
                            password,
                            code
                        })
                        localStorage.setItem('email', email)
                        localStorage.setItem('password', password)
                        localStorage.setItem('code', code)
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
                    <div className="my-4">
                        <TextField name="code" type="password" value={input.code} onChange={handleChange} label="Code" style={{ width: '100%' }} />
                    </div>
                    <div className="my-5">
                        <Button variant="contained" color="primary" onClick={handleLogin}>Login Admin</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
