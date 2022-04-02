import { render } from '@testing-library/react';
import { Button } from 'antd-taro';
import * as React from 'react';

const classPrefix = `adm-button`;

describe('<Button />', () => {
  test('renders with color', () => {
    const { getByText } = render(
      <>
        <Button>Primary</Button>
        <Button>Success</Button>
        <Button>Danger</Button>
        <Button>Warning</Button>
      </>,
    );
    expect(getByText('Primary')).toHaveClass(`${classPrefix}-primary`);
    expect(getByText('Success')).toHaveClass(`${classPrefix}-success`);
    expect(getByText('Danger')).toHaveClass(`${classPrefix}-danger`);
    expect(getByText('Warning')).toHaveClass(`${classPrefix}-warning`);
  });
});
