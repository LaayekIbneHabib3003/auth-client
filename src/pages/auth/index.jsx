import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes(props) {
  const { Component } = props;

  const navigate = useNavigate();
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      navigate("/sign-in");
    }
  }, [navigate]);

  return <Component />;
}
