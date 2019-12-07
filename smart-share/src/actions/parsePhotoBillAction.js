const OCR_KEY = '43419a48f388957';

export default function parsePhotoBillAction(billImage) {
  return async function (dispatch) {
    try {
      console.log(billImage);
      const result = await fetch(`https://api.ocr.space/parse/image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: OCR_KEY,
        },
        body: JSON.stringify({
          language: 'eng',
          base64Image: billImage
        })
      });
      console.log('result', result.body);

      const data = await result.json();
      console.log('result', data.ParsedResults);
      dispatch({
        type: 'PARSE_BILL',
        data,
      });
    } catch (error) {
      dispatch({
        type: 'PARSE_BILL_ERROR',
        error,
      });
    }
  };
}