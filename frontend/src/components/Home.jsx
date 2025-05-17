//Home UI for the BlogAPP (using Cards)
import * as React from 'react';
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
       spacing={3}
       sx={{ padding: 10 }}
       justifyContent="center"
       alignItems="center"
    >
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
             <Card
                sx={{
                  maxWidth: 400,
                  transition: 'transform 0.5s, box-shadow 0.5s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >

               <CardActionArea>            
                <CardMedia
                  component="img"
                  height="180"
                  image={blog.img_url}
                  alt="Blog Image"
                  sx={{ 
                    width: '93.5%',
                    padding: 1.5
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" color="text.secondary" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="h6" >
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