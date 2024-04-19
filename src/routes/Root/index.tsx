import Header from '@components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '@components/Footer';

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
