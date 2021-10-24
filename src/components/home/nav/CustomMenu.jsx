import React from 'react'
import { Button, MenuItem, Menu } from '@material-ui/core'
import c from '../../../styles/header.module.css'
import { Link } from 'react-router-dom';


export default function CustomMenu({ title, links }) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <div>
        <Button className={c.menuBtn} aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenu}>
            {title}
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {
                links.map(link => <MenuItem className={c.menuList} onClick={handleClose}><Link to={link.link}>{link.name}</Link></MenuItem>)
            }
            {localStorage.getItem('admin_token') && <MenuItem className={c.menuList} onClick={handleClose}><Link to="/admin">Admin</Link></MenuItem>}
            {localStorage.getItem('moderator_token') && <MenuItem className={c.menuList} onClick={handleClose}><Link to="/moderator">Moderator</Link></MenuItem>}
        </Menu>
    </div>
}
