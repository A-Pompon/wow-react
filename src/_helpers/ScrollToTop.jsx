import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        // Scroll to top only when navigating to a new page
        if (window.scrollY > 0) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null; // Return null to avoid rendering anything in the DOM
};

export default ScrollToTop;
