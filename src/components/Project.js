import React, { useState } from 'react';
import { Card, CardHeader, CardContent, IconButton, Tooltip } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const headerStyle = {
  '&:hover': {
    cursor: 'pointer'
}}

const flexContainerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly'
}

const flexItemStyles = {
  flexBasis: '40%',
  flexGrow: 1,
  flexShrink: 1,
  marginLeft: '2.5%',
  marginRight: '2.5%',
}

const Project = ({data}) => {

  const [open, setOpen] = useState(false);


  return (
    <div className='project' style={{margin: '2vh 0 2vh 0'}} >
      <Card>
        <Tooltip
          title={
            <p>{`${data.name}: ${!open ? 'Show more' : 'Hide'} details`}</p>
          }
          placement='top-start'>
          <div>
            <CardHeader
              title={data.name}
              onClick={() => setOpen(prev => !prev)}
              sx={headerStyle}
              titleTypographyProps={{variant: 'h5'}}
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
            {data.videoSrc ?
              <div style={flexContainerStyles}>
                <div style={flexItemStyles}>
                  <YouTube videoSrc={data.videoSrc} />
                </div>
                <div style={flexItemStyles}>
                  {data.description}
                </div>
              </div>
              :
              <div>
                {data.description}
              </div>
            }
          </CardContent>}
      </Card>
    </div>
  )
}

const YouTube = ({videoSrc}) => {
  return (
    <iframe
      width='100%'
      height='57%'
      src={videoSrc}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen>
    </iframe>
  )
}

export default Project;