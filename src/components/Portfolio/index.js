import React, { Component } from "react";

class Portfolio extends Component {
    render() {
        return (
            <div className="group">
                <h1>Portfolio</h1>
                <h3>Group Projects</h3>
                <div className="container">
                    <div className="card">
                        <img
                            className="card-img-top"
                            src='img/listings-page.jpg'
                            alt="Project Website"
                        />
                        <div className="card-body" >
                            <h3 className="card-title">Name: It's Amiibo, Mario!</h3>
                            <p className="card-text">Description: This was the first five team member project completed during the boot camp. It features two API searches, local storage, and materialize CSS usage.</p>
                            <div className="card-link"><a href='https://alex-soucy.github.io/its-amiibo-mario' className='card-link'>Website</a></div>
                            <div className="card-link"><a href='https://github.com/mkanczuzewski/its-amiibo-mario' className='card-link'>GitHub</a></div>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            className="card-img-top"
                            src='img/Project2-SS.jpg'
                            alt="Project Website"
                        />
                        <div className="card-body">
                            <h3 className="card-title">Fantasy Stock Picks</h3>
                            <p className="card-text">Description: The project for Fantasy Stock Picks was the first time the class put together a MVC style project. It featured a number of NPM, Express, and mySQL technologies.</p>
                            <div className="card-link"><a href='https://marks-fantasy-stock-picks.herokuapp.com' className="card-link">Website </a></div>
                            <div className="card-link"><a href='https://github.com/mkanczuzewski/Fantasy-Stock-Picks' className="card-link">GitHub</a></div>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            className="card-img-top"
                            src='img/project3.jpg'
                            alt="Project Website"
                        />
                        <div className="card-body">
                            <h3 className="card-title">Coupon Magic</h3>
                            <p className="card-text">Description: This is the final project for the course and featured a full MERN application. I built the Login, Portfolio, and Coupon Display screens and JSX logic.</p>
                            <div className="card-link"><a href='https://marks-coupon-magic.herokuapp.com/' className='card-link'>Website</a></div>
                            <div className="card-link"><a href='https://github.com/mkanczuzewski/coupon-magic' className='card-link'>GitHub</a></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3>Individual Challenges</h3>
                </div>
                <div className="container">
                    <div className="card">
                        <img
                            className="card-img-top"
                            src='img/PWA-SS.jpg'
                            alt="Project Website"
                        />
                        <div className="card-body" >
                            <h3 className="card-title">Name: Progressive Web Application</h3>
                            <p className="card-text">Description: This PWA features offline functionality for a budget tracker application.</p>
                            <div className="card-link"><a href='https://budget-tracker-feat-offline.herokuapp.com' className='card-link'>Website</a></div>
                            <div className="card-link"><a href='https://github.com/mkanczuzewski/Budget-Tracker-Feat-Offline' className='card-link'>GitHub</a></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="card">
                            <img
                                className="card-img-top"
                                src='img/NoSQL-SS.jpg'
                                alt="Project Website"
                            />
                            <div className="card-body" >
                                <h3 className="card-title">Name: NoSQL Social Network API</h3>
                                <p className="card-text">Description: In this challenge we explore the usage of MongoDB as well as Express.js for routing and the Mongoose ODM in a ficticious API for a Social Network Site.</p>
                                <div className="card-link"><a href='https://watch.screencastify.com/v/xoYZVNdmKxn0df6s3EbU' className='card-link'>Video Walkthrough pt1</a></div>
                                <div className="card-link"><a href='https://watch.screencastify.com/v/qEUYQbkeQybbKMhKJD3G' className='card-link'>Video Walkthrough pt2</a></div>
                                <div className="card-link"><a href='https://github.com/mkanczuzewski/social-network-feat-NoSQL' className='card-link'>GitHub</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="card">
                            <img
                                className="card-img-top"
                                src='img/techblog-SS.jpg'
                                alt="Project Website"
                            />
                            <div className="card-body" >
                                <h3 className="card-title">Name: Model-View-Controller</h3>
                                <p className="card-text">Description: We feature the use of the MVC paradigm architecture using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.</p>
                                <div className="card-link"><a href='https://tech-blog-feat-mvc.herokuapp.com/' className='card-link'>Website</a></div>
                                <div className="card-link"><a href='https://github.com/mkanczuzewski/Tech-Blog-Featuring-MVC' className='card-link'>GitHub</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
