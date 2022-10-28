import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../shared/CourseSummary/CourseSummary';

const Category = () => {
  const categoryCourses=useLoaderData()
    return (
        <div>
            
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