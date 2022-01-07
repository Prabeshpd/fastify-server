import { Knex, knex } from "knex";

const dbConfig = {
  client: "mssql",
  connection: {
    host: "localhost",
    port: 1433,
    user: "sa",
    database: "tempdb",
    password: "Admin@123",
  },
};

const db: Knex = knex(dbConfig);

class User {
  public static table = "users";

  public static async getAll() {
    return db.select("*").from("users");
  }

  public static insertData(data: any) {
    return db.insert(data).into(this.table);
  }
}

export default User;
