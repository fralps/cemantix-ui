import { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import { Stats, NotionUrl, Loader } from '@src/components/shared'
import FadeIn from 'react-fade-in'

function App(): ReactElement {
  const apiUrl: string = import.meta.env.VITE_APP_API_BASE_URL
  const [data, setData] = useState<Response | undefined>(undefined)
  const [error, setError] = useState<boolean>(false)
  const containerHeight: string = data ? 'h-full' : 'h-screen'

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        const data: Response = response.data
        setData(data)
      })
      .catch(() => {
        setError(true)
      })
  }, [])

  return (
    <>
      <div className={`py-14 bg-white area ${containerHeight}`}>
        <ul className="circles">
          {Array.from(Array(10), (e, i) => {
            return <li key={i}></li>
          })}
        </ul>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <FadeIn className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-semibold leading-7 text-yellow-400 uppercase duration-100 lg:text-center animate-bounce">
              Cemantix UI
            </h1>
            <div className="mt-2 text-xs italic text-gray-300 lg:text-center">
              Developed by Fralps
            </div>
            <p className="mt-4 text-base font-bold tracking-tight text-gray-200 sm:text-2xl lg:text-center">
              Daily recap of the famous Cemantix and Cemantle apps
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              It is a personal <b className="text-yellow-400">Side Project</b>{' '}
              divided into several parts.
            </p>
            <p className="mt-2 text-lg leading-8 text-white">
              The first part consists in finding the word of the day of the
              Cemantix and Cemantle apps via a GithubActions automated brute
              force <b className="text-yellow-400">Python</b> script.
            </p>
            <p className="mt-2 text-lg leading-8 text-white">
              Then, all these data are stored in a{' '}
              <b className="text-yellow-400">Notion</b> database.
            </p>
            <p className="mt-2 text-lg leading-8 text-white">
              And finally, this app makes a visual restitution of the data for
              today.
            </p>
            <hr className="mt-10 mb-10 bg-white" />
          </FadeIn>
          {!data && !error && <Loader />}

          {error && (
            <div className="p-10 bg-red-300 rounded-lg drop-shadow-2xl">
              <p className="font-bold text-white">
                You are not authorized to make a request on this API
              </p>
            </div>
          )}

          {data && (
            <FadeIn>
              <Stats fullData={data.cemantix} app="Cemantix" />
              <Stats fullData={data.cemantle} app="Cemantle" />
              <hr className="mb-10 bg-white" />
              <div className="p-10 bg-white rounded-lg cursor-pointer drop-shadow-2xl">
                <p className="mb-6 text-2xl">
                  Full data sets available on{' '}
                  <span className="text-indigo-600">Notion</span>
                </p>
                <NotionUrl
                  url="https://bead-cylinder-699.notion.site/fe486d80a5994c02af48af8dbe3d4f96?v=59ad4e14485d477da756a04999190730"
                  app="Cemantix"
                />
                <NotionUrl
                  url="https://bead-cylinder-699.notion.site/6440b74a3e6f4d9c9819e0e40eb6613d?v=4db027d34f11496ca09786f996703914"
                  app="Cemantle"
                />
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </>
  )
}

export default App
