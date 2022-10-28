import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../shared/CourseSummary/CourseSummary';

const Category = () => {
  const categoryCourses=useLoaderData()
    return (
        <div>
            <h1>this is category{categoryCourses.length} </h1>
            {
                categoryCourses.map(course=><CourseSummary
                key={course}
                course={course}
                ></CourseSummary>)
            }
        </div>
    );
};

export default Category;