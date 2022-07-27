/** @jsxImportSource @emotion/react */

import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const containerStyles = {
  paddingTop: '10vh',
  paddingBottom: '5vh',
  minHeight: '5vh',
  maxHeight: '10vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)'
}

const linkStyles = {
  display: 'inline-block',
  padding: '0 0.5vw 0',
  textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#ffffff'
    }
};

function Navbar() {
  return (
    <Container css={containerStyles}>
      <h1>Ed Bradbury</h1>
      <div id='nav-links'>
        <Link href='' css={linkStyles}>About</Link> |
        <Link href='' css={linkStyles}>Projects</Link> |
        <Link href='mailto:edwardsbradbury@gmail.com' css={linkStyles}>Email me</Link> |
        <Link title='Download my CV as a PDF' href={`${process.env.PUBLIC_URL}/assets/CV.pdf`} download css={linkStyles} target='_blank' rel='noopener'>CV</Link> |
        <Link title='LinkedIn profile' href='https://www.linkedin.com/in/edwardsbradbury/' css={linkStyles} target='_blank' rel='noopener'>
          <LinkedInIcon />
        </Link> |
        <Link title='GitHub repositories' href='https://github.com/edwardsbradbury/' css={linkStyles} target='_blank' rel='noopener'>
          <GitHubIcon />
        </Link>
      </div>
    </Container>
  )
}

export default Navbar;