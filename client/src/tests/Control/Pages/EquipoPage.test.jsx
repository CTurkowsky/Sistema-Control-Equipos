import { render, screen } from '@testing-library/react'
import { EquipoInformaticoPage } from '../../../Control/Pages/EquipoInformaticoPage'

describe('Pruebas en <EquipoInformaticoPage/>', () => { 

    test('Debe de hacer match con el snaptshot', ()=>{
        const { container } = render(<EquipoInformaticoPage/>)
       expect(container).toMatchSnapshot();
    })

    test('Debe concidir con los nombres',()=> {
        const { container } = render(<EquipoInformaticoPage/>)
        expect(screen.getByRole("textbox", {name: /nombre/i}))
        expect(screen.getByRole("textbox", {name: /descripcion/i}))
        // expect(screen.getByRole("textbox", {name: /numeroSerie/i}))
        // expect(screen.getByRole("textbox", {name: /estado/i}))
        // expect(screen.getByRole('combobox', {name: /marca/i}))
        // expect(screen.getByRole("textbox", {name: /categoria/i}))
    })
})