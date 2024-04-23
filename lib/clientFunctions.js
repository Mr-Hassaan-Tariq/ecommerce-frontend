import axios from "axios";
import { toJpeg } from "html-to-image";

export const fetchData = (url) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => console.log(error.message));

export async function postData(url, data) {
  const response = await axios({
    method: "post",
    url,
    data,
  })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
      const errData = { success: false, err: error.message };
      return errData;
    });

  return response;
}

export async function updateData(url, data) {
  const response = await axios({
    method: "put",
    url,
    data,
  })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });

  return response;
}

export async function deleteData(url, data) {
  const response = await axios({
    method: "delete",
    url,
    data,
  })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });

  return response;
}

export function decimalBalance(num) {
  return Math.round(num * 10) / 10;
}

export function getTotalPrice(cartData) {
  const price = cartData.items.reduce(
    (accumulator, item) => accumulator + item.qty * item.price,
    0,
  );
  return Math.round(price * 10) / 10;
}

export function discountPrice(cartData) {
  const price = cartData.items.reduce(
    (accumulator, item) => accumulator + item.qty * item.price,
    0,
  );
  const discountPrice =
    Math.round((price - (cartData.coupon.discount / 100) * price) * 10) / 10;
  return discountPrice;
}




export function toBase64(str) {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
}

export function currencyConvert(payAmount, exchangeRate) {
  const amount = Number(payAmount);
  const exchange = Number(exchangeRate);
  let convertedAmount = 0;
  convertedAmount = amount * exchange;
  return Number(convertedAmount.toFixed(2));
}


export function appUrl(req) {
  let _a;
  let host =
    (((_a = req) === null || _a === void 0 ? void 0 : _a.headers)
      ? req.headers.host
      : window.location.host) || process.env.NEXT_PUBLIC_URL;
  let protocol =
    process.env.NEXT_PUBLIC_APP_SSL !== "yes" ? "http://" : "https://";
  if (typeof window !== "undefined") {
    protocol = window.location.protocol + "//";
  }
  return {
    protocol: protocol,
    host: host,
    origin: protocol + host,
  };
}

export async function printDocument(reference, name) {
  const { jsPDF } = await import("jspdf");
  await toJpeg(reference, { quality: 1.0, pixelRatio: 1.8 })
    .then(function (dataUrl) {
      const pdf = new jsPDF('p', 'mm', 'a4');
      console.log('Test pdf', dataUrl)
      // const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      // const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(dataUrl, "JPEG", 0, 0, 180, 297);
      pdf.save(`${name}.pdf`);

    })
    .catch((err) => {
      console.log(err);
    });
}

// Old PDF Code

// export async function printDocument(reference, name) {
//   const { jsPDF } = await import("jspdf");
//   await toJpeg(reference, { quality: 1.0, pixelRatio: 1.8 })
//     .then(function (dataUrl) {
//       const pdf = new jsPDF("p", "pt", "a4", true);
//       console.log(pdf , 'sdfdsf' , dataUrl , reference, name)
//       const imgProps = pdf.getImageProperties(dataUrl);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight, "FAST");
//       pdf.save(`${name}.pdf`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }