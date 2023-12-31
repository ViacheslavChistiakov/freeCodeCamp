/*DESCRIPTION⚡

There are List and ToDo components in the code editor. When rendering each List from the ToDo component, pass in a tasks property assigned to an array of to-do tasks, for example ["walk dog", "workout"]. Then access this tasks array in the List component, showing its value within the p element. Use join(", ") to display the props.tasks array in the p element as a comma-separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.

/*SOLUTION🔥 */

const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* Change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Change code below this line */ }
          <List tasks ={["walk dog", "workout"]} />
          <h2>Tomorrow</h2>
          <List tasks ={["walk dog", "workout", "read"]}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };