import styled from "styled-components";

function EditList({ inputValue }) {
    return <EditInput size="2" value={inputValue}></EditInput>;
}

const EditInput = styled.input`
    outline: 0;
`;

export default EditList;
