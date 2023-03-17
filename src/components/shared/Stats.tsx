import { ReactElement } from 'react'

function Stats({
  fullData,
  app
}: {
  fullData: Data
  app: string
}): ReactElement {
  const parsedNumber: string = fullData.requestsNumber
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return (
    <div className="py-20 mb-10 bg-white rounded-lg cursor-pointer drop-shadow-2xl sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <dl className="grid grid-cols-1 text-center gap-y-16 gap-x-8 lg:grid-cols-3">
          <div className="flex flex-col max-w-xs mx-auto gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              {app} last word from <b>{fullData.date}</b>
            </dt>
            <dd className="order-first text-2xl font-semibold tracking-tight text-indigo-600 capitalize sm:text-4xl">
              {fullData.lastWord}
            </dd>
          </div>

          <div className="flex flex-col max-w-xs mx-auto gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Number of requests for last word
            </dt>
            <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              {parsedNumber}
            </dd>
          </div>

          <div className="flex flex-col max-w-xs mx-auto gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Time to find the word
            </dt>
            <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              {fullData.elapsedTime}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Stats
