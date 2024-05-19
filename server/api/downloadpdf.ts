// /server/api/download.ts
import { defineEventHandler, getRequestHeaders, sendStream } from 'h3';
import https from 'https';
import { IncomingMessage } from 'http';
import { Readable } from 'stream';

export default defineEventHandler(async (event) => {

  // URL of the file to download
  const fileUrl = 'https://gpnotes.droppages.com/geraldox.proxyfiles.com/files/geraldo_resume_ptbr-txt.pdf';

  // Create a promise to handle the HTTPS request
  const fetchFile = (url: string): Promise<IncomingMessage> => {
    return new Promise((resolve, reject) => {
      https.get(url, (response) => {
        if (response.statusCode !== 200) {
          return reject(new Error(`Failed to fetch file. Status code: ${response.statusCode}`));
        }
        resolve(response);
      }).on('error', (err) => {
        reject(err);
      });
    });
  };

  try {
    // Fetch the file
    const response = await fetchFile(fileUrl);

    // Set the correct headers for the response
    event.res.setHeader('Content-Disposition', 'attachment; filename="geraldo_resume_ptbr-txt.pdf"');
    event.res.setHeader('Content-Type', 'application/pdf');

    // Stream the file to the response
    const stream = response as Readable;
    return sendStream(event, stream);
  } catch (error) {
    console.error('Error fetching the file:', error);
    return {
      status: 'error',
      message: 'Failed to download the file'
    };
  }
});
