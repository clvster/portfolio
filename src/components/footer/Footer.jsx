import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title"></h1>

                <span className="footer__copy">
                    &#169; Cluster. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;