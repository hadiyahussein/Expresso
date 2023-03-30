import starImage from '../assets/stargrey.png';

const header = () => {
    return (
        
        <header className="header-wrapper">
            <div className="starImage"><img src={starImage} alt="Grey star icon"/></div>
             <h1 className="header">Expresso, the Ultimate AI Summarization Tool.</h1>
             <p className="header">Our app can summarize any file type or length into a single sentence, so you can get the gist of articles, email, and more in just minutes.</p>
        </header>
    )
}
export default header