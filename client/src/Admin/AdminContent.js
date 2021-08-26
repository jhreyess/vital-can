const AdminContent = (props) => {

    const switchContent = (url) => {
        switch(url){
            case 'Dashboard':
                return(
                    <div>Hello admin!</div>
                );
            case 'Users':
                return(
                    <div>Users Listed here!</div>
                );
            default: return null;
        }
    }

    return(
        <div>
            Hello Admin1
            {switchContent(props.url)}
        </div>
    );
}

export default AdminContent;