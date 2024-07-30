import styles from '../style/home.module.css'
import main_picture from '../../public/main_picture.png'
import logo_example from '../../public/logo_example.png'
import Image from 'next/image'

export default function page() {
    return (
        <main>
            {/* Modificar Nome das classes urgente!! */}
            <section className={styles.main}>
                <div className={styles.main_content}>
                    <h1 className={styles.main_title}>
                        RV, RA e Ambientes<br/>
                        Virtuais<br/>
                        <span className={styles.main_title_green}>desde 2022</span>
                    </h1>
                    <p className={styles.main_subtitle}>
                    Onde seu projeto ganha vida em novos ambientes!
                    </p>
                    <button className={styles.main_button}>Contate</button>
                </div>
                <div>
                    <Image className={styles.main_picture} src={main_picture} 
                    alt="Imagem principal"/>
                </div>
            </section>
            <section className={styles.our_clients}>
                <h1>Nossos Clientes</h1>
                <p>Nós já trabalhamos com mais de 0000 clientes</p>
                <div className={styles.clients_logo_list}>
                    <Image className={styles.logo_example} src={logo_example} alt="Logo do cliente 2"/>
                    <Image className={styles.logo_example} src={logo_example} alt="Logo do cliente 1"/>
                    <Image className={styles.logo_example} src={logo_example} alt="Logo do cliente 3"/>
                    <Image className={styles.logo_example} src={logo_example} alt="Logo do cliente 4"/>
                    <Image className={styles.logo_example} src={logo_example} alt="Logo do cliente 5"/>
                    <Image className={styles.logo_example} src={logo_example} alt="Logo do cliente 6"/>
                </div>
            </section>
        </main>
    )
}