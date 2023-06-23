const Employee = ({ employees }) => {
    /**
            React bileşenleri genellikle bir kök (root) element içinde döndürülür. Yani, bir bileşenin dönüş değeri olarak sadece bir ana element olması beklenir. Ancak, bazen birden fazla JSX elementini birleştirmek veya birleştirilmiş elementleri döndürmek gerekebilir.
            Bu durumda, React fragmentleri (<> ve </>) kullanılabilir. Fragmentler, bir kök elemente ihtiyaç duymadan birden fazla elementi gruplamak için kullanılır. Fragmentler, görüntülenmeyen bir wrapper elementi oluşturmadan elementleri birleştirmek için ideal bir yöntemdir.
             */
    return (

        <>
            {
                employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td>{employee.phone}</td>
                        <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                        </td>
                    </tr>
                ))
            }
        </>

    )
}

export default Employee;