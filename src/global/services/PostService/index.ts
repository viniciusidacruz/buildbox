import { API_BASE_URL } from '@config/axios';
import { IPost } from '@/global/types/models/post';

import { IPayloadRegisterPost } from './types';

const registerNewPost = async (post: IPayloadRegisterPost) => {
  const { data } = await API_BASE_URL.post('/posts', post);

  if (data) {
    return data;
  }

  throw Error('Erro ao cadastrar uma postagem');
};

const getAllPosts = async (): Promise<IPost[]> => {
  const { data } = await API_BASE_URL.get('/posts');

  if (data) {
    return data;
  }

  throw Error('Erro ao listar as postagens');
};

export const PostService = {
  getAllPosts,
  registerNewPost,
};
