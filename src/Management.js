import { FaPen } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Table } from "reactstrap";

const Management = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="main">
        <div className="teacher">
          <h1>Teacher Management</h1>
          <Button
            color="primary"
            className="button"
            onClick={() => nav("/profile/teacher")}
          >
            <FaPen></FaPen>
          </Button>
        </div>
        <div></div>
        <div></div>
        <div className="student">
          <h1>Student Management</h1>
          <Button color="primary" onClick={() => nav("/profile/student")}>
            <FaPen></FaPen>
          </Button>
        </div>
      </div>
      {/* <div></div>
          <div></div> */}

      {/* <Table>
          <tbody>
            <tr>
              <td>
                <h1>Teacher Mangement</h1>
              </td>
              <td>
                <Button onClick={() => nav("/profile/teacher")}>
                  <FaPen></FaPen>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <h1>Student Mangement</h1>
              </td>

              <td>
                <Button onClick={() => nav("/profile/student")}>
                  <FaPen></FaPen>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table> */}
    </>
  );
};

export default Management;
