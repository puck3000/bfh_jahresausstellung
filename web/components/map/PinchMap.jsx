import React, { Component } from 'react'

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import Map from './Map'
import { themenpfade, ateliers, projects } from './data'

class PinchMap extends Component {
  state = {
    themenpfade: themenpfade,
    ateliers: ateliers,
    projects: projects,
  }

  render() {
    return (
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={200}
        defaultPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            {/* Tools */}
            <div className='tools'>
              <button onClick={zoomIn}>+</button>
              <button onClick={zoomOut}>-</button>
              <button onClick={resetTransform}>x</button>
            </div>
            {/* Selectors */}
            <ul>
              <li>
                <button>Themenpfade</button>
              </li>
              <li>
                <button>Ateliers</button>
              </li>
              <li>
                <button>Projekte</button>
              </li>
            </ul>
            {/* Map Component */}
            <TransformComponent>
              <div className=''>
                <Map dataPoints={this.state} />
              </div>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    )
  }
}

export default PinchMap
