export interface ILoginContextType {
  user: userDataType;
  updateLoginData: (action: actionType) => void;
}

export type LoginContextType = ILoginContextType | null;

export interface ICoursesContextType {
  courseData: coursesDataType;
  updateCourseData: (action: actionTypeCourses) => void;
}

export type CoursesContextType = ICoursesContextType | null;

export type actionTypeCourses = {
  type: string;
  data: coursesDataType;
};

export type coursesDataType = { courses: any[] };

export type userDataType = { user: any; token: string };

export type actionType = {
  type: string;
  data: userDataType;
  token: string;
};
export type contextProps = {
  children: any;
};
