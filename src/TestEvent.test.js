import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import TestEvents from './TestEvents'

afterEach(cleanup)

it('incremnets counter', ()=>{
  const {getByTestId} = render(<TestEvents/>)

  fireEvent.click(getByTestId('button-up'))
  expect(getByTestId('counter')).toHaveTextContent('1')
})

it('decremnets counter', ()=>{
  const {getByTestId} = render(<TestEvents/>)

  fireEvent.click(getByTestId('button-down'))
  expect(getByTestId('counter')).toHaveTextContent('-1')
})
