
// var conn=require('../apps.js')

// exports.users=()=>{
//     return new Promise((resolve,reject)=>{
        
//         conn.query("select * from users",(err,data)=>{
//             if(err){
//                 reject("error")
//             }
//             else{
//                 resolve(data)
//                 res.send(data)
//             }
//         })
//     })
// }












const mysql = require('mysql2/promise');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: 'Suhash@123',
  database: 'details', 
});

class User {
  // Fetch all users
  static async findAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM users');
      return rows;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  // Create a new user
  static async create(user) {
    try {
      const {id, username, userpass, usermail } = user;
      const [result] = await pool.query(
        'INSERT INTO users VALUES (?,?,?,?)',
        [id, username, userpass, usermail ]
      );
      return { ...user };
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  // Update an existing user
  static async update(id, user) {
    try {
      const { id, username, userpass, usermail } = user;
      await pool.query('UPDATE users SET username = ?, userpass = ?, usermail =? WHERE id = ?', [
        username, userpass, usermail, id
      ]);
      return {...user };
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  // Delete a user
  static async delete(id) {
    try {
      await pool.query('DELETE FROM users WHERE id = ?', [id]);
      return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
}

module.exports = User;
