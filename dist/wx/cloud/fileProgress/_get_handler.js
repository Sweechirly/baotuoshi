module.exports=async function(o,t,a,c){try{const{id:c}=a;console.log(c);const e=await t.collection("transfer").doc(c).get();o.data=e.data,o.message="获取成功"}catch(t){o.code=c.SERVER_ERROR,o.message="服务器出错"}};