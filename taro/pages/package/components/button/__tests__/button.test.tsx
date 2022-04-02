import { render } from '@testing-library/react';
import { Button } from 'antd-taro';
import React from 'react';

describe('<Button />', () => {
  test('renders with color', () => {
    const { getByText } = render(<Button>Primary</Button>);
    expect(getByText('Primary'));
  });
});
