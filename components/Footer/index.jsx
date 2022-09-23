import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.footerVector}/>
      <div className={styles.footerContent}>
        <div className={styles.footerAbout}>
        <h2>Funiro.</h2>
        <text className={styles.text}>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</text>
        <div className={styles.footerDescription}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.974 18.5413C13.0898 17.0976 17.9167 13.3048 17.9167 8.74992C17.9167 4.37766 14.3723 0.833252 10 0.833252C5.62775 0.833252 2.08333 4.37766 2.08333 8.74992C2.08333 13.3048 6.91025 17.0976 9.02596 18.5413C9.61759 18.945 10.3824 18.945 10.974 18.5413ZM10 11.2499C11.3807 11.2499 12.5 10.1306 12.5 8.74992C12.5 7.36921 11.3807 6.24992 10 6.24992C8.61929 6.24992 7.5 7.36921 7.5 8.74992C7.5 10.1306 8.61929 11.2499 10 11.2499Z" fill="#898989"/>
          </svg>
          <text>Sawojajar Malang, Indonesia</text>
        </div>
          <div className={styles.footerDescription}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4307 13.0668L12.9152 13.8401C12.8123 13.9944 12.6762 14.1261 12.4969 14.1735C11.9095 14.3287 10.3499 14.3988 7.9755 12.0244C5.60111 9.65004 5.67119 8.09046 5.82641 7.50302C5.8738 7.32368 6.00549 7.1876 6.15983 7.0847L6.93308 6.5692C7.50878 6.1854 7.66435 5.40757 7.28055 4.83187L5.82014 2.64126C5.48514 2.13876 4.83933 1.94678 4.28423 2.18468L3.62544 2.46702C3.12498 2.6815 2.71674 3.06643 2.47324 3.55343C2.2698 3.96031 2.11213 4.38877 2.09076 4.84317C2.02344 6.27515 2.33743 9.80312 6.26713 13.7328C10.1968 17.6625 13.7248 17.9765 15.1568 17.9092C15.6111 17.8878 16.0396 17.7301 16.4465 17.5267C16.9335 17.2832 17.3184 16.8749 17.5329 16.3745L17.8152 15.7157C18.0531 15.1606 17.8612 14.5148 17.3587 14.1798L15.168 12.7194C14.5923 12.3356 13.8145 12.4911 13.4307 13.0668Z" fill="#898989"/>
</svg>
            <text>+6289 456 3455</text>
          </div>
          <span className={styles.footerDescription}>www.funriro.com</span>
      </div>
      <div className={styles.footerMenu}>
        <h2>Menu</h2>
        <span className={styles.footerDescription}>www.funriro.com</span>
        <span className={styles.footerDescription}>www.funriro.com</span>
        <span className={styles.footerDescription}>www.funriro.com</span>
        <span className={styles.footerDescription}>www.funriro.com</span>
        <span className={styles.footerDescription}>www.funriro.com</span>

      </div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      </div>

    </footer>
  )
}

export default Footer