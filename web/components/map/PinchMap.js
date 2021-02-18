import React, { Component } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import Map from './Map'
import { AiOutlineFullscreenExit } from 'react-icons/ai'
import { MdAdd, MdDirectionsWalk, MdRemove } from 'react-icons/md'
import MapSideBar from './MapSideBar.js'
import MapSelectorItem from './MapSelectorItem'

class PinchMap extends Component {
  render() {
    return (
      <div className='fixed h-screen w-screen'>
        <h1 className='text-white fixed  z-40 mt-20 ml-2 lg:ml-4 mb-two'>
          Neue Räume
          <br />
          Stadt und Land in Huttwil
        </h1>
        <TransformWrapper
          defaultScale={1}
          // options={{
          //   wrapperClass: 'my-wrapper-class',
          //   contentClass: 'my-content-class',
          // }}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              {/* Map Component */}
              <TransformComponent>
                <Map />
              </TransformComponent>
              <div className=''>
                {/* Tools */}
                <div className='tools absolute flex flex-col top-4 right-4 lg:top-auto lg:right-auto lg:bottom-4 lg:left-4 z-40'>
                  <button onClick={resetTransform}>
                    <AiOutlineFullscreenExit className='text-white h-8 lg:h-12 w-8 lg:w-12 mb-2 lg:mb-4 ' />
                  </button>
                  <button onClick={zoomIn}>
                    <MdAdd
                      className='text-white
                      h-8 lg:h-12 w-8 lg:w-12 mb-1 lg:mb-0 border-2 border-white'
                    />
                  </button>
                  <button onClick={zoomOut}>
                    <MdRemove className='text-white h-8 lg:h-12 w-8 lg:w-12 mb-0 lg:mb-2 ' />
                  </button>
                </div>
              </div>

              <MapSideBar />
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    )
  }
}

export default PinchMap
