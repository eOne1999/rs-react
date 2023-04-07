import { ReqInfo, ReqPhotosSearch, ReqPopular, ReqResent } from '../types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  async getPhotosSearch<RespFromGet>(params: ReqPhotosSearch): Promise<RespFromGet> {
    const data: RespFromGet = await super.getResp({
      options: {
        ...params,
        method: 'flickr.photos.search',
      },
    });
    return data;
  }

  async getPopular<RespFromGet>(params: ReqPopular): Promise<RespFromGet> {
    const data: RespFromGet = await super.getResp({
      options: {
        ...params,
        method: 'flickr.photos.getPopular',
      },
    });
    return data;
  }

  async getRecent<RespFromGet>(params: ReqResent): Promise<RespFromGet> {
    const data: RespFromGet = await super.getResp({
      options: {
        ...params,
        method: 'flickr.photos.getRecent',
      },
    });
    return data;
  }

  async getInfo<RespInfo>(params: ReqInfo): Promise<RespInfo> {
    const data: RespInfo = await super.getResp({
      options: {
        ...params,
        method: 'flickr.photos.getInfo',
      },
    });
    return data;
  }
}

export default AppController;
