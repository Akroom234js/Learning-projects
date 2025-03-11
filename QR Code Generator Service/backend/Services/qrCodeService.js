const qrCode = require("qrcode");
exports.formatData = (data) => {
  const qrCodeText = `Product ID :${data.id} , price:$${data.price}`;
  return qrCodeText;
};
exports.qrCodeGenerator = async (qrCodeText) => {
  const option = {
    errorCorrectionLevel: "M",
    type: "image/png",
    margin: 1,
  };
  const qrCodeBuffer = await qrCode.toBuffer(qrCodeText, option);
  return qrCodeBuffer;
};
