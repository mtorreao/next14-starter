import Links from './links/links';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.logo}>Logo</h3>
            <Links />
        </div>
    )
}

export default Navbar