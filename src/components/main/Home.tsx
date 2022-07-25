import React, { useContext, useEffect, useState } from 'react';
import { getAllAdverts } from '../../server/db';

const Home = () => {
  // const { allCourses, coursesDispatch } = useContext(coursesContext);
  const [currentlyShownCourses, setCurrentlyShownCourses] = useState([]);
  document.getElementsByTagName(
    'title',
  )[0].innerHTML = `Online Courses- Learn Anything On Yours Schedule | Udemy`;
  useEffect(() => {
    async function fetchData() {
      await getAllAdverts().then(res => {
        // coursesDispatch(getAdvertsAction(res));
        setCurrentlyShownCourses(res);
      });
    }
    fetchData();
  }, []);
  return <div className="home"></div>;
};

export default Home;
