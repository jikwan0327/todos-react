import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DoList from "./DoList";
import axios from "axios";
import { Link } from "react-router-dom";

const BASEURL = process.env.REACT_APP_API_URL; //192
const submit = "+";
const Design = () => {
    const [todoListData, setTodoListData] = useState([]);
    const [inputValue, setinputValue] = useState("");

    const getList = async () => {
        const res = await axios.get(`${BASEURL}/todo`);
        setTodoListData(res.data);
    };

    const onDoubleClick = async (num1, addList) => {
        const edit = window.prompt("수정할 내용을 입력하세요", addList);
        await axios.put(`${BASEURL}/todo/${num1}`, {
            contents: `${edit}`,
        });

        getList();
    };

    const onClick = async () => {
        await axios.post(`${BASEURL}/todo`, {
            contents: inputValue,
        });

        setinputValue("");
        getList();
    };

    const delList = async (id) => {
        await axios.delete(`${BASEURL}/todo/${id}`);

        getList();
    };

    const onKeyPressHandler = (event) => {
        if (event.key === "Enter") {
            onClick();
        }
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <Body>
            <Head>
                <Link to={"/register"}>
                    <Register type="button" value="회원가입"></Register>
                </Link>
                <Link to={"/login"}>
                    <LoginBtn type="button" value="로그인"></LoginBtn>
                </Link>
            </Head>

            <SubBody>
                <InBody>
                    <Title>todolist</Title>
                    <Search>
                        <SearchWidget
                            className="search"
                            placeholder="  해야할 일"
                            onChange={(e) => {
                                setinputValue(e.target.value);
                            }}
                            value={inputValue}
                            onKeyPress={onKeyPressHandler}
                        ></SearchWidget>
                        <Submit onClick={onClick} type="reset" value={submit}></Submit>
                    </Search>
                    <List>
                        {todoListData.map((data) => (
                            <DoList
                                key={data.id}
                                addList={data.contents}
                                onDoubleClick={onDoubleClick}
                                delList={delList}
                                id={data.id}
                            ></DoList>
                        ))}
                    </List>
                </InBody>
            </SubBody>
        </Body>
    );
};

const Head = styled.div`
    height: 34px;
    background-color: white;
`;

const Body = styled.div`
    height: 100vh;
    margin: 0;
    background-color: silver;
`;

const SubBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InBody = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightyellow;
    width: 400px;
    height: 500px;
    margin-top: 96px;
    margin-left: 0px;
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: white;
    margin: 0;
    padding: 30px;
    font-size: 50px;
    background-color: #9ce1c8;
`;

const Search = styled.div`
    display: flex;
    justify-content: center;
`;

const SearchWidget = styled.input`
    ::placeholder {
        color: white;
    }
    width: 360px;
    height: 38px;
    border: 0;
    color: white;
    outline: 0;
    background-color: #5c5ad9;
`;

const Submit = styled.input`
    font-size: 34px;
    color: white;
    width: 40px;
    height: 40px;
    border: 0;
    background-color: blueviolet;
`;

const List = styled.div`
    width: 400px;
`;

const LoginBtn = styled.input`
    float: right;
    width: 50px;
    height: 30px;
    color: white;
    font-weight: bold;
    background-color: blueviolet;
    border: 0;
    border-radius: 7px;
`;

const Register = styled.input`
    float: right;
    width: 70px;
    height: 30px;
    color: white;
    border-radius: 7px;
    background-color: blueviolet;
    font-weight: bold;
    border: 0;
    margin-left: 10px;
`;

export default Design;
