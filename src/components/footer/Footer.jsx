import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title"></h1>

                <span className="footer__copy">
                    &#169; Все права защищены (это не так - я не знаю что тут писать).
                </span>
            </div>
        </footer>
    )
}

export default Footer;