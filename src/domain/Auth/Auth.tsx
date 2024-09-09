import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import bgImage from '../../assets/auth_background.avif';

export default function Auth() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Outlet />
    </Container>
  );
}
