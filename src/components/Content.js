import React from 'react'
import './content.css'

export default function Content() {
  return (
    <div className='prh'>
      <p>Welcome and thank you for posting your question here. There are a couple of things you can try to recover your lost work in Colab: Check Version History: Colab automatically saves different versions of your notebooks. Click on the three dots next to the notebook name and select "Revision history". You might be able to find a version from before you refreshed the notebook.Check Google Drive Trash: If you accidentally saved the refreshed notebook over the original one, it might be in your Google Drive trash. Go to your drive trash and see if you can find the notebook file.If neither of these options work, unfortunately, there's no guaranteed way to recover your lost work. </p>
    </div>
  )
}
