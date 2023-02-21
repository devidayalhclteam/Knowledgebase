
import {Box, Grid, Typography, Button} from '@material-ui/core';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red, deepOrange, deepPurple } from '@mui/material/colors';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


export default function Forum() {
  return (
    <div className="forumHome">
      <Grid item style={{ marginBottom: '30px'}}>
        <Typography variant="body2">
        <Button startIcon={<AccessTimeIcon  />} color="primary" variant="contained" style={{ textTransform: 'none', marginRight: '20px',backgroundColor:'#1682fd', borderRadius: '30px', boxShadow: 'none' }}>
            New
          </Button>
          <Button startIcon={<ArrowOutwardIcon />} variant="contained" style={{ textTransform: 'none', marginRight: '20px', borderRadius: '30px', backgroundColor: '#eaeaea', boxShadow: 'none' }} disabled>
            Top
          </Button>
          <Button startIcon={<TaskAltIcon />} variant="contained" style={{ textTransform: 'none', marginRight: '20px', borderRadius: '30px', backgroundColor: '#eaeaea', boxShadow: 'none' }} disabled>
            Closed
          </Button>
        </Typography>
      </Grid>
      <Card sx={{ maxWidth: '100%' , marginTop: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ranjeet"
        subheader="5 min ago"
      />
      <CardContent>
      <Typography style={{ fontWeight: 'bold', marginBottom: '8px', marginTop: '-5px'}}>
          How to use hearing aid from Helax?
        </Typography>
        <Typography variant="body2">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        <Box style={{display:'flex', justifyContent:'flex-end', fontWeight:'12px', marginRight: '10px'}}>
        <IconButton aria-label="comment" disabled style={{padding: '0px 8px', height: '22px'}}>
        <VisibilityIcon/> 
            </IconButton>
            <Box component="span" style={{fontSize: '14px',height:'24px'}}>120</Box>

            <IconButton aria-label="comment" disabled style={{padding: '0px 8px', height: '22px'}}>
            <ChatBubbleOutlineIcon/> 
            </IconButton> <Box component="span" style={{fontSize: '14px',height:'24px'}}>12</Box>
            </Box>
      </CardContent>
      </Card>
      <Card sx={{ maxWidth: '100%' , marginTop: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: deepOrange[500] }}>H</Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Harshad"
        subheader="25 min ago"
      /> 
      <CardContent>
      <Typography style={{ fontWeight: 'bold', marginBottom: '8px', marginTop: '-5px'}}>
          What is a difference between transparent and open glass?
        </Typography>
        <Typography variant="body2">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
       <Box style={{display:'flex', justifyContent:'flex-end', fontWeight:'12px', marginRight: '20px', marginBottom:'20px'}}>
        <IconButton aria-label="comment" disabled style={{padding: '0px 8px', height: '22px'}}>
        <VisibilityIcon/> 
            </IconButton>
            <Box component="span" style={{fontSize: '14px',height:'24px'}}>120</Box>

            <IconButton aria-label="comment" disabled style={{padding: '0px 8px', height: '22px'}}>
            <ChatBubbleOutlineIcon/> 
            </IconButton> <Box component="span" style={{fontSize: '14px',height:'24px'}}>12</Box>
            </Box>
      
 
      </Card>
      <Card sx={{ maxWidth: '100%' , marginTop: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: deepPurple[500] }}>AK</Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Abhishek Kumar"
        subheader="2 days ago"
      /> 
      <CardContent>
      <Typography style={{ fontWeight: 'bold', marginBottom: '8px', marginTop: '-5px'}}>
          What is a difference between transparent and open glass?222
        </Typography>
        <Typography variant="body2">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        <Box style={{display:'flex', justifyContent:'flex-end', fontWeight:'12px', marginRight: '20px'}}>
        <IconButton aria-label="comment" disabled style={{padding: '0px 8px', height: '22px'}}>
        <VisibilityIcon/> 
            </IconButton>
            <Box component="span" style={{fontSize: '14px',height:'24px'}}>120</Box>

            <IconButton aria-label="comment" disabled style={{padding: '0px 8px', height: '22px'}}>
            <ChatBubbleOutlineIcon/> 
            </IconButton> <Box component="span" style={{fontSize: '14px',height:'24px'}}>12</Box>
            </Box>
      </CardContent>
      </Card>
      <Card sx={{ maxWidth: '100%' , marginTop: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: deepPurple[500] }}>AK</Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Abhishek Kumar"
        subheader="2 days ago"
      /> 
      <CardContent>
      <Typography style={{ fontWeight: 'bold', marginBottom: '8px', marginTop: '-5px'}}>
          What is a difference between transparent and open glass?1111
        </Typography>
        <Typography variant="body2">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        <Box style={{display:'flex', justifyContent:'flex-end', fontWeight:'12px', marginRight: '20px'}}>
        <IconButton aria-label="comment" disabled style={{padding: '0px 8px', height: '22px'}}>
        <VisibilityIcon/> 
            </IconButton>
            <Box component="span" style={{fontSize: '14px',height:'24px'}}>120</Box>

            <IconButton aria-label="comment" disabled style={{padding: '0px 8px', height: '22px'}}>
            <ChatBubbleOutlineIcon/> 
            </IconButton> <Box component="span" style={{fontSize: '14px',height:'24px'}}>12</Box>
            </Box>
      </CardContent>
      </Card>
      <Box style={{display:'flex', justifyContent:'center', fontWeight:'12px', marginRight: '20px'}}>
      <Button variant="outlined" style={{textTransform: 'none', fontWeight: 'bold', border: '1px #111 solid', borderRadius:'0px',padding:'5px 70px', marginTop:'20px', }}>
      Load more
    </Button>
    </Box>
    </div>
  )
}
