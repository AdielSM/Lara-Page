
import RootLayout from "../RootLayout"
import Card from "@/app/components/Card"
import styles from "../style/card.module.css"
import Icon from "../../../public/Rectangle13.svg"
import Image from "next/image"

export default function Projetos(){
    return (
        <RootLayout>
            <div className={styles.text_project}>
                <span style={{fontWeight: '600', fontsize: '20px', marginBottom: '1rem'}}>Nossos projetos</span>
                 <h1>Veja nossos <span style={{color: '#4CAF4F', fontsize: '54px'}}>Projetos</span></h1>
                 <p>There are many variations of passages 
                     of Lorem Ipsum available, but the <br/> majority have
                     suffered in some form, by injected humour
                </p>
                 <Image src={Icon} alt="svg"/>     
            </div>
             <Card />
        </RootLayout>
    )

}