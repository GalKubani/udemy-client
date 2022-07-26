import { actionTypeCourses, courseType } from '../utils/types';

export const getCoursesAction = (
  courseData: courseType[],
): actionTypeCourses => ({
  type: 'GET_COURSES',
  data: courseData,
});
