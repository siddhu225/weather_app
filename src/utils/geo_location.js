// const request = require("request");

// const geocode = (address,callback)=>{

//   const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2lkZGh1MjI1IiwiYSI6ImNrMG5yN2pudjAya3YzbW1scHpob3MwdmEifQ.QSFWpbIGPreQH8EDd-SA2g'

//   request({url,json:true},(error,{body})=>{
//     if(error){
//       callback("There is a internet issue please check it...",undefined)
//     }else if(body.features.length === 0){
//       callback("I Think i didn't found any location...",undefined)
//     }else{
//       var latitude=body.features[0].center[1];
//       var longitude=body.features[0].center[0];
//       var place_name=body.features[0].place_name;
//       callback(undefined,{latitude,longitude,place_name});
//     }


//   })
// }

// module.exports=geocode