
// Added to trim whitespace on incoming requests

function trimObj(obj:any) {
  return Object.keys(obj).reduce((ths:any, nxt:any) => {
    ths[nxt] = obj[nxt].trim()
    return ths;
  }, []);
}

export default trimObj;