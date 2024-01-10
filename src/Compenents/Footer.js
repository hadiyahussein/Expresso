function getYear() {
    return new Date().getFullYear();
}

const Footer = () => {
    return (
        <div className='footer'>
            <p>Copyright © {getYear()} Hadiya</p>
            <p><a href="https://hadiyahussein.com/">Portfolio</a></p>
            <p><a href="https://ca.linkedin.com/in/hadiya-hussein-31b066192?original_referer=https%3A%2F%2Fwww.google.com%2F/">Linkdin</a></p>
        </div>
    )
}

export default Footer;