// Create a project component with below requirements
// project should have a title and a description
// project should have a link to the project
// project should have a link to the github repo

// Create a project
const ProjectItem = () => {
    return (
        <div className="p-4 shadow-lg hover:shadow-xl">
            <h2>Project 1</h2>
            <p>Project 1 description</p>
            <a href="#">Live</a>
            <a href="#">Github</a>
        </div>
    );
}

export default ProjectItem;