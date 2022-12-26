import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { ShopingSvg, LogoSvg, SearchSvg } from '../../assets/icons'

const Header = () => {
    return (
        <header data-scroll-section className={styles.wrapper}>
            <div className={styles.hamburger}>
                <div className={styles.hamburger__line} />
                <div className={styles.hamburger__line} />
                <div className={styles.hamburger__line} />
            </div>

            <div className={styles.logo}>
                <Link href={'#'}>
                    <LogoSvg className={styles.logo__svg} />
                </Link>
            </div>

            <div className={styles.actions}>
                <Link
                    href={'#'}
                    legacyBehavior
                >
                    <a className={styles.actions__link}>
                        <SearchSvg className={styles.actions__svg} />
                    </a>
                </Link>
                <Link
                    href={'#'}
                    legacyBehavior
                >
                    <a className={styles.actions__link}>
                        <ShopingSvg className={styles.actions__svg} />
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header
