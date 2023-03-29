import React from 'react';

export type SearchState = { searchValue: string };

export interface ICard {
  format?: string;
  width?: number;
  height?: number;
  filename?: string;
  id?: number;
  author: string;
  author_url?: string;
  post_url?: string;
  country?: string;
  date?: string;
  photographer?: string;
}

export type TInputField = {
  type: string;
  id?: string;
  name: string;
  value?: string;
  label?: string;
  ref?: React.RefObject<HTMLInputElement>;
  error?: string;
  className?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  accept?: string;
};

export type TCountry = {
  name: string;
  dial_code: string;
  code: string;
  flag: string;
};

export type TForm = {
  formData: TFormData;
  submit: TFormData[];
};

export type TFormData = {
  author: string;
  photographer?: string;
  date?: string;
  country: string;
  image?: string;
};

export type TFormCard = {
  author: string;
  image: string | undefined;
  country: string;
  date: string | undefined;
  photographer: string | undefined;
};
