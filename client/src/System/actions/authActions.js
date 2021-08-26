class Auth{
    constructor(){
        this.authenticated = false;
        this.userRole = "";
    }

    loginUser = async userData => {
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
        if(response.status === 200 && result.success === true){
            this.authenticated = true;
            this.userRole = result.role;
        }
        return result;
    }

    isAuthenticated(){
       return this.authenticated;
    }

    role(){
        return this.userRole;
    }
}

export default new Auth();