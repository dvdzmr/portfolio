'use client';

import React from 'react';
import { ThemeProvider, Box } from '@mui/material';
import Header from '@/app/components/Header/header';
import Projects from '@/app/components/Projects/projects';
import { darkTheme } from './theme/theme';
import Contact from './components/Contact/contact';

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      {/* TODO: add box to its own styling file */}
      <Box
        sx={{
          position: 'relative',
          height: '60vh', // TODO: change this depending on screen size: xs: 40vh, sm: 50, md: 50, lg: 60vh
          backgroundImage: 'url(/david_header.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <Box width={{xs: 1, sm: 0.9, md: 0.8, lg: 0.7}} m="auto">
        {/* <Projects /> */}
        <Contact />
      </Box>

    </ThemeProvider>
  );
}
