import React from 'react'
import {render, cleanup} from '@testing-library/react'
import TestElements from './TestElements'

afterEach(cleanup)

// to check the counter have 0 at the beginning
it('Should to 0 ', ()=>{
  const {getByTestId} = render(<TestElements/>)
  expect(getByTestId('counter')).toHaveTextContent(0)
})

// to check if the button isn't disabled
it('it should be enabled',()=>{
  const {getByTestId} = render(<TestElements/>)
  expect(getByTestId('button-up')).not.toHaveAttribute('disabled')
})

// to chech if the button is disabled
it('should be disabled', ()=>{
  const {getByTestId} = render(<TestElements/>)
  expect(getByTestId('button-down')).toBeDisabled()
})
