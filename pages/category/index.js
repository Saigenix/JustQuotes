import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Category.module.css";

function Category() {
  const labels = [
    "business",
    "change",
    "character",
    "competition",
    "conservative",
    "courage",
    "education",
    "faith",
    "family",
    "famous-quotes",
    "film",
    "freedom",
    "friendship",
    "future",
    "happiness",
    "history",
    "honor",
    "humor",
    "humorous",
    "inspirational",
    "leadership",
    "life",
    "literature",
    "love",
    "motivational",
    "nature",
    "pain",
    "philosophy",
    "politics",
    "power-quotes",
    "proverb",
    "religion",
    "science",
    "self",
    "self-help",
    "social-justice",
    "spirituality",
    "sports",
    "success",
    "technology",
    "time",
    "truth",
    "virtue",
    "war",
    "wisdom",
  ];
  return (
    <div className={styles.box}>
      {
        labels.map(val => {
          return(
            <>
            <Link href={`/category/${val}`}>
            <a className={styles.cat}>{val}</a>
            </Link>
            </>
          )
        })
      }
      
      {/* <Link href="/category/love">
        <a className={styles.cat}>Love</a>
      </Link> */}
    </div>
  );
}

export default Category;
