import { RespPhotosSearch } from '../types';

export default function getImageLink(data: RespPhotosSearch) {
  const baseLink = 'https://live.staticflickr.com/';
  return `${baseLink}${data.server}/${data.id}_${data.secret}.jpg`;
}
