import Footer from './Control/Layout/Footer';
import Navbar from './Control/Layout/Navbar';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';
export const ControlApp = () => {
  return (
    <>
      <AppTheme>
        <Navbar/>
        <AppRouter />
        <Footer/>
      </AppTheme>
    </>
  );
};
