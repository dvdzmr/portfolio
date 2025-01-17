'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/mknllkkw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmissionStatus('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('Oops, something went wrong. Please try again later.');
      }
    } catch (error) {
      setSubmissionStatus('Error submitting form. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <Box id="contact" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>

      <Grid container spacing={4} justifyContent="center" pt={4}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 9}}>
          <Card sx={{ padding: 3, boxShadow: 3 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
              />
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                margin="normal"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            {submissionStatus && (
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                {submissionStatus}
              </Typography>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
