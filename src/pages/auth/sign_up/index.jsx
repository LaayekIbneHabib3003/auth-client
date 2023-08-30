import { Box, Card, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import MyForm from "../../../components/form";

function SignUp() {
  const formData = useSelector((state) => state.form.formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // save the user
    fetch("https://repulsive-fawn-moccasins.cyclic.app/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.token ? "Account created" : data.msg);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card w="lg" m="1em">
          <CardBody>
            <MyForm handleSubmit={handleSubmit} />
          </CardBody>
          <CardFooter sx={{ display: "flex", justifyContent: "center" }}>
            <Text>
              Already have an account?{" "}
              <NavLink to="/sign-in" style={{ color: "#793fdf" }}>
                Sign in
              </NavLink>
            </Text>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
}
export default SignUp;
