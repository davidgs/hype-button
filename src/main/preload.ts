// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer } from 'electron';

export type Events = 'send-hype';
export type electronAPI = {
  sendHype: () => Promise<string>;
};

contextBridge.exposeInMainWorld('electronAPI',{
  sendHype: () => {
    return ipcRenderer.invoke('send-hype');
  },
});

declare global {
  interface Window {
    electronAPI: {
      sendHype: () => Promise<string>;
    };
  }
}
