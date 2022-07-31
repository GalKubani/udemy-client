import React, { useContext, useEffect } from 'react';
import { getAllCourses } from '../../server/db';
import { CoursesContext } from '../../context/CoursesContext';
import { getCoursesAction } from '../../actions/coursesActions';
import { CoursesContextType } from '../../utils/types';

const Home = () => {
  const { updateCourseData } = useContext<CoursesContextType>(CoursesContext)!;

  document.getElementsByTagName(
    'title',
  )[0].innerHTML = `Online Courses- Learn Anything On Yours Schedule | Udemy`;

  useEffect(() => {
    async function fetchData() {
      await getAllCourses().then(res => {
        updateCourseData(getCoursesAction(res));
      });
    }
    fetchData();
  }, []);
  return <div className="home"></div>;
};

export default Home;
