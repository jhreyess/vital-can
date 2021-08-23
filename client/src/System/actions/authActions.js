export const loginUser = async userData => {
    let response = await fetch('/api/users/login', {
                                    method: 'POST',   
                                    headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(userData)
                                    }
                                );
    let result = await response.json();
    return result;
}