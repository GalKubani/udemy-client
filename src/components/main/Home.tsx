import React, { useContext, useEffect, useState } from 'react';
import { getAllAdverts } from '../../server/db';
import { CoursesContext } from '../../context/CoursesContext';
import { getCoursesAction } from '../../actions/coursesActions';
import { CoursesContextType, coursesDataType } from '../../utils/types';

const Home = () => {
  const { updateCourseData } = useContext<CoursesContextType>(CoursesContext)!;
  const [currentlyShownCourses, setCurrentlyShownCourses] =
    useState<coursesDataType>({ courses: [] });
  document.getElementsByTagName(
    'title',
  )[0].innerHTML = `Online Courses- Learn Anything On Yours Schedule | Udemy`;
  useEffect(() => {
    async function fetchData() {
      await getAllAdverts().then(res => {
        updateCourseData(getCoursesAction(res));
        setCurrentlyShownCourses(res);
      });
    }
    fetchData().then(res => {
      console.log(res);
      console.log('fetched adverts');
    });
  }, []);
  return <div className="home"></div>;
};

export default Home;
