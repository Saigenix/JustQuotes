import styles from "./QuoteCard.module.css";
import copy from "../public/copy.png";
import downloads from "../public/downloads.png";
import share from "../public/share.png";
import place from "../public/place.gif";
import Image from "next/image";
import { useState } from "react";

export default function QuoteCard({ url, quote }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <main>
      <div className={styles.box}>
        {!loaded ? (
          <div className={styles.place}>
            <Image src={place} alt="placeholder" />
          </div>
        ) : null}
        <img
          src={url}
          alt={quote}
          className="image"
          style={!loaded ? { visibility: "hidden" } : {}}
          onLoad={() => setLoaded(true)}
        />
        <p className={styles.text}>{quote}</p>
        <div className={styles.iconBar}>
          <button
            className={styles.button}
            onClick={() => navigator.clipboard.writeText(quote)}
          >
            <Image src={copy} alt="copy" className={styles.icon} />
          </button>
          <button className={styles.button}>
            <a href={url} download="AwesomeQuote.jpg">
              <Image src={downloads} alt="download" className={styles.icon} />
            </a>
          </button>
          <button className={styles.button}>
            <a
              href={`whatsapp://send?text=${quote}`}
              rel="nofollow noreferrer"
              target="_blank"
            >
              <Image src={share} alt="share" className={styles.icon} />
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}
