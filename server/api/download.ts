import { defineEventHandler, getRequestHeaders } from 'h3'
import https from 'https'
import { IncomingMessage } from 'http'
import { Readable } from 'stream'

export default defineEventHandler((event) => {
  //  console.log('New request: ' + event.path)

  // Get all request headers
  const headers = getRequestHeaders(event)

  // Log all headers for debugging purposes
  //console.log('All request headers:', headers);

  const secret = headers['authorization']

  // if send not send authorization
  if (!secret) {
    return {
      status: 'error',
      message: 'Invalid or missing Authorization header',
    }
  }


  // if send authorization
  const authorization = secret?.split(' ')
  const auth = authorization[1] === '123456'

  if (!auth || !secret?.startsWith('Bearer ')) {
    return {
      status: 'error',
      message: 'Invalid or missing Authorization header',
    }
  }

  return {
    //     status: 'success',
    message: 'Authorization header logged successfully',
  }

  // URL of the file to download
  const fileUrl = 'https://gpnotes.droppages.com/geraldox.proxyfiles.com/files/geraldo_resume_ptbr-txt.pdf'

  console.log(fileUrl)
})
