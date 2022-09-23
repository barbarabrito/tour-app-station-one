import jwt from 'jsonwebtoken';
import config from 'config';

const privateKey = config.get<string>('privateKey')
const publicKey = config.get<string>('publicKey')

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    //checks if variable options is defined
    ...(options && options),
    algorithm: 'RS256'
  });
}

export function verifyJwt(token: string,
  keyName: 'accessTokenPublicKey' | 'refreshTokenPublicKey') {
  try {
    const decoded = jwt.verify(token, publicKey);

    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === 'jwt expired',
      decoded: null,
    };
  }
}