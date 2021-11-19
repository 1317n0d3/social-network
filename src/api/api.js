import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d0362587-e54d-4d20-afac-25d227b52e1e",
  },
});

export const UsersAPI = {
  getUsers(count = 1, page = 10) {
    return instance
      .get(`users?count=${count}&page=${page}`)
      .then((response) => response.data);
  },
};
