import * as S from "./style";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";

function DoList({ addList, delList, id, onDoubleClick }) {
    const [isEdit, setIsEdit] = useState(false);
    const [isCheck, setIsCheck] = useState(false);

    const isChecked = () => {
        setIsCheck(!isCheck);
        console.log("a", isCheck);
    };

    return (
        <S.DoLists>
            <S.Checkbox onClick={isChecked} type="checkbox"></S.Checkbox>
            {isEdit ? (
                <S.EditList />
            ) : (
                <S.NewList isCheck={isCheck} onDoubleClick={() => setIsEdit(true)}>
                    {addList}
                </S.NewList>
            )}
            <AiFillDelete size="25" color="LightCoral" onClick={() => delList(id)} />
        </S.DoLists>
    );
}

export default DoList;
