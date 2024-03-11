import "./Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer__section" >
                <h3 >Learn More</h3>
                <a href="./contact">Contact</a>

                <a
                    href="https://www.goarmy.com/band.html"
                    target="_blank">
                    US Army Bands
                </a>
                <a>Request the Band</a>
                <a href="mailto:joseph.m.young2@gmail.com">Contact Webmaster</a>
            </div>

            <div className="footer__section" >
                <h3 >Important Links</h3>
                <Link to="termsofuse">Terms of Use
                </Link>
                <a
                    href="https://www.goarmy.com/"
                    target="_blank">
                    US Army
                </a>
                <a
                    href="https://www.usar.army.mil/"
                    target="_blank">
                    US Army Reserve
                </a>
                <a
                    href="https://www.usar.army.mil/99thRD/"
                    target="_blank">
                    99th RD
                </a>
                <a
                    href="https://www.jbmdl.jb.mil/"
                    target="_blank">
                    Fort Dix
                </a>
            </div>

            <div className="footer__section" >
                <h3 >Social Media</h3>
                <a
                    href="https://www.youtube.com/user/78thArmyBand"
                    target="_blank">
                    YouTube
                </a>
                <a
                    href="https://www.instagram.com/78tharmyband/"
                    target="_blank">
                    Instagram
                </a>
                <a
                    href="https://www.facebook.com/78thArmyBand"
                    target="_blank">
                    Facebook
                </a>
                <a
                    href="https://twitter.com/78thArmyBand?s=20"
                    target="_blank">
                    Twitter
                </a>
            </div>
        </footer>
    );
};

export default Footer;
