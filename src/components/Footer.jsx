import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <h3>Sobre Don Bosco</h3>
                    <ul>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#galeria">Galería</a></li>
                        <li><a href="#catalogo">Catálogo</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h3>Síguenos en</h3>
                    <a href="https://www.facebook.com/DonBoscoRestaurante" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/rest_donbosco" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=51920451236&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="social-icon" />
                    </a>
                </div>

                <div className="footer-map">
                    <h3>Ubicación</h3>
                    <iframe
                        title="Ubicación del restaurante"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.250460646238!2d-77.05187802430206!3d-12.080843242543762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85798a839b7%3A0x8bde1e62c098f2ff!2sAv.%20Cuba%201265%2C%20Jes%C3%BAs%20Mar%C3%ADa%2015072!5e0!3m2!1ses-419!2spe!4v1709939223471"
                        width="100%"
                        height="200"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

        
        </footer>
    );
};

export default Footer;
