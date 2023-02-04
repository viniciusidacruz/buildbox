import {
  ButtonComponent,
  TextAreaComponent,
  TextFieldComponent,
  SelectImageComponent,
} from '@components/index';

import * as Styles from './styles';
import { useSubmitForm } from './useSubmitForm';

export function FormComponent() {
  const {
    errors,
    isValid,
    register,
    isSubmitting,
    handleSubmit,
    handleSubmitForm,
    handleClearAllFields,
  } = useSubmitForm();

  return (
    <Styles.Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Styles.Header>
        <SelectImageComponent
          id="thumbnail"
          htmlFor="thumbnail"
          {...register('thumbnail')}
        />
      </Styles.Header>

      <Styles.Body>
        <TextFieldComponent
          type="text"
          error={!!errors.name}
          placeholder="Digite seu nome"
          message={String(errors.name?.message)}
          {...register('name', {
            required: 'O campo de nome é obrigatório...',
          })}
        />

        <TextAreaComponent
          rows={4}
          placeholder="Mensagem"
          error={!!errors.message}
          message={String(errors.message?.message)}
          {...register('message', {
            required: 'O campo de mensagem é obrigatório...',
          })}
        />
      </Styles.Body>

      <Styles.Footer>
        <ButtonComponent
          type="button"
          title="Descartar"
          variant="outline"
          onClick={handleClearAllFields}
        />

        <ButtonComponent
          type="submit"
          title="Publicar"
          variant="contained"
          disabled={!isValid}
          loading={isSubmitting}
        />
      </Styles.Footer>
    </Styles.Form>
  );
}
