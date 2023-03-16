import { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import { Stats, Loader, Footer } from '@src/components/shared'

function App(): ReactElement {
  const apiUrl: string = import.meta.env.VITE_APP_API_BASE_URL
  const [data, setData] = useState<Response | undefined>(undefined)
  const containerHeight: string = data ? 'h-full' : 'h-screen'

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      const data: Response = response.data
      setData(data)
    })
  }, [])

  return (
    <>
      <div className={`py-20 bg-white area ${containerHeight}`}>
        <ul className="circles">
          {Array.from(Array(10), (e, i) => {
            return <li key={i}></li>
          })}
        </ul>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-semibold leading-7 text-yellow-400 lg:text-center">
              Cemantix UI
            </h1>
            <p className="mt-4 text-base font-bold tracking-tight text-gray-200 sm:text-2xl lg:text-center">
              Daily recap of the famous Cemantix and Cemantle apps
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              It is a <b className="text-yellow-400">Side Project</b> in several
              parts.
            </p>
            <p className="mt-2 text-lg leading-8 text-white">
              The first part consists in finding the word of the day of the
              Cemantix and Cemantle apps via a{' '}
              <b className="text-yellow-400">Python</b> script.
            </p>
            <p className="mt-2 text-lg leading-8 text-white">
              Then, all these data are stored in a{' '}
              <b className="text-yellow-400">Notion</b> database.
            </p>
            <p className="mt-2 text-lg leading-8 text-white">
              And finally, this app will allow to make a visual restitution of
              the data.
            </p>
            <hr className="mt-10 mb-10 bg-white" />
          </div>
          {!data && <Loader />}
          {data && (
            <>
              <Stats lastWord={data.cemantix.lastWord} app="Cemantix" />
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
