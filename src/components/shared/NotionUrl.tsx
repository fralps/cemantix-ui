import { ReactElement } from 'react'
import { LinkIcon } from '@heroicons/react/24/solid'

function NotionUrl({ url, app }: { url: string; app: string }): ReactElement {
  return (
    <div className="flex items-center mb-4">
      <LinkIcon className="w-6 h-6 mr-2 text-indigo-600" />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl text-indigo-600"
      >
        {app} full data set
      </a>
    </div>
  )
}

export default NotionUrl
