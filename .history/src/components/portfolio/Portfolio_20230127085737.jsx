import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.webp";

const data = [
    {
        id:1,
        image:IMG1,
        title:"Crypto Currency Dashboard & Financial Visualization",
        github : "https://github.com",
        demo : "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
    },
    {
        id:2,
        image:IMG2,
        title:"Crypto Currency Dashboard & Financial Visualization",
        github : "https://github.com",
        demo : "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
    }
    {
        id:3,
        image:IMG3,
        title:"Crypto Currency Dashboard & Financial Visualization",
        github : "https://github.com",
        demo : "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
    }
]
export default function Portfolio(){
    return(
        <section id="portfolio">
            <h5>My Recent work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target="_blank">Github</a>
                    <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target="_blank">Github</a>
                    <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target="_blank">Github</a>
                    <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target="_blank">Github</a>
                    <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target="_blank">Github</a>
                    <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}