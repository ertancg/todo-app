import './App.css';
import {Component} from 'react';
import CustomTab from './Components/CustomTab';

class App extends Component {

  state = {
    color: '',
    allTasks: []
  };

  createTask = (name) => {
    this.setState((prevState, prevProps) => {
      if(prevState.allTasks.length === 0){
        return {color: prevState.color, allTasks: prevState.allTasks.concat({id: 1, taskName: name, status: 0}), doneTasks: prevState.doneTasks}
      }else{
        return {color: prevState.color, allTasks: prevState.allTasks.concat({id: prevState.allTasks.at(-1).id + 1, taskName: name, status: 0}), doneTasks: prevState.doneTasks}
      }
    });
  };

  completeTask = (selectedTasks) => {
    for(const selected of selectedTasks){
      this.setState((prevState, prevProps) => {
        return {color: prevState.color, allTasks: prevState.allTasks.map((task) => {
          if(selected === task.id){
            return {id: task.id, taskName: task.taskName, status : 1}
          }else{
            return task
          }})}
      })
    }
  };

  changeColor = (color) => {
    this.setState((prevState, prevProps) => {
      return {color: color, allTasks: prevState.allTasks}
    });
  }

  render(){
    return (
      <div className="App" style={{color:this.state.color}}>
        <CustomTab color={this.state.color} allTasks={this.state.allTasks} addTaskToArray={this.createTask} completeTask={this.completeTask} changeColor={this.changeColor}/>
      </div>
    );
  }
}

export default App;
