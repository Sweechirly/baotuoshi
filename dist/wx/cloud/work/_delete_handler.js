module.exports=async function(e,t,a,c){try{const{id:c}=a;await t.collection("work_list").doc(c).update({data:{deleted:!0}});e.data={success:!0},e.message="作品已删除"}catch(t){e.code=c.SERVER_ERROR,e.message="服务器出错"}};