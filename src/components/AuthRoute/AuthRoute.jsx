import { useLocation, Navigate } from 'react-router-dom';

const AuthRoute = ({user, component, ...restProps }) => {
    const location = useLocation();

    if (!component) throw new Error('Necesitas añadir una prop "component" al componente <AuthRoute component={...} />');

    if (user) return component;

    if (!user) return <Navigate to='/login' state={{prevRoute: location.pathname}} />
};

export default AuthRoute;
