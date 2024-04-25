import { useContext } from 'react';
import { AuthProvider } from '../Providers/AuthContextProvider';

const useAuth = () => {
    const all = useContext(AuthProvider)

    return all
};

export default useAuth;