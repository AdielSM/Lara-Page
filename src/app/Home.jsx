import styles from '../style/footer.module.css'

export default function Home() {
    return (
        <main className={styles.Main}>
            <h1 className={styles.main_title}>
            RV, RA e Ambientes<br/>
            Virtuais
            <span className={styles.main_title_green}>desde 2022</span>
            </h1>
            <p className={styles.main_subtitle}>Onde seu projeto ganha vida em novos ambientes!</p>
            <button className={styles.main_button}>Contate</button>
        </main>
    )
}