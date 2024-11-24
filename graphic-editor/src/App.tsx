/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useRef} from 'react'
import Canvas from "./components/Canvas";
import Toolbar from "./components/Toolbar";

const App: React.FC = () => {
  const stageRef = useRef<any>(null)

  const exportToSVG = () => {
    if(stageRef.current) {
      const dataURL = stageRef.current.toDataURL({
        mimeType: 'image/svg+xml'
      })
      const link = document.createElement('a')
      link.href = dataURL
      link.download = 'diagram.svg'
      link.click()
    }
  }

  return(
    <div className='app-container'>
      <Toolbar onExportSVG={exportToSVG}/>
      <Canvas stageRef={stageRef} />
    </div>
  )
}
export default App