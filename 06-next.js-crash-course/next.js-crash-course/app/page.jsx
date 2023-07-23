import React from 'react'
import Link from 'next/link'
import Courses from './components/Courses';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome To Traversy Media</h1>
            <Courses />

        </div>
    )
}

export default HomePage