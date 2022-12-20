import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Category.module.css";

function Category() {
  const labels = ['business',
  'change',
  'character',
  'competition',
  'conservative',
  'courage',
  'education',
  'faith',
  'family',
  'famous-quotes',
  'film',
  'freedom',
  'friendship',
  'future',
  'happiness',
  'history',
  'honor',
  'humor',
  'humorous',
  'inspirational',
  'leadership',
  'life',
  'literature',
  'love',
  'motivational',
  'nature',
  'pain',
  'philosophy',
  'politics',
  'power-quotes',
  'religion',
  'science',
  'self',
  'self-help',
  'social-justice',
  'spirituality',
  'sports',
  'success',
  'technology',
  'time',
  'truth',
  'war',
  'wisdom']
  
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
