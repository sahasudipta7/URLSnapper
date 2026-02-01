import { getLongUrl, storeClicks } from '@/db/apiUrls'
import useFetch from '@/hooks/use-fetch'
import React from 'react'
import { useParams } from 'react-router-dom'

const RedirectLink = () => {
  const id = useParams()
  const {loading, data, fn} = useFetch(getLongUrl, id)

  const {loading:loadingStats, fn:fnStats} = useFetch(storeClicks, {
    id: data?.id,
    originalUrl: data?.original_url
  })

  return (
    <div>
      RedirectLink
    </div>
  )
}

export default RedirectLink
