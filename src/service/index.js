/* eslint-disable react-hooks/rules-of-hooks */
const REGEX = "(?<=false_|true_)(.*)(?=@)";

const isGroup = (phone) => {
  return phone.includes("@");
};

export const getCurrentPhone = ({ currentPhone, setCurrentPhone, setLastContact }) => {
  const element = document.querySelector('[data-id*="false_"],[data-id*="true_"]');
  if (element) {
    const phone = element?.dataset?.id.toString().match(REGEX)[0];
    if ((currentPhone && currentPhone === phone) || isGroup(phone)) {
      return;
    }
    setLastContact(currentPhone)
    setCurrentPhone(phone);
  }
};