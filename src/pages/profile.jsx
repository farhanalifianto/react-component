import { useLogin } from "../hooks/useLogin"
const Profile = () => {
    const username = useLogin()
    return(
        <div>
            <h1>profile</h1>
            {username}
        </div>
    )
}

export default Profile