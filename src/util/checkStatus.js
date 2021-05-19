import { CORS_SERVER_URL, LIT_BOT_SERVER_URL } from "../config.json";
const checkStatus = async setStatus => {
  const { status } = await fetch(
    `${CORS_SERVER_URL}${LIT_BOT_SERVER_URL}api/status`
  );
  setStatus(status);
};

export default checkStatus;
