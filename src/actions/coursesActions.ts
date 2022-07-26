import { coursesDataType, actionTypeCourses } from '../utils/types';

export const getCoursesAction = (
  courseData: coursesDataType,
): actionTypeCourses => ({
  type: 'GET_COURSES',
  data: courseData,
});
