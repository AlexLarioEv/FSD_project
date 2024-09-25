import {render, screen} from '@testing-library/react'
import { Button, EButtonType } from './Button'


describe('classNames', ()=> {
  test('Button render', ()=> {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  })

  test('with Button clear theme', ()=> {
    render(<Button theme={EButtonType.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass('clear');
    screen.debug()
  })
})
