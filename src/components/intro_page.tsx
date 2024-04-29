// create an awesome introduction page
// it's bio about Jai Prakash
// it should have a profile picture of Jai Prakash
// it should have a bio about Jai Prakash
// it should have a list of skills Jai Prakash has
// Jai Prakash is a full stack web developer
// Jai Prakash is working at Gramener
// He likes to build apps using Python, JavaScript
// He like to build API's using Flask, Django
// He likes to build frontend using React, HTML, CSS
// He likes to build backend using Node, Express
// He likes to build databases using SQL, MongoDB, Postgres
// He is currently working on LLM Apps
// He made a ton of PoC's
// Add projects at the bottom as well
// Each project should have a title and a description
// Each project should have a link to the project
// Each project should have a link to the github repo
// Each project should have a link to the live site
// Each should highlight on hover
// Each should have a shadow
// Project should be in a grid
// for the smaller screens it should be in a column
// for the larger screens it should be in a row

// create an intro page component with above features
const IntroPage = () => {
    return (
        <div className="flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/4888907?v=4" alt="Jai Prakash" className="rounded-full h-40 w-40 mt-4" />
            <div className="mt-4">
                <p>I'm working as a full stack web developer at Gramener with 6+ years of experience</p>
                <p>He likes to build apps using Python, JavaScript</p>
                <p>He like to build API's using Flask, Django</p>
                <p>He likes to build frontend using React, HTML, CSS</p>
                <p>He likes to build backend using Node, Express</p>
                <p>He likes to build databases using SQL, MongoDB, Postgres</p>
                <p>He is currently working on LLM Apps</p>
                <p>He made a ton of PoC's</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 shadow-lg hover:shadow-xl">
                    <h2>Project 1</h2>
                    <p>Project 1 description</p>
                    <a href="#">Live</a>
                    <a href="#">Github</a>
                </div>
                <div className="p-4 shadow-lg hover:shadow-xl">
                    <h2>Project 2</h2>
                    <p>Project 2 description</p>
                    <a href="#">Live</a>
                    <a href="#">Github</a>
                </div>
                <div className="p-4 shadow-lg hover:shadow-xl">
                    <h2>Project 3</h2>
                    <p>Project 3 description</p>
                    <a href="#">Live</a>
                    <a href="#">Github</a>
                </div>
                <div className="p-4 shadow-lg hover:shadow-xl">
                    <h2>Project 4</h2>
                    <p>Project 4 description</p>
                    <a href="#">Live</a>
                    <a href="#">Github</a>
                </div>
            </div>
        </div>
    );
}




export default IntroPage;
