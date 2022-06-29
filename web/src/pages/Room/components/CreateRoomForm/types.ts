export interface CreateRoomFormProps {
  className: 'opening-form' | 'closing-form';
}

export interface ComponentProps extends CreateRoomFormProps {
  isShowCodeDialog: boolean;
  openCodeDialog: () => void;
  setCode: (code: string) => void;
  code: string;
}

export interface FormData {
  roomName: string;
}