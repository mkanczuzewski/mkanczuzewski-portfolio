import React from 'react';

function Portfolio() {

    return (
        <div className="group">
            <h1>Portfolio</h1>
            <h3>Group Projects</h3>
            <div className="container">
                <div className="card">
                    <img
                        className="card-img-top"
                        src='img/listings-page.jpg'
                        alt="Project Image"
                    />
                    <div className="card-body" >
                        <h3 className="card-title">Name: It's Amiibo, Mario!</h3>
                        <p className="card-text">Description: This was the first five team member project completed during the boot camp. It features two API searches, local storage, and materialize CSS usage.</p>
                        <a href='https://alex-soucy.github.io/its-amiibo-mario/' className="card-link">Link To Project </a>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src='img/Project2-SS.jpg'
                        alt="Project Image"
                    />
                    <div className="card-body">
                        <h3 className="card-title">Fantasy Stock Picks</h3>
                        <p className="card-text">Description: The project for Fantasy Stock Picks was the first time the class put together a MVC style project. It featured a number of NPM, Express, and mySQL technologies.</p>
                        <a href='https://marks-fantasy-stock-picks.herokuapp.com' className="card-link">Link To Project </a>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src='img/Project3.jpg'
                        alt="Project Image"
                    />
                    <div className="card-body">
                        <h3 className="card-title">Project 3 Placeholder</h3>
                        <p className="card-text">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <a href='https://www.google.com' className="card-link">Link To Project </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
// export default function Card(props) {
//   const cardStyle = {
//     width: '18rem',
//   };

//   return (
//     <div className="container">
//       <div className="card" style={cardStyle}>
//         <img
//           className="card-img-top"
//           src={props.image}
//           alt="Project Image"
//         />
//         <div className="card-body">
//           <h3 className="card-title">Name: {props.name}</h3>
//           <p className="card-text">Description: {props.description}</p>
//           <a href={props.url} className="card-link">URL To Project </a>
//         </div>
//       </div>
//     </div>
//   );
// }

