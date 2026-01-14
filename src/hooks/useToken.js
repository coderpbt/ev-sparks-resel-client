import { useEffect, useState } from "react";

const useToken = (email) => {
    const [token, setToken] = useState('');
    
    useEffect(() => {
        if (email) {
            console.log('Fetching token for:', email);
            
            fetch(`https://reseller-ev.vercel.app/jwt?email=${email}`)
                .then(res => {
                    console.log('JWT Response status:', res.status);
                    
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    
                    return res.json();
                })
                .then(data => {
                    console.log('JWT Response data:', data);
                    
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);
                        console.log('Token saved to localStorage');
                    } else {
                        console.error('No accessToken in response:', data);
                    }
                })
                .catch(error => {
                    console.error('Token fetch error:', error);
                    // You might want to show a toast notification here
                });
        }
    }, [email]);
    
    return [token];
}

export default useToken;