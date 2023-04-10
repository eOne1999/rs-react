import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import Cards from './Cards';
import server from '../../mocks/server';

describe('Cards', () => {
  const url = 'https://www.flickr.com/services/rest/';
  let searchValue = '';
  const setSearchValue = () => {
    searchValue = 'banana';
  };

  const body = [
    {
      id: '1',
      owner: '95376847@N06',
      secret: 'b5519405f6',
      server: '65535',
      farm: 66,
      title: 'Photo 1',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
      datetaken: '2023-04-07 00:00:00',
      ownername: 'oterrason',
      description: {
        _content: 'Text description',
      },
      url_z: 'https://live.staticflickr.com/65535/51314478617_145903ef25_z.jpg',
    },
    {
      id: '2',
      owner: '95376847@N06',
      secret: 'b5519405f6',
      server: '65535',
      farm: 66,
      title: 'Photo 2',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
      datetaken: '2023-04-07 00:00:00',
      ownername: 'oterrason',
      description: {
        _content: 'Text description',
      },
      url_z: 'https://live.staticflickr.com/65535/52681025114_3f2062a97d_z.jpg',
    },
  ];

  it('Test', async () => {
    server.use(rest.get(url, (req, res, ctx) => res(ctx.status(200), ctx.json(body))));
    const { findByText } = render(
      <Cards searchValue={searchValue} setSearchValue={setSearchValue} />
    );
    it('Fetch and render Photo 1', async () => {
      expect(await findByText('Photo 1')).toBeInTheDocument();
    });
    it('Fetch and render Photo 2', async () => {
      expect(await findByText('Photo 2')).toBeInTheDocument();
    });
  });

  it('Renders Cards with searchValue', () => {
    let search = 'apple';
    const setSearch = () => {
      search = 'banana';
    };
    render(<Cards searchValue={search} setSearchValue={setSearch} />);
    expect(screen.getByText(/Results for:/i)).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
