import styles from './Products.module.css'

const Products = ({props}) => {
    return (
        <>
          <img src={props.image} alt={props.image}/>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.price}>{props.price}</p>

        </>
    )
}

export default Products
