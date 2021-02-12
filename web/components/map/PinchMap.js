import React, { Component } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import Map from './Map'
import { themenpfade, ateliers, projects } from './data'
import { AiOutlineFullscreenExit } from 'react-icons/ai'
import { MdAdd, MdDirectionsWalk, MdRemove } from 'react-icons/md'
import MapSideBar from './MapSideBar.js'
import MapSelectorItem from './MapSelectorItem'

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
              <div className='flex flex-row-reverse justify-between  lg:inline'>
                {/* Tools */}
                <div className='tools lg:absolute flex flex-col lg:top-0 lg:right-0 z-40'>
                  <button onClick={resetTransform}>
                    <AiOutlineFullscreenExit className='bg-white h-10 lg:h-12 w-10 lg:w-12 mb-2 lg:mb-4 ' />
                  </button>
                  <button onClick={zoomIn}>
                    <MdAdd
                      className='bg-white
                     h-10 lg:h-12 w-10 lg:w-12 mb-1 lg:mb-0 lg:border-b-2 lg:border-black'
                    />
                  </button>
                  <button onClick={zoomOut}>
                    <MdRemove className='bg-white h-10 lg:h-12 w-10 lg:w-12 mb-0 lg:mb-2' />
                  </button>
                </div>
                {/* Selectors */}
                <ul className='lg:absolute lg:top-0 '>
                  <li className='mb-1 lg:mb-2'>
                    <button
                      onClick={() =>
                        this.setState({ currentLayer: 'themenpfade' })
                      }
                      className='focus:outline-none'
                    >
                      <MapSelectorItem
                        text='Themenpfade'
                        active={
                          this.state.currentLayer == 'themenpfade'
                            ? true
                            : false
                        }
                      />
                    </button>
                  </li>
                  <li className='mb-1 lg:mb-2'>
                    <button
                      onClick={() =>
                        this.setState({ currentLayer: 'ateliers' })
                      }
                      className='focus:outline-none'
                    >
                      <MapSelectorItem
                        text='Ateliers'
                        active={
                          this.state.currentLayer == 'ateliers' ? true : false
                        }
                      />
                    </button>
                  </li>
                  <li className='mb-1 lg:mb-2'>
                    <button
                      onClick={() =>
                        this.setState({ currentLayer: 'projekte' })
                      }
                      className='focus:outline-none'
                    >
                      <MapSelectorItem
                        text='Projekte'
                        active={
                          this.state.currentLayer == 'projekte' ? true : false
                        }
                      />
                    </button>
                  </li>
                </ul>
              </div>
              {this.state.sideBarVisible && (
                <MapSideBar
                  mappoint={this.state.currentMapPoint}
                  onSidebarToggle={this.handleSideBarVisibility}
                  layer={this.state.currentLayer}
                />
              )}
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    )
  }
}

export default PinchMap
