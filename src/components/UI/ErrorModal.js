import Card from "./Card";
import Button from './Button';
import reactDom from "react-dom";
import styles from './ErrorModal.module.css'
import React from "react";

const Backdrop = (props) =>{
    return <div className={styles.backdrop} onClick={props.onModalClose} />;
}

const ModalOverlay =(props) =>{
    return(
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onModalClose}>Okay</Button>
            </footer>
        </Card>
    );
}


const ErrorModal = (props) =>{
    return (
        <React.Fragment>
            {reactDom.createPortal(
                <Backdrop onModalClose={props.onModalClose} />, 
                document.getElementById('backdrop-root')
            )}
            {reactDom.createPortal(
                <ModalOverlay 
                    title={props.title}
                    message={props.message}
                    onModalClose={props.onModalClose} 
                />, 
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
          
    )
}

export default ErrorModal;