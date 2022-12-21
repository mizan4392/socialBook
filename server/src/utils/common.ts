import { del, get, set } from './radis';

export const generateOtp = async (config: {
  key;
  data;
  delTimeOut?;
}): Promise<number> => {
  const { key, data, delTimeOut } = config;

  const code = Math.floor(1000 + Math.random() * 9000);
  await set(`${key}_${code}`, JSON.stringify(data));

  if (delTimeOut) {
    // delete the entry after 5 mins.
    setTimeout(async () => {
      await del(`${key}_${code}`);
    }, delTimeOut);
  }

  return code;
};

// eslint-disable-next-line
export const getOtpData = async (config: {
  key;
  code;
}): Promise<any | null> => {
  const { key, code } = config;
  const data = await get(key + '_' + code);
  if (data) {
    return JSON.parse(data);
  }

  return null;
};
