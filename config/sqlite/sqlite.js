import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "sqliteex.db";

export default class Sqlite {

  initDB() {
    let db;
    return new Promise((resolve) => {
      SQLite.echoTest()
        .then(() => {
          SQLite.openDatabase(
            database_name
          )
            .then(DB => {
              db = DB;
              db.executeSql('SELECT 1 FROM login').then(() => {
                  console.log("Database is ready ... executing query ...");
              }).catch((error) =>{
                  console.log("Received error: ", error);
                  db.transaction((tx) => {
                      tx.executeSql('CREATE TABLE IF NOT EXISTS login (nomor, email, password)');
                  }).then(() => {
                      console.log("Table created successfully");
                  }).catch(error => {
                      console.log(error);
                  });
              });
              resolve(db);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
      });
  };

  closeDatabase(db) {
    if (db) {
      db.close()
        .then(status => {
          console.log(status);
        })
        .catch(error => {
          this.errorCB(error);
        });
    } else {
      console.log("Database was not OPENED");
    }
  };

  listlogin() {
    return new Promise((resolve) => {
      const logins = [];
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM login WHERE 1', []).then(([tx,results]) => {
            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              console.log(`Nomor: ${row.nomor}, Email: ${row.email}`)
              const { nomor, email, password } = row;
              logins.push({
                nomor,
                email,
                password
              });
            }
            console.log(logins);
            resolve(logins);
          });
        }).then((result) => {
          this.closeDatabase(db);
          console.log(result);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    });  
  }
}