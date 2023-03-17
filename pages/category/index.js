import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Category.module.css";
import { labels } from "../../constants/constant";


function Category() {
  
  
  return (
    <div className={styles.box}>
      {
        labels.map(val => {
          return(
            <div key={val} className={styles.smallBox}>
            <Link href={`/category/${val}`}>
            <a className={styles.btn}>{val}</a>
            </Link>
            </div>

          
          )
        })
      }
    </div>
  );
}

export default Category;
