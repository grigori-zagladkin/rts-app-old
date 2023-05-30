export const getAdminUrl = (url: string) => `/manage/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)
export const getAppCompetenciesUrl = (url: string) => `/competencies/${url}`
export const getAppEmployeesUrl = (url: string) => `/employees/${url}`
export const getAppDevelopmentsUrl = (url: string) => `/developments/${url}`
export const getAppCoursesUrl = (url: string) => `/courses/${url}`
export const getAppEventsUrl = (url: string) => `/events/${url}`
