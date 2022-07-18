import styles from "./styles.module.css"

export default function Avatar({ alt, src, text, widthText }) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} alt={alt} src={src} title={alt} />
      {widthText && <strong>{text || alt}</strong>}
    </div>
  )
}
