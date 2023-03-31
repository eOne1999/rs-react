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
  id?: string;
  name: string;
  value?: string;
  label?: string;
  ref?: React.RefObject<HTMLInputElement>;
  error?: string;
  className?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export type TCountry = {
  name: string;
  dial_code: string;
  code: string;
  flag: string;
};

export type TFormData = {
  author: string;
  photographer: string;
  date: string;
  country: string;
  image: string;
};

export type TFormCard = {
  author: string;
  image: string | undefined;
  country: string;
  date: string | undefined;
  photographer: string | undefined;
};

export type TPopup = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TForm = {
  submitData: TFormData[];
  setSubmitData: React.Dispatch<React.SetStateAction<TFormData[]>>;
  popupActive: boolean;
  setPopupActive: React.Dispatch<React.SetStateAction<boolean>>;
};
