import { actionTypeCourses, coursesDataType } from '../utils/types';

const advertReducer = (
  courseData: coursesDataType,
  action: actionTypeCourses,
): coursesDataType => {
  switch (action.type) {
    case 'GET_COURSES':
      return { courses: [...action.data] };
    default:
      return { ...courseData };
  }
};
export default advertReducer;
