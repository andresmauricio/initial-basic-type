type callBackError = null | Error;
type callBack =  (error: callBackError, response: Object) => void;
type sendRequest = (cb: callBack) => void;

const send: sendRequest = (cb: callBack): void => {
    if (cb) {
         cb(null, {message: 'Todo salio bien'});
    }
}