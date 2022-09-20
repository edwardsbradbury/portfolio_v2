import Project from './Project';

const dfuzeNet = {
  name: 'Dfuze Net',
  description: (
    <>
      <p>A web application used by various law enforcement agencies around the globe for record keeping and data analysis, particularly concerning terrorism. Due to the sensitive subject matter and Non-Disclosure Agreements, I have no visual evidence of my work to demonstrate.</p>
      <p>Within 2-3 days of joining ISS Global, I was contributing bug fixes and improvements (largely UX related) to the React + Redux UI. Although hired as a full-stack engineer, my contributions were entirely to the front-end, due to the final push towards the major new release v22.0.0.</p>
      <p>Working on Dfuze Net introduced me to working with UI libraries Material UI and DevExtreme, which has improved my design and layout skills. My command of CSS has also substantially improved through working on Dfuze Net.</p>
      <p>Besides those aspects of my work, this was my first professional software engineering role. Therefore, it was my introduction to sprint meetings and tools such as Jira - which we used for logging tasks and progress against those - and Monday - which we used for more general progress tracking.</p>
      <p>Product website*: <a href='https://www.parsons.com/products/dfuze/' target='_blank' rel='noreferrer'>https://www.parsons.com/products/dfuze/</a> (*<b>Note</b>: all imagery on the website is of previous versions of the software than what I worked on.)</p>
    </>
  ),
  videoSrc: null,
  url: '',
  gitRepos: null
}

const homeworkHero = {
  name: 'Homework Hero',
  description: (
    <>
      <p><a href='https://www.homework-hero.co.uk/' target='_blank' rel='noreferrer'>Homework Hero</a> (live online. <b>Note</b>: Only registration, login, search and messaging work).<br/>
          <a href='https://github.com/edwardsbradbury/homework-hero-ui/' target='_blank' rel='noreferrer'>Github repo for UI</a><br/>
          <a href='https://github.com/edwardsbradbury/homework-hero-api/' target='_blank' rel='noreferrer'>Github repo for API</a></p>
      <p>The final project of my degree; the culmination of my time at university. If only I'd been familiar with Material UI or Bootstrap when I developed this... but it scored 73% overall (lecturer's feedback available on request).</p>
      <p>This project is very similar - in theme and targeting - to the LessonUp project I completed the previous year. Children struggling with their homework isn't honestly a personal cause of mine; it just happened that (during discussions with people, whilst I wasn't sure what type of projects to pursue) people suggested there were demographics who need educational assistance.</p>
      <p>I learned React and Redux Toolkit purely for this project, hoping the experience would help me to secure employment. That paid off when I was interviewed by ISS Global three days after submitting this project and they offered me my current role two weeks later (having completed their coding challenge).</p>
      <p>The backend is an API consisting of Node with Express and Passport middlewares and a MySQL database, very similar to (adapted from) the API I developed a year previously for LessonUp.</p>
    </>
  ),
  videoSrc: 'https://www.youtube.com/embed/Ox_GTEmDLWc'
}

const lessonUp = {
  name: 'LessonUp',
  description: (
    <>
      <p><a href='https://lessonup.herokuapp.com' target='_blank' rel='noreferrer'>Lesson Up</a> (live on the web. <b>Note</b>: I had to remove my Google Translate API key, so that doesn't currently work but may later be restored.)<br/>
      <a href='https://github.com/edwardsbradbury/lessonup' target='_blank' rel='noreferrer'>GitHub repo</a> (including lecturer's feedback).</p>
      <p>A web-application to enable parents in the UK whose first language isn't English to help their children with their homework.</p>
      <p>Vue.js user interface, served by a Node/Express server, hosted on a Heroku dyno. Calls a separate Node/Express REST API with MySQL database, hosted on Heroku. Also depends heavily on Google Cloud Translate API.</p>
      <p>Developed for a university assignment in my second year, project managed and almost entirely coded by myself. It scored 86% (marker's feedback is in the GitHub repo).</p>
      <p>I taught myself Vue.js (+ Vuex global state management and persistence), Passport.js (which necessitated my learning CORS configuration and secure cookies) and learned to use Axios http client to complete this project.</p>
    </>
  ),
  videoSrc: 'https://www.youtube.com/embed/vefsyGOkEsY'
}

const todo = {
  name: 'Java todo task organiser',
  description: (
    <>
      <p>A todo task organiser for desktop, written in Java JDK 15, using the Swing library for the user interface.</p>
      <p>Developed for university coursework, for my second year programming module. Working with a file chooser component and also writing output to an external file were new things I learned to complete this.</p>
      <p>This coursework scored me 98%; the marker's feedback is in the GitHub repo.</p>
      <p><a href='https://github.com/edwardsbradbury/java-todo-application' target='_blank' rel='noreferrer'>GitHub repo</a></p>
    </>
  ),
  videoSrc: 'https://www.youtube.com/embed/AlrN15X_juI'
}

const Projects = () => {
  return (
    <div id='projects'>
      <h3 style={{fontSize: '3vh'}}>Projects</h3>
      <Project data={dfuzeNet} />
      <Project data={homeworkHero} />
      <Project data={lessonUp} />
      <Project data={todo} />
    </div>
  )
}

export default Projects;