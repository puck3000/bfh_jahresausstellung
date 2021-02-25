import React, { Component } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import Map from './Map'
import { AiOutlineFullscreenExit } from 'react-icons/ai'
import { MdAdd, MdRemove, MdArrowForward } from 'react-icons/md'
import MapSideBar from './MapSideBar.js'
import Div100vh from 'react-div-100vh'
import MapLegende from './MapLegende'
import Link from 'next/link'

class PinchMap extends Component {
  render() {
    return (
      <Div100vh>
        <div className='fixed h-full w-screen'>
          <div className='text-white fixed  z-40 mt-20 ml-2 lg:ml-4 2xl:ml-6 2xl:mt-32 mb-two'>
            <h1 className='mb-2 text-big lg:text-big-dt'>
              Neue Räume
              <br />
              Stadt und Land in Huttwil
            </h1>
            <h2 className=''>Jahresausstellung Architektur 2021</h2>
            <Link href='/veranstaltungen'>
              <a className='text-small lg:text-small-dt'>
                <MdArrowForward className='inline mr-2' />
                Zum Begrüssungsvideo von Daniel Boermann
              </a>
            </Link>
          </div>
          <TransformWrapper defaultScale={1}>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <TransformComponent>
                  <Map />
                </TransformComponent>
                {/* Tools */}
                <div className='hidden tools absolute lg:flex flex-col lg:bottom-48 lg:left-4 2xl:left-6 z-40'>
                  <button onClick={resetTransform}>
                    <AiOutlineFullscreenExit className='text-white h-8 lg:h-12 w-8 lg:w-12 mb-2 lg:mb-4 ' />
                  </button>
                  <button onClick={zoomIn}>
                    <MdAdd
                      className='text-white
                    h-8 lg:h-12 w-8 lg:w-12 mb-0 border-2 border-white'
                    />
                  </button>
                  <button onClick={zoomOut}>
                    <MdRemove className='text-white h-8 lg:h-12 w-8 lg:w-12 mb-0 lg:mb-2  border-2 border-t-0 border-white ' />
                  </button>
                </div>
                <MapLegende />

                <MapSideBar />
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
      </Div100vh>
    )
  }
}

export default PinchMap
