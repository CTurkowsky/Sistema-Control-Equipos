import { render, screen } from '@testing-library/react'
import { PrestamoPage } from '../../../Control/Pages/PrestamoPage'

describe('Pruebas en <PrestamoPage/>', () => { 

    test('Debe de hacer match con el snaptshot', ()=>{
        const { container } = render(<PrestamoPage/>)
       expect(container).toMatchSnapshot();
    })

    // test('Debe concidir con los nombres',()=> {
    //     const { container } = render(<EquipoInformaticoPage/>)
    //     expect(screen.getByRole("textbox", {name: /nombre/i}))
    //     expect(screen.getByRole("textbox", {name: /descripcion/i}))
    //     // expect(screen.getByRole("textbox", {name: /numeroSerie/i}))
    //     // expect(screen.getByRole("textbox", {name: /estado/i}))
    //     // expect(screen.getByRole('combobox', {name: /marca/i}))
    //     // expect(screen.getByRole("textbox", {name: /categoria/i}))
    // })
})