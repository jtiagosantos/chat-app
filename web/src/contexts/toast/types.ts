export type MessageType = 
  | 'success' 
  | 'error'
  | 'info'
  | 'warning';

export interface OpenToastData {
  messageType: MessageType;
  message: string;
}

export interface ToastStateContextData extends OpenToastData {
  isOpen: boolean;
}

export interface ToastDispatchContextData {
  openToast: (data: OpenToastData) => void;
  closeToast: () => void;
}