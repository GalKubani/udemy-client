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
  data: courseType[];
};

export type courseType = {
  title: string;
  description: string;
};

export type coursesDataType = { courses: any[] };

export type userType = {
  name: string;
  email: string;
  password: string;
};

export type userDataType = { user: userType | null; token: string };

export type actionType = {
  type: string;
  data: userType;
  token: string;
};
export type contextProps = {
  children: any;
};
