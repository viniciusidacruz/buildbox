import { useForm } from 'react-hook-form';

export const useSubmitForm = () => {
  const { handleSubmit, register, formState } = useForm();
  const { errors, isSubmitting, isValid } = formState;

  const handleSubmitForm = (data: any) => {
    console.log('Data: ', data);
  };

  return {
    errors,
    isValid,
    register,
    formState,
    isSubmitting,
    handleSubmit,
    handleSubmitForm,
  };
};
