const User = ({u}) => {
    return (
        <>
            
                <h4>Name = {u.name}</h4>
                <h4>UserName: {u.username}</h4>
                <h4>Email : {u.email}</h4>
            
        </>
    );
}

export default User;