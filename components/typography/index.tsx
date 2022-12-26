import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface ITitle {
    children: JSX.Element | string
}

const Title1 = ({ children }: ITitle) => <h1 className={styles.title1}>{children}</h1>

const Title2 = ({ children }: ITitle) => <h2 className={styles.title2}>{children}</h2>

const Title3 = ({ children }: ITitle) => <h3 className={styles.title3}>{children}</h3>

const BodyLarge = ({ children }: ITitle) => <p className={clsx(styles.paragraph, styles.paragraph_large)}>{children}</p>

const BodyMedium = ({ children }: ITitle) => (
    <p className={clsx(styles.paragraph, styles.paragraph_medium)}>{children}</p>
)

const BodySmall = ({ children }: ITitle) => <p className={clsx(styles.paragraph, styles.paragraph_small)}>{children}</p>

export { Title1, Title2, Title3, BodyLarge, BodyMedium, BodySmall }
