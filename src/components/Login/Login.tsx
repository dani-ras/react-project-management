import { Button } from "primereact/button";
import { Message } from "primereact/message";
import { ProgressSpinner } from "primereact/progressspinner";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "../../state/store";
import { users } from "../../data/users.json"
import { login } from "../../state/authSlice";

export function Login() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassowrd] = useState('');
    const [failedAuth, setFailedAuth] = useState(false)
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    function tryAuthenticate() {
        const user = users.find(u => (u.username === username && u.password === password));
        if (!user) {
            setFailedAuth(true);
            setTimeout(() => setFailedAuth(false), 5000);
            return;
        }
        dispatch(login(user));
        setUsername('');
        setPassowrd('');
        sessionStorage.setItem('username', user.username)
    }

    useEffect(() => {
        const usernameFromSession = sessionStorage.getItem('username')
        const user = users.find(u => u.username === usernameFromSession);
        if (!user) return setIsLoading(false);
        dispatch(login(user));
        setIsLoading(false);
    }, [])

    if (isLoading) return <ProgressSpinner />
    return (isAuthenticated ? <Outlet /> :
        <>
            <div className="flex align-items-center justify-content-center m-auto">
                <div className="surface-card p-4 shadow-2 border-round w-full ">
                    <div className="text-center mb-5">
                        <div className="text-900 text-3xl font-medium mb-3">Welcome</div>
                    </div>

                    <Message text={"Wrong Credentials"} severity="error" style={{ visibility: !failedAuth ? 'hidden' : 'unset' }} className="mb-2" />

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        tryAuthenticate();
                    }}>
                        <label htmlFor="name" className="block text-900 font-medium mb-2">UserName</label>
                        <InputText id="name" type="text" placeholder="UserName" className="w-full mb-3" onChange={(e) => setUsername(e.target.value)} />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                        <InputText id="password" type="password" placeholder="Password" className="w-full mb-3" onChange={(e) => { setPassowrd(e.target.value) }} />

                        <Button label="Sign In" icon="pi pi-user" className="w-full" disabled={!username || !password} />
                    </form>
                </div>
            </div>
        </>
    )
}