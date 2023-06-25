import "./Home.css";
import { View } from "react-native";
import React from "react";
import { useNavigate } from "react-router-dom";
import PagePreview from "./PagePreview"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function CourseHome() {
  const navigate = useNavigate();

  return (
    <div className="CourseHome">
      <View style={{ flex: 1, padding: 5 }}>
        <div className="TopBar">
          <h1 style={{ color: "gold" }}>X</h1>
          <h1>Change </h1>
        </div>
      </View>

      <View>
        <img src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78" alt="Macbook, bagpack and notes" style={{ maxHeight: 400, paddingBottom: '1em' }}></img>
      </View>

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PagePreview
            imageURL='https://images.unsplash.com/photo-1488646953014-85cb44e25828'
            altText="Planning to travel, Bag, field notes, camera and travel pamphlets laid out over a map"
            page = '/prevCourses'
            title="Previously Accepted Course Sequences"
            description="Take a look at the previously accepted course sequences students (Engineers) at the university of waterloo have done at universities when exchange on a particular study term"
          />
        
        </Grid>
        <Grid item xs={6}>
          <PagePreview
            imageURL='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2'
            altText="Person Searching for a course on their laptop"
            page = '/prevCourses'
            title="Search for a Course"
            description="Interested in courses students have taken at a particular university abroad ? Want to check a previously approved UW course equivalent at another institute ? Search for the course, university and your program here !"
          />
        </Grid>
      </Grid>
    </Box>

    </div>
  );
}

export default CourseHome;