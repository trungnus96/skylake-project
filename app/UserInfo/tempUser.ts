//object for checking ID and password when user tries to login to front-end
export class TempUser
{
    id: String;
    password: String;

    constructor(id: String, password: String)
    {
        this.id = id;
        this.password = password;
    }
}