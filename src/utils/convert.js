export const convertTypeNumber = (phone) => {
  return phone.replace("+84", "0");
};
export const isPhone = (number) => {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{7})\b/.test(number);
};
console.log(isPhone("032786193"));
