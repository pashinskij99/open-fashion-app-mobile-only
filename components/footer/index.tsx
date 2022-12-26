import Link from 'next/link'
import React from 'react'
import { LineFooterSvg } from '../../assets/icons'
import { footerNavPagesList, footerSocialList } from '../../constants'
import styles from './styles.module.scss'

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.socialList}>
                <ul className={styles.socialList__list}>
                    {footerSocialList.map(({ id, icon: Icon }) => (
                        <li
                            key={id}
                            className={styles.socialList__listItem}
                        >
                            {/* @ts-ignore */}
                            <Icon className={styles.socialList__icon} />
                        </li>
                    ))}
                </ul>
            </div>

            <LineFooterSvg className={styles.line} />

            <address className={styles.contact}>
                <a
                    className={styles.contact__address}
                    href='mailto:support@openui.design'
                >
                    support@openui.design
                </a>
                <a
                    className={styles.contact__number}
                    href='tel:+60825876'
                >
                    +60 825 876
                </a>
                <span className={styles.contact__time}>08:00 - 22:00 - Everyday</span>
            </address>

            <LineFooterSvg className={styles.line} />

            <nav className={styles.navPages}>
                <ul className={styles.navPages__list}>
                    {footerNavPagesList.map(({ id, name, link }) => (
                        <li
                            key={id}
                            className={styles.navPages__listItem}
                        >
                            <Link
                                href={link}
                                legacyBehavior
                            >
                                <a className={styles.navPages__link}>{name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <span className={styles.copyright}>Copyright© OpenUI All Rights Reserved.</span>
        </footer>
    )
}

export default Footer
