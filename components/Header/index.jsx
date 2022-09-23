import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headertext}>
        <img src={'/img/logo.svg'} className='logo' />
        <div className={styles.textHeader}>About US</div>
      </div>

      <div className={styles.search}>
        <img className={styles.searchIcon} src="/img/Search.svg"/>
          <input type="text" placeholder="Search for minimalist chair"/>
      </div>

      <img className={styles.busket} src="/img/busket.svg"/>
    </header>
  )
}

export default Header