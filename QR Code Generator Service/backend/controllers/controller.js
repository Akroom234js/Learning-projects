const service = require("../Services/qrCodeService");

exports.generateQR = async (req, res) => {
  try {
    const data = req.body;
    // console.log(data);
  
    const qrCodeText = service.formatData(data);
    const qrCodeBuffer = await service.qrCodeGenerator(qrCodeText);

    res.setHeader("Content-Disposition", "attachment; filename=qrcode.png");
    res.type("image/png").send(qrCodeBuffer);
  } catch {
    console.log("ERROR WITH CODE GENERATOR💔");
    res.status(404).json({ error: "ERROR IN SERVER" });
  }
}; 
