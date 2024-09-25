import {fireEvent, screen} from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar/ui'
import {renderWithTranslation} from 'shared/lib/test'

describe('classNames', ()=> {
  test('Sidebar render', ()=> {
    renderWithTranslation(<Sidebar testId='sidebar'/>);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  })

  test('Sidebar collapsed', ()=> {
    renderWithTranslation(<Sidebar testId='sidebar'/>);
    const toggleSidebar = screen.getByTestId("toggleSidebar")
    fireEvent.click(toggleSidebar);
    expect(screen.getByTestId("sidebar")).toHaveClass('collapsed');
  })
})