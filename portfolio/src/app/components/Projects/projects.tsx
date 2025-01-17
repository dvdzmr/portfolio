'use client';

import React from 'react';
import { Box, Typography, Grid, Card } from '@mui/material';
import { projects } from '@/app/constants/constants';

export default function Projects() {
  return (
    <Box id="projects" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  height: 300,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 2,
                  cursor: 'pointer',
                  boxShadow: 3,
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: '100%',
                    backgroundImage: `url(${project.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </Box>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
