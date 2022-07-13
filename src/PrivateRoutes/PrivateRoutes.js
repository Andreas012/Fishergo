import { Navigate } from 'react-router-dom';
import { useAuthValue } from '../Context/AuthContext';
import Flow from '../Components/Flow/Flow';

export default function PrivateRoute({ component: Component, ...rest }) {

    const { currentUser } = useAuthValue();

    return (
        currentUser ? <Flow /> : <Navigate to='/login' />
    )
}