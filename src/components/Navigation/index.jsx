import styles from './Navigation.module.css'

const Navigation = ({ categoryArray,setSelectedCategory, setProducts}) => {

  const handleClickIconMenu = () => {
    console.log("Clicked")
  }

  const handleClickCategory = (title) => {
    setSelectedCategory(title)
    setProducts(null)
    
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
          {categoryArray.map((item, index)=> <p onClick={()=>handleClickCategory(item)} key={index} className={styles.menuV} >{item}</p>)}
          </nav>
        </>
    )
};

export default Navigation;
