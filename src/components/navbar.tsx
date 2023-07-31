import React, { useEffect } from 'react';
import { useState } from 'react';
import * as styles from '../styles/navbar.module.scss';
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import Menubutton from '../images/menu_FILL0_wght400_GRAD0_opsz48.svg';
import Closebutton from '../images/close_FILL0_wght400_GRAD0_opsz48.svg'

const Navbar = () => {
    const [menuActive, setMenuActive] = useState<Boolean>(false)

    useEffect(() => {

    }, [menuActive])
    return (
        <nav className={styles.navwrapper}  id="start">
            <section className={styles.logo}>
                <Link to="/">CS</Link>
            </section>
            <section className={` ${menuActive ?
                    styles.activenavlist :
                    styles.navlist}`}>
                <Link to="/" >Home</Link>
                <Link to="/#projects" >Projects </Link>
                <Link to="/#about" >About </Link>
                <Link to="/#contact" >Contact</Link>
            </section>
            <div className={styles.togglebutton}>
                {
                    menuActive ?
                        <img
                            className={styles.closeicon}
                            src={Closebutton} alt="close"
                            onClick={() => setMenuActive(false)}
                        />
                        :
                        <img
                            className={styles.menuicon}
                            src={Menubutton} alt="open"
                            onClick={() => setMenuActive(true)} />
                }


            </div>
        </nav>
    );
};
export const Head: HeadFC = () => <head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>

export default Navbar;
