import React, { useState } from 'react'
import Logo from '../img/slade_profile.png'
import { BsCart2, BsDiscord } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { width } from '@mui/system';



const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About",
            icon:<InfoIcon/>
        },
        {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>
        },
        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>
        },
        
    ]
  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt="" />
        </div>
        <div className='navbar-links-container'>
            <a href="#">Home</a>
            <a href="#">Redes</a>
            <a href="#">Info</a>
            <a href="#">Demos</a>
            <a href="#">
                <BsCart2 className='navbar-cart-icon'/>
            </a>
            <a href="https://discord.gg/duki" target="_blank" rel='noreferrer'>
                <button className='discord-button'>
                <BsDiscord className='navbar-discord-icon'/> Discord
                </button>
            </a>
            
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onclick={() =>setOpenMenu(true)} />
        </div>
        <Drawer open = {openMenu} onclose={() => setOpenMenu(false)} anchor="right">
            <Box
            sx ={{ width: 250}}
            role = "presentation"
            onclick={() => setOpenMenu(false)}
            onkeyDown={() => setOpenMenu(false)}
            >
                <List>
                    {menuOptions.map((item) => (
                        <ListItem key = {item.text} disablePadding >
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primery = {item.text}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </nav>
  )
}

export default Navbar