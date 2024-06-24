export interface AudioData {
    filepath: string
    project_id: number
    length: number
    created: string
    created_by: string
}

export interface Audio extends AudioData {
    id: number
}