import { createContext, useEffect, useState } from 'react'

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext(null)

function CloudinaryUploadWidget({ uwConfig, setPublicId }) {
  const [loaded, setLoaded] = useState(false)
  const [widget, setWidget] = useState(null)

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById('uw')
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement('script')
        script.setAttribute('async', '')
        script.setAttribute('id', 'uw')
        script.src = 'https://upload-widget.cloudinary.com/global/all.js'
        script.addEventListener('load', () => setLoaded(true))
        document.body.appendChild(script)
      } else {
        // If already loaded, update the state
        setLoaded(true)
      }
    }
  }, [loaded])

  useEffect(() => {
    if (loaded && !widget) {
      const myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === 'success') {
            console.log('Done! Here is the image info: ', result.info)
            setPublicId(result.info.public_id)
          }
        }
      )
      setWidget(myWidget)
    }
  }, [loaded, widget, uwConfig, setPublicId])

  const openWidget = (e) => {
    e.preventDefault()
    if (widget) {
      widget.open()
    }
  }

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={openWidget}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  )
}

export default CloudinaryUploadWidget
export { CloudinaryScriptContext }
