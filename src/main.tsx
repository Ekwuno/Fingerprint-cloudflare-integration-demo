import React from 'react'
import ReactDOM from 'react-dom/client'
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <FpjsProvider
    loadOptions={{
      apiKey: "oIN5cfgNvSfJlm9RuohN",
      scriptUrlPattern: "https://obinnaspeaks.dev/7IZum5pOeTViatvg/WlZKBOFVc98WS1xu?apiKey=<apiKey>&version=<version>&loaderVersion=<loaderVersion>",
      region: "eu",
      endpoint: "https://obinnaspeaks.dev/7IZum5pOeTViatvg/dP5UyyPLyKdSjnTy?region=eu"
    }}
  >
    <App />
    </FpjsProvider>
)
