import styled, { css } from "styled-components";

export const DoLists = styled.div`
    /* border-top: 0.05rem solid gray; */
    display: flex;
    align-items: center;
    padding-left: 10px;
    /* margin-top: 1px; */
    height: 30px;
`;

export const Checkbox = styled.input`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: ${(props) => (props.checked ? "none" : "solid 0.1rem #dddddd")};
    background: ${(props) => (props.checked ? "black" : "white")};
    border-radius: 0.4rem;
    transition: all 150ms;
`;

export const NewList = styled.div`
    margin-left: 10px;
    width: 325px;
    ${({ isCheck }) =>
        isCheck
            ? css`
                  color: gray;
                  text-decoration: line-through;
              `
            : css`
                  color: black;
              `};
`;

export const EditList = styled.input`
    margin-right: 164px;
`;
