import axios from "axios";

const loginDB = (id, password) => {
    return function (dispatch) {
        axios({
            method: "post",
            url: "http://10.156.147.203:8080/member/login",
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
