import styles from "./footer.module.css";

function Error404(){
    return(
        <div className={`container-fluid ${styles.mainBox}`}>
            <div className={`col-md-8 col-sm-10 offset-md-2 offset-sm-1 ${styles.navbarMainDiv}`}>Error-404</div>
        </div>
    );
}

export default Error404;