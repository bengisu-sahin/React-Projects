'use client';
import { useState, useEffect } from 'react';
import LoadingPage from './loading';
import Courses from "../app/components/Courses";
import CourseSearch from '../app/components/CourseSearch';
const HomePage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch('/api/courses');
            const data = await res.json();
            setCourses(data);
            setLoading(false);
        };
        fetchCourses();
    }, []);
    if (loading) {
        return <LoadingPage />;
    }
    return (
        <>
            <h1>Welcome To Traversy Media</h1>
            <CourseSearch getSearchResults={(results) => setCourses(results)} />
            <Courses courses={courses} />
        </>
    );
};
export default HomePage;