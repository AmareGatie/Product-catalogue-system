const Razorpay =require("razorpay");
const instance = new Razorpay({
    key_id:"rzp_test_QK7QW7gKZDzkn2",key_secret:"IWKM84aDdCJpIPNIir60yNdC"  
        // from pyment app api
})
const checkout =async(req,res)=>{
    const {amount}=req.body
    const option ={
        amount :amount *100,
        currency: "INR"
    };
    try {
 const order =await instance.orders.create(option)
 console.log(order);
    res.json({
        success: true,
        order
    })
}
catch (error) {
    throw new Error(error);
  }
}
const paymentVerification =async(req,res)=>{
    const { razorpayOrderId,razorpayPaymentId}=req.body
    res.json({
        razorpayOrderId,razorpayPaymentId
    })
}
module.exports={
    checkout,paymentVerification
}