import {render, screen} from '@testing-library/react'
import {IncidenciaPage} from '../../../Control/Pages/IncidenciaPage'

describe('Pruebas en <IncidenciaPage/>', () => {

    test('Debe de hacer match con el snaptshot', () => {
        const {container} = render(<IncidenciaPage />)
        expect(container).toMatchSnapshot();
    })

})
