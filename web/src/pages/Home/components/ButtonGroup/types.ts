export interface ButtonGroupProps {
  onOpenSignInForm: () => void;
  onOpenSignUpForm: () => void;
  className: 'showing-button-group' | 'hiding-button-group' | ''
}