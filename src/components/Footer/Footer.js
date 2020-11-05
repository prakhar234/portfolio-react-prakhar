import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


import styles from "./Footer.module.css";

const Footer = () => {

    const LINKIMAGES = {
        'facebook': <FaFacebookF/>,
        'instagram': <FaInstagram />,
        'linkedin': <FaLinkedinIn />,
        'twitter': <FaTwitter />
    }

    const links = [
        {
            name: 'Facebook',
            id: 'facebook',
            link: 'https://www.facebook.com/prakhar0001/'
        },
        {
            name: 'Instagram',
            id: 'instagram',
            link: 'https://www.instagram.com/praks234/'
        },
        {
            name: 'Twitter',
            id: 'twitter',
            link: 'https://twitter.com/prakhar0001'
        },
        {
            name: 'LinkedIn',
            id: 'linkedin',
            link: 'https://www.linkedin.com/in/prakhar-shukla-6449911b/'
        }
    ];

    const redirectToSocialSite = url => {
        window.open(url);
    }

    const socialLinks = links.map(link => {
        return (
            <div
                key={link.id} 
                className={styles.SocialLink} 
                onClick={() => redirectToSocialSite(link.link)}>{LINKIMAGES[link.id]}</div>
        )
    })

    return (
        <div className={styles.Footer}>
            <div className={styles.SocialLinks}>
                {socialLinks}
            </div>
            <div className={styles.Contact}>
                <div>Contact me<span className={styles.Highlight}>@ <a className={styles.MailTo} href="mailto:prakhar234@gmail.com">prakhar234@gmail.com</a></span></div>
            </div>
        </div>
    );
}

export default Footer;