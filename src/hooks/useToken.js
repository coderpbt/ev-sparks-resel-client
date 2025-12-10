import { useEffect, useState } from "react";

const useToken = (email) => {
    const [token, setToken] = useState('');
    
    useEffect(() => {
        if (email) {
            console.log('Fetching token for:', email); // Debug log
            
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => {
                    console.log('JWT Response status:', res.status); // Debug log
                    return res.json();
                })
                .then(data => {
                    console.log('JWT Response data:', data); // Debug log
                    
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);
                        console.log('Token saved to localStorage'); // Debug log
                    }
                })
                .catch(error => {
                    console.error('Token fetch error:', error);
                });
        }
    }, [email]);
    
    return [token];
}

export default useToken;