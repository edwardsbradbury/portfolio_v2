import { useState } from 'react';
import { Card, CardHeader, CardContent, IconButton, Tooltip } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const headerStyle = {
  '&:hover': {
    cursor: 'pointer'
}}

const About = () => {

  const [open, setOpen] = useState(false);

  return (
    <div id='about' style={{marginTop: '5vh'}}>
      <h3 style={{fontSize: '3vh'}}>About me</h3>
      <Card>
        <Tooltip
          title={
            <p>{!open ? 'Show skills and technical information' : 'Hide skills and technical information'}</p>}
          placement='top-start'>
          <div>
            <CardHeader
              title={
                <>
                  <p>Currently a <b>full-stack software engineer</b> at ISS Global (a subsidiary of Parsons Corporation). Professionally, I seek problems to solve, challenges to overcome and opportunities to learn new skills, improve existing skills and generally have a sense of progress.</p>
                  <p>My hobbies and interests include riding my motorbike, climbing (bouldering), kayaking, long rambles to explore the countryside and cycling.
                    I enjoy challenges, doing things I find difficult or intimidating and a healthy dose of calculated risk.
                    My friends and family would describe me as one of the most self-disciplined, strong-willed, determined people they know.</p>
                </>}
              onClick={() => setOpen(prev => !prev)}
              sx={headerStyle}
              titleTypographyProps={{variant: 'body1'}}
              action={
                <IconButton>
                  {!open ?
                    <KeyboardArrowDownIcon />
                    :
                    <KeyboardArrowUpIcon />}
                </IconButton>
              }
            />
          </div>
        </Tooltip>
        {open &&
          <CardContent>
            <div>
              <p>I have professional experience of coding UIs in React (hooks-based), using Redux for global state management and consuming APIs developed in ASP.NET for CRUD operations on SQL database tables. The products I work on are used by law-enforcement agencies in various countries. See the Dfuze Net project below for further details about this work.</p>
              <p>Unfortunately, Parsons decided to downsize ISS Global, resulting in myself and another engineer becoming redundant.</p>
              <p>In June 2022, I graduated from Goldsmiths, University of London with a first class BSc in Business Computing & Entrepreneurship. During my degree, I developed several full-stack JavaScript applications. These consisted of RESTful APIs written in Node, with Express middlewares (for route handling and data validation/sanitization), Passport middleware (for user authentication and session management) and either MongoDB or MySQL for databases. User Interfaces were built using EJS or Pug templates, React (with Redux Toolkit for state management) or Vue (with Vuex for state management). These projects all scored highly: evidence available on request.</p>
              <p>Besides this, throughout my degree I also excelled at Object Oriented Programming in Java (Standard Edition + Swing GUIs) and Python (Tensorflow for AI; Pandas and Matplotlib for data science). I would relish opportunities to further develop those skills and to learn new skills and technologies.</p>
            </div>
          </CardContent>}
      </Card>
    </div>
  )
}

export default About;