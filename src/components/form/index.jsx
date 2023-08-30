import { FormControl, Stack, Input, Select, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateFormData } from "../../features/form";
import countries from "../countries";

function MyForm({ handleSubmit }) {
  const location = useLocation();
  const path = location.pathname;
  const signUp = path === "/sign-up";
  const signIn = path === "/sign-in";

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  return (
    <>
      {signUp && (
        <FormControl>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Input
                required
                id="name"
                type="name"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input
                required
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Input
                required
                id="tel"
                type="tel"
                name="tel"
                placeholder="Phone number"
                value={formData.tel}
                onChange={handleInputChange}
              />
              <Select
                required
                id="gender"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option>Male</option>
                <option>Female</option>
              </Select>
              <Select
                required
                id="country"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleInputChange}
              >
                {countries.map((country, index) => (
                  <option key={index}>{country}</option>
                ))}
              </Select>
              <Input
                required
                id="state"
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
              />
              <Input
                required
                id="city"
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
              />
              <Input
                required
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <Button colorScheme="purple" type="submit">
                Sign up
              </Button>
            </Stack>
          </form>
        </FormControl>
      )}

      {signIn && (
        <FormControl>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Input
                required
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Input
                required
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <Button colorScheme="purple" type="submit">
                Sign in
              </Button>
            </Stack>
          </form>
        </FormControl>
      )}
    </>
  );
}
export default MyForm;
