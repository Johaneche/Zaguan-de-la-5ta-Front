import { HeroSection, History, Menu, Contact } from "../components/sections";
import "../blocks/homePage.css";

function HomePage() {
    return (
        <main className="home-page">
            <HeroSection/>
            <History/> 
            <Menu/> 
            <Contact/> 
        </main>
    );
}

export default HomePage;
