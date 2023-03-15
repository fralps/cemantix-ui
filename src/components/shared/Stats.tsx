import { ReactElement } from 'react'

function Stats({
  lastWord,
  app
}: {
  lastWord: string
  app: string
}): ReactElement {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <dl className="grid grid-cols-1 text-center gap-y-16 gap-x-8 lg:grid-cols-3">
          <div className="flex flex-col max-w-xs mx-auto gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              {app} last word
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {lastWord}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Stats
