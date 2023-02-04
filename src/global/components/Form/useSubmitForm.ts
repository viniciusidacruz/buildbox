import { useForm } from 'react-hook-form';

import { IData } from './types';
import { initialValues } from './constants';

export const useSubmitForm = () => {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: initialValues,
  });
  const { errors, isSubmitting, isValid } = formState;

  const handleSubmitForm = (data: IData) => {
    console.log('Data: ', data);
  };

  const handleClearAllFields = () => {
    reset();
  };

  return {
    errors,
    isValid,
    register,
    formState,
    isSubmitting,
    handleSubmit,
    handleSubmitForm,
    handleClearAllFields,
  };
};
