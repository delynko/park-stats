$("#park-id").submit((e) => {
    e.preventDefault();
    const park_id = $("#prop-id").val()
    const lbs_url = `https://services2.arcgis.com/23RzpZFMLfrk9IGV/arcgis/rest/services/LandBoundaries/FeatureServer/0/query?where=PROPERTY_ASSOCIATION_FK+%3D+${park_id}&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=SUM_VERIFIED_ACREAGE%2C+PARK_NAME&returnHiddenFields=false&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=vjlAnCH52w_Mz0OpBmjZhBlX31eA02fiIL6Al8AHchHR5VAkndHVSNIBbJ8x6ZiTA1LGYuKhztyZBcCzpEgsVlIpWdLpgMmcLeFOZdVUeFgzf5edLu8AcUnNjMdzyX1giWqhIZoyzn3P02WnJHALSpsEd1jW36slJ3PLX24l4eF-w06fJLGd3wAoS9ODGynwzcwToWIsHX_jQ60-MGMNWwaRJ_LprTnt1kpySe5pX_qhd06jccjV2yiFYbKtRhSQ`
    const tr_url = `https://services2.arcgis.com/23RzpZFMLfrk9IGV/arcgis/rest/services/Trails/FeatureServer/0/query?where=PROPERTY_ASSOCIATION_FK+%3D+${park_id}&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_StatuteMile&returnGeodetic=false&outFields=MILEAGE&returnHiddenFields=false&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=%5B%0D%0A++%7B%0D%0A++++%22statisticType%22%3A+%22sum%22%2C%0D%0A++++%22onStatisticField%22%3A+%22MILEAGE%22%2C%0D%0A++++%22outStatisticFieldName%22%3A+%22MILEAGE%22%0D%0A++%7D%0D%0A%5D&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=dEn-l-AEZxY8Ea4AHpGVnrVtkTmQyYNYqBTpr-FCS_rVSTRJyu3PJWkV_g2wSbpXFK5gU-tmh3jCH7QICJZ1VXk252YuGgYFdEl5NVZmL2yvMkC6zGPj2I981IiBp5OdurlUz0RWHVTDPc0rTI0_k-_iTC2vSD1mf0C8KVDrOxJRUVAs7ieSSotHhlzhfWffkTzg6uGY9bg1aRC86lDU_5Z28gl0bOoJIXjtUukSEYY8kWaw4g23GqVRbS1STSgO`


    $.get(lbs_url, (data) => {
        let d = JSON.parse(data)
        $("#park-acreage").html(`Park Acreage: ${d.features[0].attributes.SUM_VERIFIED_ACREAGE.toFixed(0)}`);
        $("#temp").html(d.features[0].attributes.PARK_NAME);
    });

    $.get(tr_url, (data) => {
        let d = JSON.parse(data)
        $("#park-mileage").html(`Park Mileage: ${d.features[0].attributes.MILEAGE.toFixed(1)}`);
    });

});
