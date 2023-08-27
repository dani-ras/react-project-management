import { useSelector } from "react-redux";
import { ProjectsTable } from "./ProjectsTable/ProjectsTable";
import Sidebar from "./Sidebar";
import { Dialog } from "primereact/dialog"
import { RootState, store } from "../state/store";
import { _onHide } from "../state/dialogSlice";

export function App() {
    const dialogProps = useSelector((state: RootState) => state.dialog)
    return (<>
        <Sidebar />
        <ProjectsTable />
        <Dialog {...dialogProps} onHide={onHide}></Dialog>
    </>)
}

function onHide() {
    store.dispatch(_onHide())
}
