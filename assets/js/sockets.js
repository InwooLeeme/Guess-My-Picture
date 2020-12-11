// Socket 관리 페이지
import { handleDisconnected, handleNewUser } from "./notifications";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = (aSocket) => (socket = aSocket);

export const initSocket = (aSocket) => {
  const { events } = window;
  // eslint-disable-next-line no-undef
  updateSocket(aSocket);
  // eslint-disable-next-line no-undef
  aSocket.on(events.newUser, handleNewUser);
  aSocket.on(events.disconnected, handleDisconnected)
};
