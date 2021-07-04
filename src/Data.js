import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
export const links=[
    {
        id:1,
        url:'/',
        text:'Home',
    },
    {
        id:2,
        url:'/about',
        text:'About',
    },
    {
        id:3,
        url:'/product',
        text:'Product',
    },
    {
        id:4,
        url:'/contact',
        text:'Contact',
    }
]
export const social=[
    {
        id:1,
        url:'https://twitter.com/',
        icon:<FacebookIcon/>
    },
    {
        id:2,
        url:'https://www.instagram.com/',
        icon:<InstagramIcon/>
    },
    {
        id:3,
        url:'https://www.whatsapp.com/',
        icon:<WhatsAppIcon/>
    },
]