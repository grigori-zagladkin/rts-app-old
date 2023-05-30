export const API_URL = process.env.SERVER_URL

export const getAuthUrl = (url: string) => `auth/${url}`
export const getCompetenceUrl = (url: string) => `competencies/${url}`
export const getCourseUrl = (url: string) => `courses/${url}`
export const getDevelopmentUrl = (url: string) => `developments/${url}`
export const getEmployeeUrl = (url: string) => `employees/${url}`
export const getEventUrl = (url: string) => `events/${url}`
