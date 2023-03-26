import React from 'react';

export type SearchState = { searchValue: string };

export interface ICard {
  format: string;
  width: number;
  height: number;
  filename: string;
  id: number;
  author: string;
  author_url: string;
  post_url: string;
}

export type TInputField = {
  type: string;
  id: string;
  value?: string;
  label?: string;
  ref?: React.RefObject<HTMLInputElement>;
  error?: string;
  className?: string;
};
