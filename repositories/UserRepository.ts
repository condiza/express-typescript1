import db from '../config/config-db';
import User from '../Dto/User.Dto';

class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO Register (email, nombres, apellidos, telefono, password_user   ) VALUES (?, ?, ?, ?, ?)';
        const values = [user.email, user.nombres, user.apellidos, user.telefono, user.password_user];
        return db.query(sql, values);
    }

    static async auth(email:string){
        const sql = 'SELECT password_user FROM Register WHERE email = ?';
        const values = [email]; 
        return db.query(sql, values)
    }

}


export default UserRepository;