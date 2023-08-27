import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { projects } from "../../data/projects.json";
import { useDispatch } from "react-redux";
import { setDialogProps } from "../../state/dialogSlice";
import { ProjectDetails } from "../ProjectDetails/ProjectDetails";
import { Project } from "../../data/projects";
import { ChangeEvent, useState } from "react";
export function ProjectsTable() {
    const dispatch = useDispatch();
    const [filterValue, setFilterValue] = useState('')
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterValue(e.target.value)
        const q = e.target.value.toLowerCase();
        setFilteredProjects(projects.filter(p => p.name.toLowerCase().includes(q) || p.status.toLowerCase().includes(q)))
    }
    const renderHeader = () => {
        return (<span className=" justify-content-between" style={{ display: 'flex', alignItems: 'center' }}>
            <h2>Projects</h2>
            <span className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={filterValue} onChange={onFilterChange} placeholder="Keyword Search" />
                </span>
            </span>
        </span>
        );
    };

    return (<div id="projects-container">
        <DataTable
            onRowClick={(e) => dispatch(setDialogProps({ visible: true, header: e.data.name, children: <ProjectDetails {...(e.data as Project)} /> }))}
            rowHover
            rowClassName={() => "cursor-pointer"}
            header={renderHeader()}
            value={filteredProjects} >

            <Column field="name" header="Project Name"></Column>
            <Column field="status" header="Status"></Column>

        </DataTable>
    </div>)
}