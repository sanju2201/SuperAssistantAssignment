exports.getTest = async (req, res)=>{
    res.status(200).json({
        message: "Test Api is working"
    });
}