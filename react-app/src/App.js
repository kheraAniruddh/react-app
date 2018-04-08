import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import  Projects from './components/Projects';
import  AddProject from './components/AddProject';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getProjects() {
    this.setState({projects:[
      {
        id: uuid.v4(),
        title: "Business Website",
        category: "Web site"

      },
      {
        id: uuid.v4(),
        title: "social App",
        category: "Mobile development"
      },
      {
        id: uuid.v4(),
        title: "Ecommerce shopping cart",
        category: "web development"
      }
    ]});
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data});
        console.log(this.state);

      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }

    });
  }
 
  componentWillMount() {
    this.getProjects();
    this.getTodos();  
  }
  
  componentDidMount() {
    this.getTodos(); 
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState(projects:projects);
  }

  handleDeleteProject(id) {
    console.log(id);
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id===id);
    projects.splice(index,1);
    this.setState(projects:projects);
  }

  render() {
    return (
      <div className="App">
       <AddProject addProject={this.handleAddProject.bind(this)}/>
       <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
       <hr/>
       <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
