import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  
  deleteProject(id) {
  	console.log(id);
  	this.props.onDelete(id);
  }
  render() {

  	let projectItems;
  	if(this.props.projects){
  		projectItems = this.props.projects.map(project => {
  		 // console.log(project);
  		 return(
  		 	<ProjectItem key={project.id} project={project} onDelete={this.deleteProject.bind(this)}/>
  		 	);
  	});
  }
    return (
      <div className="Projects">
       My Projects!
       {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
	projects: PropTypes.array,
	onDelete: PropTypes.func
}

export default Projects;
