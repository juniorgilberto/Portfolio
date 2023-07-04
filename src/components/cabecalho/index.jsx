import logo from './logo.png'
import search from './search.png'
import styles from './cabecalho.module.scss'

export default function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Fotinha minha" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?"/>
                <img src={search} alt="Lupa" />
            </div>
        </header>
    )
}