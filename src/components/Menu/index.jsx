import React from 'react'
import home from '../../assets/icons/home.png'
import aboutMe from '../../assets/icons/aboutMe.png'
import qualifications from '../../assets/icons/qualifications.png'
import planning from '../../assets/icons/planning.png'
import certifications from '../../assets/icons/certificate.png'
import styles from './menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
            <img src={home} alt="" />
            <a href="">Inicio</a>
        </li>
        <li className={styles.menu__item}>
            <img src={aboutMe} alt="" />
            <a href="" title="information icons">Sobre mim</a>
        </li>
        <li className={styles.menu__item}>
            <img src={qualifications} alt="" />
            <a href="">Qualificações</a>
        </li>
        <li className={styles.menu__item}>
            <img src={planning} alt="" />
            <a href="">Planejamentos</a>
        </li>
        <li className={styles.menu__item}>
            <img src={certifications} alt="" />
            <a href="">Certificados</a>
        </li>
      </ul>
    </nav>
  )
}
