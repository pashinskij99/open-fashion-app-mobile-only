import React from 'react'
import { firstScreenBtnText, firstScreenTitleArray } from '../../constants'
import styles from './styles.module.scss'

const StartScreen = () => {
  return (
    <section data-scroll-section className={styles.wrapper}>
        <div className={styles.title}>
            {firstScreenTitleArray.map(item => (
                <span key={item} className={styles.title__word}>{item}</span>
            ))}
        </div>

        <button className={styles.btn}>{firstScreenBtnText}</button>
    </section>
  )
}

export default StartScreen