var db=require('../config/connection')
var collection=require('../config/collections')
module.exports={

    addProduct:(products,callback)=>{
        console.log(products);
        db.get().collection('product').insertOne(products).then((data)=>{
           
            callback(data.ops[0]._id)
        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })

    },
    deleteProduct:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).removeOne({_id:proId})
        })
    }
}