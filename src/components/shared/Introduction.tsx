import { ReactElement } from 'react'
import { Loader } from '@src/components/shared'

function Introduction({
  data,
  error
}: {
  data: Response
  error: boolean
}): ReactElement {
  return (
    <div>
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
        It is a personal <b className="text-yellow-400">Side Project</b>
        divided into several parts.
      </p>
      <p className="mt-2 text-lg leading-8 text-white">
        The first part consists in finding the word of the day of the Cemantix
        and Cemantle apps via a GithubActions automated brute force{' '}
        <b className="text-yellow-400">Python</b> script.
      </p>
      <p className="mt-2 text-lg leading-8 text-white">
        Then, all these data are stored in a{' '}
        <b className="text-yellow-400">Notion</b> database.
      </p>
      <p className="mt-2 text-lg leading-8 text-white">
        And finally, this app makes a visual restitution of the data for today.
      </p>
      <hr className="mt-10 mb-10 bg-white" />

      {!data && !error && <Loader />}
    </div>
  )
}

export default Introduction
