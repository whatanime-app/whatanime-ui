import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { zodResolver } from '@hookform/resolvers/zod';
import { Text } from '@whatanime/design-system';
import { z } from 'zod';

import { useTrpcContext } from '@/hooks/useTrpcContext';
import { useSearch } from '@/stores/useSearch';

import { Form, IconButton, Input, TextInputContainer } from './styles';

const inputSchema = z.object({
  title: z.string(),
});

type InputValues = z.infer<typeof inputSchema>;

export function Search() {
  const { getAnimeByTitle } = useTrpcContext();
  const searchAnime = useSearch((state) => state.setResponse);

  const {
    register,
    handleSubmit,

    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputValues>({
    defaultValues: {
      title: '',
    },
    resolver: zodResolver(inputSchema),
  });

  const handleSearch = useCallback(
    async (values: InputValues) => {
      await getAnimeByTitle.fetch({ title: values.title }).then((response) => {
        searchAnime(response);
        reset();
      });
    },
    [getAnimeByTitle, reset, searchAnime],
  );

  return (
    <Form onSubmit={handleSubmit(handleSearch)}>
      <Text as="h2" size="5xl" css={{ fontWeight: '$regular' }}>
        SEARCH
      </Text>
      <div>
        <TextInputContainer>
          <Input placeholder="Enter your search key word" {...register('title')} />
          <IconButton aria-label="search button" type="submit" disabled={isSubmitting}>
            <FaSearch size={26} />
          </IconButton>
        </TextInputContainer>
        {errors.title ? (
          <Text as="span" css={{ color: '$red400' }}>
            {errors.title.message}
          </Text>
        ) : (
          <br />
        )}
      </div>
    </Form>
  );
}
