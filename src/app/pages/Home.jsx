import styles from '../../style/home.module.css'
import main_picture from '../../../public/main_picture.png'
import Image from 'next/image'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.main_content}>
                <h1 className={styles.main_title}>
                RV, RA e Ambientes<br/>
                Virtuais<br/>
                <span className={styles.main_title_green}>desde 2022</span>
                </h1>
                <p className={styles.main_subtitle}>Onde seu projeto ganha vida em novos ambientes!</p>
                <button className={styles.main_button}>Contate</button>
            </div>
            <div>
                <Image className={styles.main_picture} src={main_picture} 
                alt="Imagem principal"/>
            </div>
        </main>
    )
}