import React from 'react';

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
  image: string | undefined;
  file: FileList;
  confirmation: boolean;
};

export type TCard = {
  card: RespPhotosSearch;
  setPopupActive: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveCard: React.Dispatch<React.SetStateAction<RespPhotosSearch>>;
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
  data: RespPhotosSearch | string;
};

export type TForm = {
  submitData: TFormData[];
  setSubmitData: React.Dispatch<React.SetStateAction<TFormData[]>>;
  popupActive: boolean;
  setPopupActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TSearch = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export interface GetResp {
  options: object;
}

export type LoaderOptions = {
  api_key: string;
  format: string;
  nojsoncallback: string;
};

export interface RespFromGet<T> {
  photos?: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: T[];
  };
  stat: string;
  code?: string;
  message?: string;
}

export type ReqPhotosSearch = {
  user_id?: string;
  tags?: string;
  tag_mode?: string;
  text?: string;
  min_upload_date?: string;
  max_upload_date?: string;
  min_taken_date?: string;
  max_taken_date?: string;
  license?: string;
  sort?: string;
  privacy_filter?: string;
  bbox?: string;
  accuracy?: string;
  safe_search?: string;
  content_type?: string;
  content_types?: string;
  video_content_types?: string;
  machine_tags?: string;
  machine_tag_mode?: string;
  group_id?: string;
  contacts?: string;
  woe_id?: string;
  place_id?: string;
  media?: string;
  has_geo?: string;
  geo_context?: string;
  lat?: string;
  lon?: string;
  radius?: string;
  radius_units?: string;
  is_commons?: string;
  in_gallery?: string;
  is_getty?: string;
  extras?: string;
  per_page?: string;
  page?: string;
};

export type RespPhotosSearch = {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  dateupload?: string;
  datetaken?: string;
  ownername?: string;
  description?: {
    _content: string;
  };
  url_z?: string;
  url_sq?: string;
  url_t?: string;
  url_s?: string;
  url_q?: string;
  url_m?: string;
  url_n?: string;
  url_c?: string;
  url_l?: string;
  url_o?: string;
};
