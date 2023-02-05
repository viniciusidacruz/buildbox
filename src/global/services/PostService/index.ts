import { API_BASE_URL } from '@config/axios';

import { IPayloadRegisterPost } from './types';

const registerNewPost = async (post: IPayloadRegisterPost) => {
  const { data } = await API_BASE_URL.post('/posts', post);

  if (data) {
    return data;
  }

  throw Error('Erro ao cadastrar uma postagem');
};

export const PostService = {
  registerNewPost,
};
