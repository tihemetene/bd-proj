import axios from '../../utils/api'

class UserService {
  getAll() {
    return axios.get("/user");
  }

  get(id) {
    return axios.get(`/user/${id}`);
  }

  create(data) {
    return axios.post("/user", data);
  }

  update(id, data) {
    return axios.put(`/user/${id}`, data);
  }

  delete(id) {
    return axios.delete(`/user/${id}`);
  }

  deleteAll() {
    return axios.delete(`/user`);
  }

  findByTitle(title) {
    return axios.get(`/user?title=${title}`);
  }
}

export default new UserService();