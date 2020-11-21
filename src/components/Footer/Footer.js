import React from "react";
import { ReactComponent as Facebook } from "../../assets/svgs/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/svgs/instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/svgs/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/svgs/twitter.svg";


import styles from "./Footer.module.css";

const Footer = () => {

    const LINKIMAGES = {
        'facebook': <Facebook/>,
        'instagram': <Instagram />,
        'linkedin': <LinkedIn />,
        'twitter': <Twitter />
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