import './page_styling/Home.css';
import profilePicture from './page_styling/Images/Portrait.jpg'; // Assuming you have a profile picture file in the same directory

const Home = () => {
    return (
        <div className="home-container">
            <div className="profile-picture">
                <img src={profilePicture} alt="Profile" />
            </div>
            <h1>Armeen Farange</h1>
            <h3>Full-time Software Engineer - Kirkland, WA</h3>
            <h4>Why Hell There, I'm Armeen! What I’m most passionate about learning<br></br> in a tech environment is that technology is constantly developing<br></br> and changing, and as a result, when technology improves and changes,<br></br> it allows me to learn more and gain new tools to add to my personal<br></br> toolkit. I'm enthralled by the prospect of learning new skills while<br></br> also putting my existing ones to use. Learning challenges me and keeps<br></br> me on my toes. Family, health, and soccer are just a few of my<br></br> other passions.</h4>
        </div>
    );
}

export default Home;