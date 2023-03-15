import { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import { Stats, Loader, Footer } from '@src/components/shared'

function App(): ReactElement {
  const apiUrl = import.meta.env.VITE_APP_API_BASE_URL
  const [data, setData] = useState<Response | undefined>(undefined)

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      const data: Response = response.data
      setData(data)
    })
  }, [])

  return (
    <>
      <div className="py-10 bg-white">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-semibold leading-7 text-indigo-600 lg:text-center">
              Cemantix UI
            </h1>
            <p className="mt-4 text-base font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-center">
              Daily recap of the famous Cemantix and Cemantle apps
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              It is a <b className="text-indigo-600">Side Project</b> in several
              parts.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              The first part consists in finding the word of the day of the
              Cemantix and Cemantle apps via a{' '}
              <b className="text-indigo-600">Python</b> script.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Then, all these data are stored in a{' '}
              <b className="text-indigo-600">Notion</b> database.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              And finally, this app will allow to make a visual restitution of
              the data.
            </p>
            <hr className="mt-10 bg-indigo-600" />
          </div>
          {!data && <Loader />}
          {data && (
            <>
              <Stats lastWord={data.cemantix.lastWord} app="Cemantix" />
              <hr className="mt-10 bg-indigo-600" />
              <Stats lastWord={data.cemantle.lastWord} app="Cemantle" />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
