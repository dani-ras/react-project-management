import { DataTable, DataTableRowClickEvent } from "primereact/datatable";
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

    const header = <span className="justify-content-between" style={{ display: 'flex', alignItems: 'center' }}>
        <h2>Projects</h2>
        <span className="flex justify-content-end">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={filterValue} onChange={onFilterChange} placeholder="Keyword Search" />
            </span>
        </span>
    </span>

    function onFilterChange(e: ChangeEvent<HTMLInputElement>) {
        setFilterValue(e.target.value)
        const q = e.target.value.toLowerCase();
        setFilteredProjects(projects.filter(p => p.name.toLowerCase().includes(q) || p.status.toLowerCase().includes(q)))
    }

    function onRowClick(e: DataTableRowClickEvent) {
        dispatch(setDialogProps({
            visible: true,
            header: e.data.name,
            children: <ProjectDetails {...(e.data as Project)} />
        }))
    }

    return (<div id="projects-container">
        <DataTable
            onRowClick={onRowClick}
            rowHover
            rowClassName={() => "cursor-pointer"}
            header={header}
            value={filteredProjects} >

            <Column field="name" header="Project Name" sortable></Column>
            <Column field="status" header="Status" sortable></Column>

        </DataTable>
    </div>)
}