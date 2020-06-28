import cryto from 'crypto';

export const createSignature = (secret, body) => {
    var params = [];
    for (let atr in body) {
    
        params.push(`${atr}=${body[atr]}`);
    }
    params.sort();
    
    var hmac  = cryto.createHmac("sha256", secret).update(params.join(';')).digest('hex');;
    
    return hmac;
}