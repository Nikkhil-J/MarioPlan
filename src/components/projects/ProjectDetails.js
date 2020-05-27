import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi voluptatibus ea commodi, in atque odio modi nemo, enim minus quibusdam consequatur pariatur cumque soluta voluptatum, officiis velit ullam adipisci.
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By the net Ninja</div>
                    <div>2nd September , 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
