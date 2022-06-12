import axios from "axios";

const loginDB = (id, password) => {
    return function (dispatch) {
        axios({
            method: "post",
            url: process.env.REACT_APP_API_URL + "/member/login",
            data: {
                accountId: id,
                password: password,
            },
        }).then((res) => {
            console.log(res.data);
            localStorage.setItem("accessToken", res.data.accessToken);
        });
    };
};

export default loginDB;
