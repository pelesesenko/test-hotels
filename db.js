const users = [];
let lastId = 0;

export default {
  getUsers() {
    return users;
  },
  getUserById(id) {
    return users.find((user) => user.id === id);
  },
  addUser(data) {
    const newUser = {id: ++lastId, ...data};
    users.push(newUser);
    return newUser;
  },
  updateUser(id, data) {
    let index;
    const oldUser = users.find((user, i) => ((index = i), user.id === id));
    if (!oldUser) return null;
    const newUser = Object.assign(oldUser, data);
    users.splice(index, 1, newUser);
    return newUser;
  },
  deleteUser(id) {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
  },
};
