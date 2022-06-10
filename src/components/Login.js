import styled from "styled-components";
import { useState } from "react";
import loginDB from "./UserPage";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

function Login() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const LoginPage = () => {
        if (id === "" && pw === "") {
            window.alert("아이디와 비밀번호를 입력해주세요.");
            return;
        } else if (id === "") {
            window.alert("아이디를 입력해주세요.");
            return;
        } else if (pw === "") {
            window.alert("비밀번호를 입력해주세요.");
            return;
        } else {
            onSubmitHandler();
        }
    };

    const onKeyPressHandler = (event) => {
        if (event.key === "Enter") {
            LoginPage();
        }
    };

    const onSubmitHandler = () => {
        loginDB(id, pw)();
    };

    return (
        <Outline>
            <Link to={"/"}>
                <BiArrowBack size={30}></BiArrowBack>
            </Link>
            <Form>
                <h1>로그인 창</h1>
                <Id
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                    placeholder="아이디"
                    onKeyPress={onKeyPressHandler}
                ></Id>
                <br />
                <br />
                <Password
                    onChange={(e) => {
                        setPw(e.target.value);
                    }}
                    placeholder="비밀번호"
                    onKeyPress={onKeyPressHandler}
                ></Password>
                <br />
                <br />
                <LoginBtn onClick={LoginPage} type="button" value="로그인"></LoginBtn>
            </Form>
        </Outline>
    );
}

export default Login;

const Outline = styled.div`
    margin-top: 10px;
    margin-left: 20px;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

const Id = styled.input`
    width: 300px;
    height: 40px;
    color: black;
    outline: 0;
`;

const Password = styled.input`
    width: 300px;
    height: 40px;
    color: black;
    outline: 0;
`;

const LoginBtn = styled.input`
    width: 310px;
    height: 45px;
    color: white;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    background-color: blueviolet;
`;
