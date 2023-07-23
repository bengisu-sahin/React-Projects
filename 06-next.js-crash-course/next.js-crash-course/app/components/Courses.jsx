import Link from "next/link"

const Courses = ({ courses }) => {
    return (
        <div className='courses'>
            {
                courses.map((course) => (
                    <div key={course.id} className='card'>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <Link href={course.link} className='btn' target='_blank'>Go to Course </Link>
                        {/* target=_blank tıklanıldığında hedef adres yeni bir tarayıcı sekmesinde açılır. */}
                    </div>
                ))
            }
        </div>
    )
}

export default Courses