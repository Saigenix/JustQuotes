import styles from './QuoteCard.module.css'
import copy from '../public/copy.png'
import downloads from '../public/downloads.png'
import share from '../public/share.png'
import Image from 'next/image'


export default function QuoteCard({url,quote}) {
    return (
        <main>
        <div className={styles.box}>
            <img src={url} alt={quote} className='image' />
            <p className={styles.text}>{quote}</p>
            <div className={styles.iconBar}>
                <button className={styles.button} onClick={() => navigator.clipboard.writeText(quote)}>
                    <Image src={copy} alt="copy" className={styles.icon} />
                </button>
                <button className={styles.button}>
                <a href={url} download="AwesomeQuote.jpg">
                    <Image src={downloads} alt="download" className={styles.icon} />
                </a>
                </button>
                <button className={styles.button}>
                <a href={`whatsapp://send?text=${quote}`}
rel="nofollow noreferrer" target="_blank" >
                    <Image src={share} alt="share" className={styles.icon} />
                    </a>
                </button>
                
            </div>

        </div>
        </main>
    )
}
