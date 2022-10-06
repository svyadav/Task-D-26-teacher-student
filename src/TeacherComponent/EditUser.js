import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Input, Label, FormGroup, Button } from "reactstrap";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    username: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get("https://626e4477e58c6fabe2dd5cce.mockapi.io/profile/" + id)
      .then((response) => setEditData(response.data));
  }, []);

  const handleSubmit = async () => {
    await axios.put(
      "https://626e4477e58c6fabe2dd5cce.mockapi.io/profile/" + id,
      editData
    );

    navigate("/profile/teacher");
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>Update profile</h1>
      <Container>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter Name"
              type="text"
              className="text"
              onChange={handleChange}
              value={editData.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter Email"
              type="text"
              className="text"
              onChange={handleChange}
              value={editData.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="Enter Username"
              type="text"
              onChange={handleChange}
              value={editData.username}
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              id="address"
              name="address"
              placeholder="Enter Address"
              type="text"
              onChange={handleChange}
              value={editData.address}
            />
          </FormGroup>
        </Form>
      </Container>

      <Button color="primary" onClick={() => handleSubmit()}>
        Submit
      </Button>
    </>
  );
};

export default EditUser;
