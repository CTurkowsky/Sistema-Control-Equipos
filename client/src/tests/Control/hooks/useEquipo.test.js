import {renderHook, waitFor} from '@testing-library/react';
import {useEquipos} from '../../../hooks/useEquipo';
describe('Prueba en el hook useEquipo', () => {
  test('debe regresar mas de un elemento', async () => {
    const {result} = renderHook(() => useEquipos());
    await waitFor(() =>
      expect(result.current.equipos.length).toBeGreaterThan(0)
    );
    const {equipos} = result.current;
    console.log(equipos)
    expect(equipos.length).toBeGreaterThan(0);
  });
});
