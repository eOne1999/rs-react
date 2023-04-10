import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Popup from './Popup';
import { RespPhotosSearch } from '../../types';

const active = true;
const setActive = () => {};

describe('Popup on Forms page', () => {
  const data = 'Card have been added!';

  it('Renders Popup on Forms page', () => {
    const { container } = render(<Popup active={active} setActive={setActive} data={data} />);
    expect(container).toHaveTextContent(data);
  });
});

describe('Popup on Main page', () => {
  const data: RespPhotosSearch = {
    id: '1',
    owner: '500',
    ownername: 'Owner',
    secret: '10',
    server: '200',
    farm: 0,
    title: 'Photo',
    ispublic: 1,
    isfriend: 0,
    isfamily: 0,
    datetaken: '2022-09-06 11:43:23',
    description: {
      _content: 'Description',
    },
  };

  it('Renders Popup on Main page for cards', () => {
    render(<Popup active={active} setActive={setActive} data={data} />);

    expect(screen.getByText(data.title)).toBeInTheDocument();
    expect(screen.getByText(`Author: ${data.ownername}`)).toBeInTheDocument();
    expect(screen.getByText(`Date: ${data.datetaken}`)).toBeInTheDocument();
    expect(screen.getByText(`Description: ${data.description?._content}`)).toBeInTheDocument();
  });
});
