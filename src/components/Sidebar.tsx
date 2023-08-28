import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Button } from "primereact/button";
import { logout } from "../state/authSlice";

export default function Sidebar() {
    const user = useSelector((state: RootState) => state.auth.user)
    const dispatch = useDispatch()
    return (
        <>
            <div id="sidebar">
                <h1>online</h1>
                <h2>Hi {user?.username}</h2>
                <Button className="small mt-auto" link onClick={() => dispatch(logout())}>logout</Button>
            </div>
        </>
    );
}