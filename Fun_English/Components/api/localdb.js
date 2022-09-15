import { enablePromise,openDatabase } from "react-native-sqlite-storage";

 const db =openDatabase({ name: 'adjectives.db', location: 'default' });
  
  enablePromise(true)
const tableName="words"
  export const createTable = async () => {
    // create table if not exists
    const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
          value TEXT NOT NULL
      );`;
    await db.executeSql(query);
    return saveAdj(0)
  };
 export const getAdj = async () => {
  await createTable();
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
    },error=>{
        reject(error)
    }))
  })
  return promise
  };
  export const saveAdj = async (adj) => {
    db.transaction(txn=>{
        txn.executeSql(`insert into ${tableName}(value) VALUES (?) where not exists( SELECT * FROM  ${tableName} where value=0)`,[adj],(sqlTxn,res)=>{
            console.log("added ",adj)
        },error=>{
            console.log("error",error)
        })
    })
  };