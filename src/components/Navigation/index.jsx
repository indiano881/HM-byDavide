import styles from './Navigation.module.css'

const Navigation = ({products}) => {

  const handleClickIconMenu = () => {
    console.log("Clicked")
  }
    return (
        <>
          <nav className={styles.navigation}>
          <input id={styles.toggle1} type="checkbox" />
            <label className={styles.mobileImg} onClick={handleClickIconMenu} for={styles.toggle1}>
              <div class={styles.top}></div>
              <div class={styles.meat}></div>
              <div class={styles.bottom}></div>
            </label>
          {/*products.map((item, index)=> <p key={index} >{item.category}</p>)*/}
          </nav>
        </>
    )
};

export default Navigation;
