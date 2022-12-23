import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button.component";
import { CORE_API_URL } from "../../utils/environment";

import "./Register.css";
type Props = {};

export default function Register({}: Props) {
  const [registerPayload, setRegisterPayload] = useState({
    userName: "",
    password: "",
    fullName: "",
    email: "",
  });
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [pin, setPin] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const notify = (
    message: string,
    type: "success" | "error" | "info" | "default"
  ) => toast(message, { type: type });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterPayload((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${CORE_API_URL}/auth/register`, registerPayload)
      .then((response) => {
        notify(
          "An confirmation code send to your email.please confirm the code",
          "info"
        );
        setLoading(false);
        setIsConfirm(true);
      })
      .catch((error) => {
        setLoading(false);
        const {
          response: {
            data: { message },
          },
        } = error;

        notify(message, "error");
      });
  };

  const onConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!pin?.length) {
      notify("Please Type pin code", "error");
    }
    setLoading(true);
    const registerPayload = {
      pin: pin,
    };
    axios
      .post(`${CORE_API_URL}/auth/confirm-registration`, registerPayload)
      .then((response) => {
        notify("Account created successfully.You can login now", "success");
        navigate("/login");
        setIsConfirm(false);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        const {
          response: {
            data: { message },
          },
        } = error;

        notify(message, "error");
      });
  };

  return (
    <div className="h-[100vh] bg-[#C7D1F7] flex items-center justify-center ">
      <div className="flex text-white bg-white w-[50%] rounded-lg min-h-[600px] gap-[30px] overflow-hidden flex-row-reverse	">
        {/* left side */}
        <div className="left flex-1 flex flex-col p-[50px]  ">
          <h1 className="text-[100px] leading-[100px] text-white">
            Hello World.
          </h1>
          <p>A place to connect with like minded people</p>
          <span className="text-[14px]">Don't you have an account?</span>
          <Link to={"/login"}>
            <button className="w-[50%] p-[10px] border-none bg-white text-purple-600 ">
              Login
            </button>
          </Link>
        </div>
        {/* right side */}
        <div className="flex-1 p-[50px] flex flex-col gap-[50px] justify-center ">
          <h1 className="text-[#555]">Register</h1>
          {isConfirm ? (
            <form className="flex flex-col gap-[30px]">
              <input
                type="text"
                placeholder="Pin"
                className="border-none text-[black] "
                style={{
                  borderBottom: "1px solid lightgray",
                  padding: "20px 10px",
                }}
                name="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
              <Button onClick={onConfirm} loading={loading}>
                Confirm
              </Button>
            </form>
          ) : (
            <form className="flex flex-col gap-[30px]">
              <input
                type="text"
                placeholder="Username"
                className="border-none text-[black] "
                style={{
                  borderBottom: "1px solid lightgray",
                  padding: "20px 10px",
                }}
                name="userName"
                onChange={handleInputChange}
              />
              <input
                type="email"
                placeholder="Email:"
                className="border-none text-[black]"
                style={{
                  borderBottom: "1px solid lightgray",
                  padding: "20px 10px",
                }}
                name="email"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Full Name..."
                className="border-none text-[black] "
                style={{
                  borderBottom: "1px solid lightgray",
                  padding: "20px 10px",
                }}
                name="fullName"
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="border-none text-[black]"
                style={{
                  borderBottom: "1px solid lightgray",
                  padding: "20px 10px",
                }}
                name="password"
                onChange={handleInputChange}
              />
              <Button onClick={handleClick} loading={loading}>
                Register
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
