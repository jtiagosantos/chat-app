import { useContextSelector } from 'use-context-selector';
import { UserDialogContext } from '@/contexts/userDialog';

export const useUserDialog = () => useContextSelector(
  UserDialogContext,
  (context) => context,
);