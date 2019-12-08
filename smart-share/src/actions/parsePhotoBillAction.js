const OCR_KEY = '43419a48f388957';
import TESTBILL from '../testData/testBill';

export default function parsePhotoBillAction(billImage) {
  return async function (dispatch) {
    try {
      const response = await fetch(`https://api.ocr.space/parse/image`, {
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

      const data = await response.json();
      const result = data.ParsedResults;
      dispatch({
        type: 'PARSE_BILL',
        data: result || TESTBILL
      });
    } catch (error) {
      dispatch({
        type: 'PARSE_BILL_ERROR',
        error,
      });
    }
  };
}