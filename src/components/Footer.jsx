import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://github.com/SeyyedAliMehdi" target="_blank" rel="noreferrer">
                    <InstagramIcon />
                </a>
                <a href="https://github.com/SeyyedAliMehdi" target="_blank" rel="noreferrer">
                    <TwitterIcon/>
                </a>
                <a href="https://github.com/SeyyedAliMehdi" target="_blank" rel="noreferrer">
                    <FacebookIcon/>
                </a>
                <a href="https://github.com/SeyyedAliMehdi" target="_blank" rel="noreferrer">
                    <LinkedInIcon/>
                </a>


            </div>
            <p> &copy; 2021 IndianFooood.com</p>
        </div>

    )
}

export default Footer;