import { describe, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Form from './Form';
import store from '../../store';

describe('Form', () => {
  it('Renders Form', async () => {
    const active = false;
    const setActive = () => {};

    const { container } = render(
      <Provider store={store}>
        <Form popupActive={active} setPopupActive={setActive} />
      </Provider>
    );
    fireEvent(screen.getByText(/Submit/i), new MouseEvent('click'));
    await waitFor(() => {
      expect(container.getElementsByClassName('form__error')[0]).toBeInTheDocument();
    });
    expect(container.getElementsByClassName('form')[0]).toBeInTheDocument();
  });
});
