import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import authService from "../services/authService";
import { swalError, swalSuccess } from "../utils/alertUtils";

const Auth = () => {
  const [modeForm, setModeForm] = useState(true);
  const router = useRouter();

  const login = async (loginInfo) => {
    try {
      await authService.login({ ...loginInfo });
      await swalSuccess("Inicio de sesión exitoso");
      router.push("/translation");
    } catch (error) {
      swalError("Algo salio mal, revisa bien tus datos");
      console.log(error);
    }
  };
  const register = async (registerInfo) => {
    try {
      await authService.register({ ...registerInfo });
      await swalSuccess("Registro exitoso");
      setModeForm(true);
    } catch (error) {
      swalError("Algo salio mal, revisa bien tus datos");
      console.log(error);
    }
  };
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Codex</h3>
      {modeForm ? (
        <LoginForm setModeForm={setModeForm} login={login} />
      ) : (
        <RegisterForm setModeForm={setModeForm} register={register} />
      )}
    </div>
  );
};
Auth.getLayout = (page) => {
  return <Container style={{ margin: "50px auto" }}>{page}</Container>;
};
export default Auth;
