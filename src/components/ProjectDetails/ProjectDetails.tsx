import { Card } from "primereact/card"
import { Chip } from "primereact/chip"
import { Badge } from "primereact/badge"
import { Project } from "../../data/projects"

export function ProjectDetails(p: Project) {
    const severity = ({ 'Completed': 'success', 'In Progress': 'info', 'Planning': 'warning' } as const)[p.status]

    return (<>
        <Card header={<div className="flex flex-column align-items-center mb-2 pt-0 mt-o">
            <img src={p.image} style={{ maxWidth: '80%', borderRadius: '15px' }} />
        </div>}>
            <Badge severity={severity} value={p.status} className="mb-1" />
            <span className="flex justify-content-around">
                {p?.techStack?.split(", ").map(x => <Chip key={x} label={x} className="text-xs" />)}
            </span>
            <p>{p.description}</p>
        </Card>
    </>)
}