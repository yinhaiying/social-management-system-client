import request from '../utils/request.js';

class User {
    register(params){
        return request({
              url: "/api/users/register",
              method: "post",
              data: params
            });
    }

}

export default User;