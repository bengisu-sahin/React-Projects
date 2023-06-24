import { useContext } from "react";
import { EmployeeContext } from '../contexts/EmployeeContext';

const Employee = ({ employees }) => {
    const { deleteEmployee } = useContext(EmployeeContext);
    return (
        /**React bileşenleri genellikle bir kök (root) element içinde döndürülür. Yani, bir bileşenin dönüş değeri olarak sadece bir ana element olması beklenir. Ancak, bazen birden fazla JSX elementini birleştirmek veya birleştirilmiş elementleri döndürmek gerekebilir. Bu durumda, React fragmentleri (<> ve </>) kullanılabilir. Fragmentler, bir kök elemente ihtiyaç duymadan birden fazla elementi gruplamak için kullanılır. Fragmentler, görüntülenmeyen bir wrapper elementi oluşturmadan elementleri birleştirmek için ideal bir yöntemdir.
    */
        <>
            {
                employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td>{employee.phone}</td>
                        <td>
                            <button className="btn text-warning btn -act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                            <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn -act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
                        </td>
                    </tr>
                ))
            }
        </>
    )
}

export default Employee;