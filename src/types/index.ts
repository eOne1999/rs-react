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
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: T[];
  };
  stat: string;
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
  farm: string;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  date_upload?: string;
  ownername?: string;
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

export type ReqPopular = {
  user_id?: string;
  sort?: string;
  extras?: string;
  per_page?: string;
  page?: string;
};

export type ReqResent = {
  extras?: string;
  per_page?: string;
  page?: string;
};

export type ReqInfo = {
  photo_id: string;
  secret?: string;
};

export type RespInfo = {
  photo: {
    id: string;
    secret: string;
    server: string;
    farm: number;
    dateuploaded: string;
    isfavorite: number;
    license: number;
    safety_level: number;
    rotation: number;
    owner: {
      nsid: string;
      username: string;
      realname: string;
      location: string;
      iconserver: string;
      iconfarm: number;
      path_alias: string;
      gift: {
        gift_eligible: string;
        eligible_durations: string[];
        new_flow: string;
      };
    };
    title: { _content: string };
    description: { _content: string };
    visibility: { ispublic: number; isfriend: number; isfamily: number };
    dates: {
      posted: string;
      taken: string;
      takengranularity: number;
      takenunknown: number;
      lastupdate: string;
    };
    views: number;
    editability: { cancomment: number; canaddmeta: number };
    publiceditability: { cancomment: number; canaddmeta: number };
    usage: { candownload: number; canblog: number; canprint: number; canshare: number };
    comments: { _content: number };
    notes: {
      note: [];
    };
    people: { haspeople: number };
    tags: {
      tag: {
        id: string;
        author: string;
        authorname: string;
        raw: string;
        _content: string;
        machine_tag: string;
      }[];
    };
    urls: {
      url: { type: string; _content: string }[];
    };
    media: string;
  };
  stat: string;
};
