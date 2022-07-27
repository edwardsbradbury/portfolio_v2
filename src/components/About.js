/** @jsxImportSource @emotion/react */

const aboutStyles = {
  // paddingTop: '10vh'
  marginTop: '10vh',
  // maxWidth: '50vw',
  // alignSelf: 'center'
}

function About() {
  return (
    <div id='about' css={aboutStyles}>
      <h2>About me</h2>
      <p>Currently a full-stack software engineer, possessing professional experience of coding UIs in React (hooks-based), using Redux for global state management and consuming APIs written in ASP.NET for CRUD operations on SQL database tables. The products I work on are used by law-enforcement agencies in various countries.</p>
      <p>During my degree (first class from Goldsmiths, University of London), I developed several full-stack JavaScipt applications. These consisted of RESTful APIs written in Node, with Express middlewares (for route handling and data validation/sanitization), Passport middleware (for user authentication and session management) and either MongoDB or MySQL for databases. User Interfaces for these were coded using EJS templates, Vue (with Vuex for state management) or React (with Redux for state management). These projects all scored highly: evidence available on request.</p>
      <p>Besides this, throughout my degree I also excelled at Object Oriented Programming in Java (Standard Edition + Swing GUIs) and Python (Tensorflow for AI; Pandas and Matplotlib for data science). I would relish opportunities to further develop those skills and to learn new skills and technologies.</p>
      <p>My hobbies and interests include riding my motorbike, kayaking, long rambles to explore the countryside and cycling.</p>
    </div>
  )
}

export default About;