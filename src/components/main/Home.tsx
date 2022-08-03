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
  return (
    <div className="home">
      <div className="billboard">
        <div className="">
          <img
            width="1340"
            height="400"
            alt=""
            src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/237e1312-5cce-462a-924f-8d5be93589d4.jpg"
          />
        </div>
        <div className="billboard-text">
          <h1 className="">Get ahead, stay ahead</h1>
          <p className="">
            Thrive by learning the latest skills. Courses as low as ₪45.90 ends
            Aug 4.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
