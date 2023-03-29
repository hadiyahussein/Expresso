function getYear() {
    return new Date().getFullYear();
}

const Footer = () => {
    return (
        <div className='footer'>
            <p>Copyright © {getYear()} Hadiya</p>
        </div>
    )
}

export default Footer;