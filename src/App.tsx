import { ReactElement } from 'react'
import logo from '@assets/logos/logo.svg'

function App(): ReactElement {
  return (
    <div className="p-20 border shadow-xl border-gray-50 rounded-xl">
      <header>
        <div className="flex justify-center">
          <img src={logo} className="w-32 h-32" alt="React logo" />
        </div>
        <p className="pb-3 text-2xl">Hello Vite + React + Tailwind CSS!</p>
      </header>
    </div>
  )
}

export default App
