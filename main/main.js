//=============================== import API =================================
import { sleep, scenario, error_check, options } from '../config/common.js';
import { response_check } from '../check/logresponse.js';
export { options }; const cid = __ENV.cid || '1'; let response;
import { DownloadFile, GetProfile, PostProfile, PostProfile_2, PostProfile_3, UploadFile } from '../api/example.js';
import { get_centrifugo_token } from '../api/get_centrifugo_token.js';
import { account } from '../api/account.js';
import { me_profile } from '../api/me_profile.js';
import { get_listchat } from '../api/get_listchat.js';
import { get_unread_chat } from '../api/get_unread_chat.js';
import { get_contacts } from '../api/get_contacts.js';
import { get_groups } from '../api/get_groups.js';
import { send_message } from '../api/send_message.js';
import { send_file } from '../api/send_file.js';
import { websocket } from '../api/websocket.js';

//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  response = websocket()
  //response = get_centrifugo_token()
  //response = account()
  //response = me_profile()
  //response = get_listchat()
  //response = get_unread_chat()
  //response = get_contacts()
  //response = get_groups()
  //response = send_message()
  //response = send_file()


  
  //response_check(response);
  error_check(response);
  sleep(1)
}