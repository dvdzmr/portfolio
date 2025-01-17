import React, { useCallback } from 'react';
import Container from '@mui/material/Container';
import { NavContainer, NavButton, HeaderToolbar, TopBar } from './header.styling';
import { menuEntries } from '@/app/constants/constants';
import { Typography } from '@mui/material';

function Header() {
  const handleMenuClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <TopBar position="fixed">
      <Container maxWidth="xl">
        <HeaderToolbar>
          <Typography>David Zamir</Typography>
          <NavContainer>
            {menuEntries.map((entry) => (
              <NavButton key={entry} onClick={() => handleMenuClick(entry.toLowerCase())}>
                {entry}
              </NavButton>
            ))}
          </NavContainer>
        </HeaderToolbar>
      </Container>
    </TopBar>
  );
}

export default React.memo(Header);
