import { Box, Card, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import MyForm from "../../../components/form";

function SignIn() {
  const navigate = useNavigate();
  const formData = useSelector((state) => state.form.formData);
  const validate = {
    email: formData.email.charAt(0).toLowerCase() + formData.email.slice(1),
    password: formData.password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate the user
    fetch("https://repulsive-fawn-moccasins.cyclic.app/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validate),
    })
      .then((response) => response.json())
      .then((data) => {
        const authToken = data.token;
        if (!authToken) {
          alert("Email or password is wrong");
        } else {
          alert("You are authorized");
          localStorage.setItem("authToken", authToken);
          navigate("/dashboard");
        }
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
              Don't have an account?{" "}
              <NavLink to="/sign-up" style={{ color: "#793fdf" }}>
                Sign up
              </NavLink>
            </Text>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
}
export default SignIn;
