import logo from "../../public/Logo_Lara.png";
import Image from 'next/image';
import Link from 'next/link';
import styles from '../style/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
    <header className={styles.header}>
        <div>
            <Image src={logo} alt="Logo Lara" />
        </div>
        <div className={styles.nav}>
            <nav className={styles.navBar}>
                <a href="#">Home</a>
                <a href="#">Sobre Nós</a>
                <a href="#">Projetos</a>
                <a href="#">Equipe</a>
            </nav>
            <button className={styles.contact_button}>
                <a href="#">
                    Contato
                    <FontAwesomeIcon className={styles.contact_button_arrow} 
                    icon={faArrowRight}/>
                </a>
            </button>
        </div>
    </header>
    );
    }