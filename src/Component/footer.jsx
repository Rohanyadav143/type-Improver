import styles from "./footer.module.css";

function Footer(){
    return(
        <div className={`container-fluid ${styles.mainBox}`}>
            <div className={`col-md-8 col-sm-10 offset-md-2 offset-sm-1 ${styles.navbarMainDiv}`}>Type-Improver © 2025 Improve Your Typing. Crafted with ❤️ for better speed & accuracy.</div>
        </div>
    );
}

export default Footer;