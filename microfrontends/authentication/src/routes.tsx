import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'
import { Cellphone, Code, NotFound } from '~containers'

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="entrar" element={<Cellphone />} />
      <Route path="codigo" element={<Code />} />
      <Route path="*" element={<NotFound />} />
    </ReactRouterRoutes>
  )
}
