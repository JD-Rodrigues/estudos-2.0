import Image from "next/image"
import styles from 'src/components/card/styles.module.css'

const Card = ({image, title, price}) => {
  return(
    <section className={styles.card}>
      
        <Image 
          src={image}
          width={100}
          height={100}
          alt="Imagem do item"
        />
      
      
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>{price}</p>
    </section>
  )
}

export default Card