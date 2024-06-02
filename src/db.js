import sqlite3 from 'sqlite3';
const db = new (sqlite3.verbose().Database)(process.env.DB_NAME);

db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL
)`);

export default {
  async getUsers() {
    try {
      const users = await new Promise((res, rej) => {
        db.all('SELECT * FROM users', [], (err, rows) => {
          if (err) {
            rej(err);
          } else {
            res(rows);
          }
        });
      });
      return users;
    } catch {
      return null;
    }
  },
  async getUserById(id) {
    try {
      const user = await new Promise((res, rej) => {
        db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
          if (err) {
            rej(err);
          } else {
            res(row);
          }
        });
      });
      return user;
    } catch {
      return null;
    }
  },
  async addUser(data) {
    try {
      const id = await new Promise((res, rej) => {
        db.run('INSERT INTO users (name, age) VALUES (?, ?)', [data.name, data.age], function (err) {
          if (err) {
            rej(err);
          } else {
            res(this.lastID);
          }
        });
      });
      return {id, ...data};
    } catch {
      return null;
    }
  },
  async updateUser(id, data) {
    try {
      const changes = await new Promise(function (res, rej) {
        db.run('UPDATE users SET name = ?, age = ? WHERE id = ?', [data.name, data.age, id], function (err) {
          if (err) {
            rej(err);
          } else {
            res(this.changes);
          }
        });
      });
      return changes === 0 ? null : this.getUserById(id);
    } catch {
      return null;
    }
  },
  async deleteUser(id) {
    try {
      const changes = await new Promise((res, rej) => {
        db.run('DELETE FROM users WHERE id = ?', [id], function (err) {
          if (err) {
            rej(err);
          } else {
            res(this.changes);
          }
        });
      });
      return changes > 0;
    } catch {
      return false;
    }
  },
};
