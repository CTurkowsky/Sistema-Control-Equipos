import { Navigate, Route, Routes } from 'react-router-dom';
import { EquipoInformaticoPage } from '../Pages/EquipoInformaticoPage';
export const EquipoInformaticoRoutes = () => {
  return (
  <Routes>
    <Route path="/" element= {<EquipoInformaticoPage/>}/>
    <Route path="/*" element= {<Navigate to="/"/>}/>
  </Routes>
  )
}