import { enablePromise,openDatabase } from "react-native-sqlite-storage";

 const db =openDatabase({ name: 'adjectives.db', location: 'default' });
  
//   enablePromise(true)
const tableName="adjectives"
  export const createTable = async () => {
    // create table if not exists
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
          value TEXT NOT NULL
      );`;
    await db.executeSql(query);
  };
 export const getAdj = async () => {
    db.transaction(txn=>txn.executeSql(`SELECT * FROM  ${tableName}`,[],(sqlTxn,res)=>{
        console.log("success")
        let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push(item.value);
            }
            console.log(results)
        }
    },error=>{
        console.log("error",error)
    }))
    
  };
  export const saveAdj = async (adj) => {
    db.transaction(txn=>{
        txn.executeSql(`insert into ${tableName}(value) VALUES (?)`,[adj],(sqlTxn,res)=>{
            console.log("added ",adj)
        },error=>{
            console.log("error",error)
        })
    })
  };