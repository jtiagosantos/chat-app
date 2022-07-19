//hooks
import { useToastDispatch } from '@/hooks';

export const useWebShare = () => {
  const { openToast } = useToastDispatch();

  const share = async (data: ShareData) => {
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch (error) {
        openToast({
          messageType: 'error',
          message: 'Error sharing. Try again',
        });
      }
    } else {
      openToast({
        messageType: 'info',
        message: 'Web share is currently not supported on this browser',
      });
    }
  }

  return { share };
}