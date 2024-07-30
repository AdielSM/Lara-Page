import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faYoutube, faFacebook, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import styles from '../../style/contacts.module.css'

export default function page() {
    return(
        <main>
            <section className={styles.main}>
                <div className={styles.titles}>
                    <h2 className={styles.h2}>FALE CONOSCO</h2>
                    <h1 className={styles.title}>Entre em <span className={styles.greenText}>Contato</span></h1>
                    <p className={styles.p}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour
                    </p>
                </div>
            </section>
            <section className={styles.container}>
                <div className={styles.forms}>
                    <div className={styles.left}>
                        <h1 className={styles.titleForm}>
                            Formulário de Contato
                        </h1>
                        <hr className={styles.line}/>
                        <form className={styles.form}>
                            <input className={styles.input_line} type="text" placeholder='Nome Completo' required></input>
                            <input className={styles.input_line} type="email" placeholder='Email' required></input>
                            <input className={styles.input_line} type="text" placeholder='Assunto' required></input>
                            <input className={styles.input_line} type="text" placeholder='Mensagem' required></input>
                        </form>
                        <button className={styles.send}>Enviar</button>
                    </div>
                    <div className={styles.right}>
                        <h1>Localização</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.917325461697!2d-34.87604522407573!3d-7.135558969990612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace810852ae4f1%3A0xaf5445223401f2bb!2sIFPB%20-%20Campus%20Jo%C3%A3o%20Pessoa!5e0!3m2!1spt-BR!2sbr!4v1722299023278!5m2!1spt-BR!2sbr"></iframe>
                        <div className={styles.texts}>
                            <p>JP, Instituto Federal da Paraiba</p>
                            <p>(00) 00000-0000</p>
                            <p>email@gmail.com</p>
                        </div>
                        <div className={styles.social}>
                            <FontAwesomeIcon className={styles.social_icons} icon={faInstagramSquare}  />
                            <FontAwesomeIcon className={styles.social_icons} icon={faXTwitter}  />
                            <FontAwesomeIcon className={styles.social_icons} icon={faYoutube}/>
                            <FontAwesomeIcon className={styles.social_icons} icon={faFacebook}  />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}