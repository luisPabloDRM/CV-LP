import { Navigate } from 'react-router-dom';


const AuthRoute = ({user, component, location }) => {
    if (!component) throw new Error('Necesitas añadir una prop "component" con el siguiente formato <MiComoponente props />');

    if (user) return component;

    if (!user) return <Navigate to="/login" state={{prevRoute:location.pathname}} />
};

export default AuthRoute;