import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [allUsers, setallUsers] = useState([]);

  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");

  const handleLogout = () => {
    if (authToken) {
      localStorage.removeItem("authToken");
      navigate("/sign-in");
      alert("You have been logged out");
    }
  };

  // get all the users
  useEffect(() => {
    fetch("https://repulsive-fawn-moccasins.cyclic.app/user/data")
      .then((response) => response.json())
      .then((allUsers) => {
        setallUsers(allUsers);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1em",
        }}
      >
        <Button sx={{ ml: "auto" }} colorScheme="purple" onClick={handleLogout}>
          Logout
        </Button>

        <Card w="100%" mt="1em">
          <CardBody>
            <TableContainer>
              <Table variant="simple">
                <TableCaption>Data of all the users who have signed up</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Full name</Th>
                    <Th>Email address</Th>
                    <Th>Phone number</Th>
                    <Th>Gender</Th>
                    <Th>Country</Th>
                    <Th>State</Th>
                    <Th>City</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Object.values(allUsers).map((user) => (
                    <Tr key={user._id}>
                      <Td>{user.name}</Td>
                      <Td>{user.email}</Td>
                      <Td>{user.tel}</Td>
                      <Td>{user.gender}</Td>
                      <Td>{user.country}</Td>
                      <Td>{user.state}</Td>
                      <Td>{user.city}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
export default Dashboard;
