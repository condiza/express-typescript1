class User {
    email: string;
    nombres: string;
    apellidos: string;
    telefono: string;
    password_user: string
    constructor(
        email: string, nombres: string,
        apellidos: string, telefono: string,
        password_user: string
    ) {
        this.email = email;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.password_user = password_user;
    }
}

export default User;