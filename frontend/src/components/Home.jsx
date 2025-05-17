//Home UI for the BlogAPP (using Cards)
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, CardActionArea, Typography, Button, Grid } from '@mui/material';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3001/get")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  , []);
  
  return (
    <>
     <Grid
       container
       spacing={2}
       sx={{ padding: 15, minHeight: '100vh' }}
       justifyContent="center"
       alignItems="center"
    >
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
             <Card
                sx={{
                  maxWidth: 420,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6,
                  },
                }}
              >

               <CardActionArea>            
                <CardMedia
                 component="img"
                 height="200"
                 image={blog.img_url}
                 alt="Blog Image"
                 sx={{ 
                 padding: 1,
                 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="body2" color="text.secondary" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="h5" >
                    {blog.content}
                  </Typography>                 
                  <Button size="small" variant='contained' color='secondary' sx={{ mr: 1, mt: 3 }} >Delete</Button>
                  <Button size="small" variant='contained' color='secondary' sx={{ mt: 3 }} >Update</Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Home