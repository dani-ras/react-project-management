export type Project = {
    userId: number,
    name: string,
    description: string,
    image: string,
    status: Status,
    techStack: string
}

type Status = "In Progress" | "Completed" | "Planning"