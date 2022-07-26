import React, { createContext, useReducer } from 'react';
import {
  actionTypeCourses,
  contextProps,
  CoursesContextType,
} from '../utils/types';
import coursesReducer from '../reducers/coursesReducer';
export const CoursesContext = createContext<CoursesContextType>(null);

const CoursesContextProvider = (props: contextProps) => {
  const [courseData, coursesDispatch] = useReducer(coursesReducer, {
    courses: [],
  });
  const updateCourseData = (action: actionTypeCourses) =>
    coursesDispatch(action);

  return (
    <CoursesContext.Provider value={{ courseData, updateCourseData }}>
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
