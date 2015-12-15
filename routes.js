import App from './components/App.jsx';
import Index from './components/Index.jsx';
import About from './components/About.jsx';

const routes = {
    path: '',
    component: App,
    childRoutes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/about',
            component: About
        }
    ]
};

export { routes };