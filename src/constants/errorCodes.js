import toast from 'react-hot-toast';

export const ERROR_CODES = {
  ACCOUNT_EXISTS: 'Aккаунт з такою поштою вже існує.',
};

export const errorHandler = error => {
  const isAccountExists =
    error.includes('exists') || error.includes('credentials');
  if (isAccountExists) {
    return toast.error(ERROR_CODES.ACCOUNT_EXISTS);
  }
  toast.error(error);
};
