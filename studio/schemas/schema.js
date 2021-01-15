// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


import home from './documents/home'
import projekt from './documents/projekt'
import atelier from './documents/atelier'
import themenpfad from './documents/themenpfad'
import pic from './objects/pic'
import linkedpic from './objects/linkedpic'
import gallery from './objects/gallery'
import content from './objects/content'
import textandimage from './objects/textandimage'
import section from './objects/section'
import lauftext from './objects/lauftext'
import inhalt from './objects/inhalt'
import anchor from './objects/anchor'
import horzline from './objects/horzline'
import images from './objects/images'
import pages from './documents/pages'
import hintergrund from './documents/hintergrund'
import settings from './documents/settings'
import themenpfadeIndex from './documents/themenpfadeIndex'
import projekteIndex from './documents/projekteIndex'
import veranstaltungen from './documents/veranstaltungen'
import styleGuide from './documents/styleGuide'
import metatext from './objects/metatext'
import slideshow from './objects/slideshow'
import teammitglied from './objects/teammitglied'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    home,
    hintergrund,
    themenpfad,
    atelier,
    projekt,
    linkedpic,
    gallery,
    content,
    lauftext,
    textandimage,
    section,
    pic,
    inhalt,
    anchor,
    horzline,
    images,
    pages,
    settings,
    themenpfadeIndex,
    projekteIndex,
    veranstaltungen,
    styleGuide,
    metatext,
    slideshow,
    teammitglied
  ]),
})
