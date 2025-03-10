import './defaultLayout.scss';
import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import { Outlet } from 'react-router-dom';

const DefaultLayout: React.FC = () => {
    return (
        <div className="main-layout">
            <Header />
            <div className="main-layout__content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;