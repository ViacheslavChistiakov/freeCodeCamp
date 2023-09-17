/*DESCRIPTION⚡
Note: The componentWillMount Lifecycle method will be deprecated in a future version of 16.X and removed in version 17. Learn more in this article

The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. Log something to the console within componentWillMount() - you may want to have your browser console open to see the output.

/*SOLUTION🔥 */

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // Change code below this line
          console.log()
      // Change code above this line
    }
    render() {
      return <div />
    }
  };