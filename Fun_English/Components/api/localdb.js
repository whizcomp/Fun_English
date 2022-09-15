import { enablePromise,openDatabase } from "react-native-sqlite-storage";

 const db =openDatabase({ name: 'adjectives.db', location: 'default' });
  
  enablePromise(true)
const tableName="english"
  export const createTable = async () => {
    // create table if not exists
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
          value TEXT NOT NULL
      );`;
     await db.executeSql(query);
    return;
  };
 export const getAdj = async () => {
   const promise=new Promise((resolve, reject) => {
    db.transaction(txn=>txn.executeSql(`SELECT * FROM  ${tableName}`,[],(sqlTxn,res)=>{
      let len = res.rows.length;
        if (len > 0) {
          let results = [];
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            results.push(item.value);
          }
          resolve(results)
      }
      else{
        resolve([0])
      }
    },error=>{
        reject(error)
    }))
  })
  return promise
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