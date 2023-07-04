import banner from './banner.png'
import Menu from "components/Menu"
import Cabecalho from "components/cabecalho";
import Galeria from "components/galeria"
import Rodape from "components/rodape"
import styles from './InicialPage.module.scss'
import "../../assets/icons/fonts/fonts.css"

export default function PaginaInicial () {
    return(
        <>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <img src={banner} alt="Imagem de eu, meu pai e meus irmãos" />
                    </div>
                </section>
                
                
            </main>
            <div className={styles.galeria}>
                <Galeria/>  
            </div>
            
            <Rodape/>
            
        </>
        
    )
}