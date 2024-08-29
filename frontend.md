## React Assignment

1. How can you implement shared functionality across a component tree?
   There are a few ways we can implement shared functionality across a component tree.

- Lifting up state: we move the state to closest common ancestor and pass it down as props to child components.
- Context API: we can crete global state and make it available to any component with out passing props at every level. It solved prop drilling problem.
- Higher Order components: A higher-order component is a function that takes a component and returns a new component with enhanced functionality. We can create a function that wraps the original and injects logic to add shared functionality.

2. Why is the `useState` hook appropriate for handling state in a complex component?
   useState is built-in hook that manages state and eliminates need for external management libraries.
   It is easy to implement and allows flexibility and ability to handle state updates on every component.
   For complex component i think using context api or a state management library like redux is a better approach.

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
