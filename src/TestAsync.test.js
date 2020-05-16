import React from 'react'
import {render, cleanup, fireEvent, waitForElement} from '@testing-library/react'
import TestAsnyc from './TestAsnyc'

afterEach(cleanup)
  it('increments counter after 0.5s', async()=>{
    const {getByTestId, getByText} = render(<TestAsnyc/>)

    fireEvent.click(getByTestId('button-up'))
    const counter = await waitForElement(()=> getByText('1'))

    expect(counter).toHaveTextContent('1')
  })
