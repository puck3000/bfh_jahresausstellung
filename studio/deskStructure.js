import S from '@sanity/desk-tool/structure-builder'
import {AiOutlineHome, AiOutlineTeam} from 'react-icons/ai'
import {BiLayer,BiGridAlt,BiMapPin} from 'react-icons/bi'
import {GiPathDistance} from 'react-icons/gi'
import {GiMultipleTargets} from 'react-icons/gi'





export default () =>
  S.list()
    .title('Content')
    .items(
        [
            S.listItem()
                .title('Home')
                .icon(AiOutlineHome)
                .child(
                    S.document()
                        .schemaType('home')
                        .documentId('home')
                        
                ),
            S.divider(),
            S.listItem()
                .title('Hintergrund')
                .icon(BiLayer)
                .child(
                    S.documentList()
                    .schemaType('hintergrund')
                    .title('Hintergrund')
                    .filter('_type == "hintergrund"')
                ),
            S.divider(),
            S.listItem()
                .title('Themenpfad Übersicht')
                .icon(BiGridAlt)
                .child(
                    S.document()
                        .schemaType('themenpfadeIndex')
                        .documentId('themenpfadeIndex')
                ),
            S.listItem()
                .title('Themenpfade')
                .icon(GiPathDistance)
                .child(
                    S.documentList()
                    .schemaType('themenpfad')
                    .title('Themenpfade')
                    .filter('_type == "themenpfad"')
                ),
            S.divider(),
            S.listItem()
                .title('Ateliers')
                .icon(GiMultipleTargets)
                .child(
                    S.documentList()
                    .schemaType('atelier')
                    .title('Ateliers')
                    .filter('_type == "atelier"')
                ),
            S.divider(),
            S.listItem()
                .title('Projekte Übersicht')
                .icon(BiGridAlt)
                .child(
                    S.document()
                        .schemaType('projekteIndex')
                        .documentId('projekteIndex')
                ),
            S.listItem()
                .title('Projekte')
                .icon(BiMapPin)
                .child(
                    S.documentList()
                    .schemaType('projekt')
                    .title('Projekte')
                    .filter('_type == "projekt"')
                    .defaultOrdering([{field: 'content.titel', direction: 'desc'}]) 

                ),
            S.divider(),
            S.listItem()
                .title('Veranstaltungen')
                .icon(AiOutlineTeam)
                .child(
                    S.document()
                        .schemaType('veranstaltungen')
                        .documentId('veranstaltungen')
                ),
            S.listItem()
                .title('Style Guide')
                .child(
                    S.document()
                        .schemaType('styleGuide')
                        .documentId('styleGuide')
                ),

                    
            // ...S.documentTypeListItems().filter(listItem => !['home', 'hintergrund','themenpfadeIndex', 'themenpfad', 'atelier', 'projekteIndex', 'projekt'].includes(listItem.getId()))
        ]
    )