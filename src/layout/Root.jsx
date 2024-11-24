
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { useTheme } from '../providers/ThemeProvider';

const Root = () => {
  const { theme } = useTheme();
  return (
    <div className="max-w-7xl mx-auto text-base-content" data-theme={theme}>
      <Navbar />
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root