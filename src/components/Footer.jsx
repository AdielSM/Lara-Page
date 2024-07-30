import Image from "next/image";
import logo from "../../public/Logo_Lara.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import styles from '../style/footer.module.css';


export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>  
                <div className={styles.footer_logo}>
                    <Image src={logo} alt="logo"/>
                </div>
                <div className={styles.footer_info}>
                    <p>Copyright 2024</p>
                    <p>Todos os direitos reservados</p>
                </div>
                <div className={styles.footer_social}>
                    <FontAwesomeIcon icon={faInstagram} className={styles.footer_social_icons} />
                    <FontAwesomeIcon icon={faXTwitter} className={styles.footer_social_icons} />
                    <FontAwesomeIcon icon={faYoutube} className={styles.footer_social_icons} />
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.footer_links}>
                    <h1>Lara</h1>
                    <nav>
                        <a href="#">Home</a>
                        <a href="#">Sobre nós</a>
                        <a href="#">Projetos</a>
                        <a href="#">Equipe</a>
                        <a href="#">Entre em contato</a>
                    </nav>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.footer_subscribe}>
                    <h1>Mantenha-se atualizado</h1>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Seu Endereço de Email" className={styles.input} />
                        {/* ajustar mensagem no input e fazer script para receber email */}
                    </div>
                </div>
            </div>
        </footer> 
    );
}