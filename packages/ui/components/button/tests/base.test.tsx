import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import Button from '../';

describe('Button', () => {
  test('renders with color', () => {
    const { getByText } = render(
      <>
        <Button color="primary">Primary</Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
        <Button color="warning">Warning</Button>
      </>,
    );
  });
});
