import styled from "styled-components";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import registerDB from "./RegisterPage";

function Regist() {
    const [newId, setNewId] = useState();
    const [newPw, setNewPw] = useState();
    const [reNewPw, setReNewPw] = useState();

    const Register = () => {
        if (newPw !== reNewPw) {
            alert("비밀번호를 다시 확인해주세요");
            return;
        } else {
            registerDB(newId, newPw)();
        }
    };

    return (
        <Outline>
            <Link to={"/"}>
                <BiArrowBack size={30}></BiArrowBack>
            </Link>
            <AddForm>
                <h1>회원가입</h1>
                <AddId
                    onChange={(e) => {
                        setNewId(e.target.value);
                    }}
                    placeholder="아이디(6글자 이상)"
                ></AddId>
                <br></br>
                <br></br>
                <AddPW
                    onChange={(e) => {
                        setNewPw(e.target.value);
                    }}
                    placeholder="비밀번호(6글자 이상)"
                ></AddPW>
                <br></br>
                <br></br>
                <AddPW
                    onChange={(e) => {
                        setReNewPw(e.target.value);
                    }}
                    placeholder="비밀번호 재확인(6글자 이상)"
                ></AddPW>
                <br></br>
                <br></br>
                <RegisterBtn onClick={Register} type="button" value="회원가입"></RegisterBtn>
            </AddForm>
        </Outline>
    );
}

export default Regist;

const Outline = styled.div`
    margin-top: 10px;
    margin-left: 20px;
`;

const AddForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AddId = styled.input`
    outline: 0;
    width: 300px;
    height: 40px;
`;

const AddPW = styled.input`
    outline: 0;
    width: 300px;
    height: 40px;
`;

const RegisterBtn = styled.input`
    border: 0;
    outline: 0;
    width: 310px;
    height: 30px;
    background-color: skyblue;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
`;
