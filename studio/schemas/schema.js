// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import linkedpic from './objects/linkedpic'
import gallery from './objects/gallery'
import content from './objects/content'
import textandimage from './objects/textandimage'
import section from './objects/section'
import lauftext from './objects/lauftext'

import projekt from './documents/projekt'
import atelier from './documents/atelier'
import role from './documents/role'
import themenpfad from './documents/themenpfad'
import pic from './objects/pic'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    projekt,
    atelier,
    themenpfad,
    role,
    linkedpic,
    gallery,
    content,
    lauftext,
    textandimage,
    section,
    pic
  ]),
})
