export const fetchRecords = async (url) => {
        let response = await fetch(`/api/records/${url}`);
        let result = await response.json();
        if(response.status === 200){
            return result.data;
        }else{
            return null;
        }
}

export const fetchUser = async (id) => {
    let response = await fetch(`/api/records/clients/${id}`);
    let result = await response.json();
    if(response.status === 200){
        return result.data;
    }else{
        return null;
    }
}

export const fetchPatient = async (id) => {
    let response = await fetch(`/api/records/patients/${id}`);
    let result = await response.json();
    if(response.status === 200){
        return result.data;
    }else{
        return null;
    }
}