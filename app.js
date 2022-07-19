const e = require('express');
const pool=require('./migration.js');
//  const add=async()=>{
//     try{
//         const tableData= await pool.query('SELECT * FROM scriptwriter')
//         console.log(tableData.rows)
//         tableData.rows.map(async(row)=>{
//             const data= await pool.query('INSERT INTO users (producer_id,username,email,firstname,lastname,password,status,is_deleted,TYPE) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
//             [row.scriptwriter_id,row.username,row.email,row.firstname,row.lastname,row.password,row.status,row.is_deleted,'scriptwriter']
//             )
           
    
//         })
//     }catch(e){
//         console.error(e)
//     }
    

//  }
const add=async()=>{
    try{
        const tableData= await pool.query('SELECT * FROM adminpanel')
        console.log(tableData.rows)
        tableData.rows.map(async(row)=>{
            const data= await pool.query('INSERT INTO users (id,username,email,password,TYPE) VALUES ($1,$2,$3,$4,$5)',
            [row.admin_id,row.username,row.email,row.password,'admin']
            )
           
    
        })
    }catch(e){
        console.error(e)
    }
    

 }


 add().catch(e=>console.error(e))

