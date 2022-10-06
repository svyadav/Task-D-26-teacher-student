import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Input, Label, FormGroup, Button } from "reactstrap";

const EditStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editData, setEditData] = useState({
    name: "",
    department: "",
    gender: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get("https://626e4477e58c6fabe2dd5cce.mockapi.io/student/" + id)
      .then((response) => setEditData(response.data));
  }, []);

  const handleSubmit = async () => {
    await axios.put(
      "https://626e4477e58c6fabe2dd5cce.mockapi.io/student/" + id,
      editData
    );

    navigate("/profile/student");
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
              onChange={handleChange}
              value={editData.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="department">Department</Label>
            <Input
              id="department"
              name="department"
              placeholder="Enter Department"
              type="text"
              onChange={handleChange}
              value={editData.department}
            />
          </FormGroup>
          <FormGroup>
            <Label for="gender">Gender</Label>
            <Input
              id="gender"
              name="gender"
              placeholder="Enter Gender"
              type="text"
              onChange={handleChange}
              value={editData.gender}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter Email"
              type="text"
              onChange={handleChange}
              value={editData.email}
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

export default EditStudent;
