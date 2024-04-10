import styles from './Products.module.css'

const Products = ({props}) => {
    return (
        <>
        <div className={styles.card}>
          <img className={styles.imageProduct} src={props.image} alt={props.image}/>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.price}>{props.price} SEK</p>
        </div>

        </>
    )
}

export default Products
