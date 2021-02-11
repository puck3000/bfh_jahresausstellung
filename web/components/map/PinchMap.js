import React, { Component } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import Map from './Map'
import { themenpfade, ateliers, projects } from './data'
import { MdAdd, MdClose, MdRemove } from 'react-icons/md'
import MapSideBar from './MapSideBar.js'

class PinchMap extends Component {
  state = {
    themenpfade: themenpfade,
    ateliers: ateliers,
    projects: projects,
    currentLayer: 'themenpfade',
    currentMapPoint: {},
    sideBarVisible: false,
  }
  handleSideBarVisibility = (sidebarVisibility) => {
    this.setState(() => ({
      sideBarVisible: sidebarVisibility,
    }))
  }
  handleCurrentMapPoint = (updatedMapMpoint) => {
    this.setState((state) => ({
      ...state,
      currentMapPoint: updatedMapMpoint,
    }))
  }

  render() {
    return (
      <div className='w-full relative'>
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={200}
          defaultPositionY={100}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              {/* Map Component */}
              <TransformComponent>
                {/* <h2 className='w-full bg-blue-400'>hello</h2> */}
                <Map
                  dataPoints={this.state}
                  onSidebarToggle={this.handleSideBarVisibility}
                  onMapPointSelected={this.handleCurrentMapPoint}
                />
              </TransformComponent>
              {/* Tools */}
              <div className='tools absolute flex flex-col top-2 right-2 lg:top-4 lg:right-4'>
                <button onClick={resetTransform}>
                  <MdClose className='bg-white h-6 w-6 mb-2 lg:h-8 lg:w-8 lg:mb-4' />
                </button>
                <button onClick={zoomIn}>
                  <MdAdd className='bg-white h-6 w-6 mb-1 lg:h-8 lg:w-8 lg:mb-4' />
                </button>
                <button onClick={zoomOut}>
                  <MdRemove className='bg-white h-6 w-6 mb-1 lg:h-8 lg:w-8 lg:mb-2' />
                </button>
              </div>
              {/* Selectors */}
              <ul className='absolute top-0'>
                <li className='text-white'>
                  <button
                    onClick={() =>
                      this.setState({ currentLayer: 'themenpfade' })
                    }
                  >
                    Themenpfade
                  </button>
                </li>
                <li className='text-white'>
                  <button
                    onClick={() => this.setState({ currentLayer: 'ateliers' })}
                  >
                    Ateliers
                  </button>
                </li>
                <li className='text-white'>
                  <button
                    onClick={() => this.setState({ currentLayer: 'projekte' })}
                  >
                    Projekte
                  </button>
                </li>
              </ul>
              {this.state.sideBarVisible && (
                <MapSideBar mappoint={this.state.currentMapPoint} />
              )}
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    )
  }
}

export default PinchMap
