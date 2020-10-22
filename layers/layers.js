var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tramosactualestramos_actuales_1 = new ol.format.GeoJSON();
var features_tramosactualestramos_actuales_1 = format_tramosactualestramos_actuales_1.readFeatures(json_tramosactualestramos_actuales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tramosactualestramos_actuales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tramosactualestramos_actuales_1.addFeatures(features_tramosactualestramos_actuales_1);
var lyr_tramosactualestramos_actuales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tramosactualestramos_actuales_1, 
                style: style_tramosactualestramos_actuales_1,
                interactive: true,
                title: '<img src="styles/legend/tramosactualestramos_actuales_1.png" /> tramos actuales tramos_actuales'
            });
var format_actuacionesFGC_2 = new ol.format.GeoJSON();
var features_actuacionesFGC_2 = format_actuacionesFGC_2.readFeatures(json_actuacionesFGC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_actuacionesFGC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_actuacionesFGC_2.addFeatures(features_actuacionesFGC_2);
var lyr_actuacionesFGC_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_actuacionesFGC_2, 
                style: style_actuacionesFGC_2,
                interactive: true,
                title: '<img src="styles/legend/actuacionesFGC_2.png" /> actuaciones FGC'
            });
var format_MejoradelsistemadeRodalies_3 = new ol.format.GeoJSON();
var features_MejoradelsistemadeRodalies_3 = format_MejoradelsistemadeRodalies_3.readFeatures(json_MejoradelsistemadeRodalies_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MejoradelsistemadeRodalies_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MejoradelsistemadeRodalies_3.addFeatures(features_MejoradelsistemadeRodalies_3);
var lyr_MejoradelsistemadeRodalies_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MejoradelsistemadeRodalies_3, 
                style: style_MejoradelsistemadeRodalies_3,
                interactive: true,
                title: '<img src="styles/legend/MejoradelsistemadeRodalies_3.png" /> Mejora del sistema de Rodalies'
            });

lyr_OSMStandard_0.setVisible(true);lyr_tramosactualestramos_actuales_1.setVisible(true);lyr_actuacionesFGC_2.setVisible(true);lyr_MejoradelsistemadeRodalies_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_tramosactualestramos_actuales_1,lyr_actuacionesFGC_2,lyr_MejoradelsistemadeRodalies_3];
lyr_tramosactualestramos_actuales_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id_tramo': 'id_tramo', 'codigo': 'codigo', 'tipo_tramo': 'tipo_tramo', 'tipotramoD': 'tipotramoD', 'ancho_via': 'ancho_via', 'ancho_viaD': 'ancho_viaD', 'electrific': 'electrific', 'electrifiD': 'electrifiD', 'estadofis': 'estadofis', 'estadofisD': 'estadofisD', 'n_vias': 'n_vias', 'n_viasD': 'n_viasD', 'situacion': 'situacion', 'situacionD': 'situacionD', 'red_tent': 'red_tent', 'red_tentD': 'red_tentD', 'uso_ppal': 'uso_ppal', 'uso_ppalD': 'uso_ppalD', 'titular': 'titular', 'titularD': 'titularD', 'fuente': 'fuente', 'fuenteD': 'fuenteD', 'fecha_alta': 'fecha_alta', 'id_lineafc': 'id_lineafc', 'nombre': 'nombre', 'tipo_linea': 'tipo_linea', 'tipo_lineD': 'tipo_lineD', 'fuente_l': 'fuente_l', 'fuente_lD': 'fuente_lD', });
lyr_actuacionesFGC_2.set('fieldAliases', {'id': 'id', });
lyr_MejoradelsistemadeRodalies_3.set('fieldAliases', {'id': 'id', });
lyr_tramosactualestramos_actuales_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'id_tramo': 'TextEdit', 'codigo': 'TextEdit', 'tipo_tramo': 'Range', 'tipotramoD': 'TextEdit', 'ancho_via': 'Range', 'ancho_viaD': 'TextEdit', 'electrific': 'Range', 'electrifiD': 'TextEdit', 'estadofis': 'Range', 'estadofisD': 'TextEdit', 'n_vias': 'Range', 'n_viasD': 'TextEdit', 'situacion': 'Range', 'situacionD': 'TextEdit', 'red_tent': 'Range', 'red_tentD': 'TextEdit', 'uso_ppal': 'Range', 'uso_ppalD': 'TextEdit', 'titular': 'Range', 'titularD': 'TextEdit', 'fuente': 'Range', 'fuenteD': 'TextEdit', 'fecha_alta': 'TextEdit', 'id_lineafc': 'TextEdit', 'nombre': 'TextEdit', 'tipo_linea': 'Range', 'tipo_lineD': 'TextEdit', 'fuente_l': 'Range', 'fuente_lD': 'TextEdit', });
lyr_actuacionesFGC_2.set('fieldImages', {'id': 'TextEdit', });
lyr_MejoradelsistemadeRodalies_3.set('fieldImages', {'id': 'TextEdit', });
lyr_tramosactualestramos_actuales_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id_tramo': 'no label', 'codigo': 'no label', 'tipo_tramo': 'no label', 'tipotramoD': 'no label', 'ancho_via': 'no label', 'ancho_viaD': 'no label', 'electrific': 'no label', 'electrifiD': 'no label', 'estadofis': 'no label', 'estadofisD': 'no label', 'n_vias': 'no label', 'n_viasD': 'no label', 'situacion': 'no label', 'situacionD': 'no label', 'red_tent': 'no label', 'red_tentD': 'no label', 'uso_ppal': 'no label', 'uso_ppalD': 'no label', 'titular': 'no label', 'titularD': 'no label', 'fuente': 'no label', 'fuenteD': 'no label', 'fecha_alta': 'no label', 'id_lineafc': 'no label', 'nombre': 'no label', 'tipo_linea': 'no label', 'tipo_lineD': 'no label', 'fuente_l': 'no label', 'fuente_lD': 'no label', });
lyr_actuacionesFGC_2.set('fieldLabels', {'id': 'no label', });
lyr_MejoradelsistemadeRodalies_3.set('fieldLabels', {'id': 'no label', });
lyr_MejoradelsistemadeRodalies_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});