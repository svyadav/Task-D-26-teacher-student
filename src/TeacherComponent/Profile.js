import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Table } from "reactstrap";
import { FaTrashAlt, FaPen } from "react-icons/fa";
const Profile = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    fetch("https://626e4477e58c6fabe2dd5cce.mockapi.io/profile")
      .then((data) => data.json())
      .then((response) => setData(response));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    fetch("https://626e4477e58c6fabe2dd5cce.mockapi.io/profile/" + id, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((response) => getData());
  };
  return (
    <Container>
      <div className="heading">
        <div>
          <h1>Teacher Details</h1>
        </div>
        <div>
          <Button
            className="createbtn"
            color="primary"
            onClick={() => navigate("/create/teacher")}
          >
            Create
          </Button>
        </div>
      </div>

      <Table striped>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Username</th>
            <th>ActionDel</th>
            <th>ActionEidt</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.address}</td>
                <td>{value.username}</td>
                <td>
                  <Button color="danger" onClick={() => handleDelete(value.id)}>
                    <FaTrashAlt />
                  </Button>
                </td>
                <td>
                  <Button
                    color="primary"
                    onClick={() => navigate("/create/teacher/" + value.id)}
                  >
                    <FaPen />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Profile;
