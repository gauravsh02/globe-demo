import "./styles.css";
import Globe from "react-globe.gl";

import { useRef, useState, useEffect } from "react";
export default function GlobeComp({ sel }) {

  const globeEl = useRef();
  // const store = data[sel];
  const store = {"loc":[{"name":"Angul, IN","lat":20.7851,"lng":85.0897,"size":"0.0068","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0748","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.4762","color":"white"},{"name":"Kochi, IN","lat":9.9185,"lng":76.2558,"size":"0.0068","color":"white"},{"name":"Delhi, IN","lat":28.6542,"lng":77.2373,"size":"0.2109","color":"white"},{"name":"Lucknow, IN","lat":26.8756,"lng":80.9115,"size":"0.0748","color":"white"},{"name":"Chennai, IN","lat":12.8996,"lng":80.2209,"size":"0.0068","color":"white"},{"name":"Delhi, IN","lat":28.6542,"lng":77.2373,"size":"1.0000","color":"white"},{"name":"Mohali, IN","lat":30.674,"lng":76.7249,"size":"0.0136","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0340","color":"white"},{"name":"Mountain View, US","lat":37.422,"lng":-122.084,"size":"0.2381","color":"white"},{"name":"Chennai, IN","lat":12.8996,"lng":80.2209,"size":"0.1497","color":"white"},{"name":"Bareilly, IN","lat":28.3535,"lng":79.4137,"size":"0.0068","color":"white"},{"name":"Ghaziabad, IN","lat":28.665,"lng":77.4477,"size":"0.0068","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.1156","color":"white"},{"name":"Shimla, IN","lat":31.1034,"lng":77.1659,"size":"0.0204","color":"white"},{"name":"Ashburn, US","lat":39.0438,"lng":-77.4874,"size":"0.1156","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0680","color":"white"},{"name":"Visakhapatnam, IN","lat":17.6774,"lng":83.2036,"size":"0.0136","color":"white"},{"name":"Bengaluru, IN","lat":12.9634,"lng":77.5855,"size":"0.9252","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0204","color":"white"},{"name":"Cuttack, IN","lat":20.4659,"lng":85.8822,"size":"0.0136","color":"white"},{"name":"Indore, IN","lat":22.717,"lng":75.8337,"size":"0.0272","color":"white"},{"name":"Delhi, IN","lat":28.6542,"lng":77.2373,"size":"0.1837","color":"white"},{"name":"Gorakhpur, IN","lat":26.7631,"lng":83.3729,"size":"0.0272","color":"white"},{"name":"Agartala, IN","lat":23.8356,"lng":91.2836,"size":"0.0068","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.3265","color":"white"},{"name":"Lucknow, IN","lat":26.8756,"lng":80.9115,"size":"0.1837","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0204","color":"white"},{"name":"Patna, IN","lat":25.5908,"lng":85.1348,"size":"0.1224","color":"white"},{"name":"Lucknow, IN","lat":26.8756,"lng":80.9115,"size":"0.0612","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0884","color":"white"},{"name":"Guwahati, IN","lat":26.1206,"lng":91.6523,"size":"0.0204","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0068","color":"white"},{"name":"Guwahati, IN","lat":26.1206,"lng":91.6523,"size":"0.0612","color":"white"},{"name":"Malegaon, IN","lat":20.5493,"lng":74.5309,"size":"0.0068","color":"white"},{"name":"Clifton, US","lat":40.8364,"lng":-74.1403,"size":"0.0068","color":"white"},{"name":"Dammam, SA","lat":26.4336,"lng":50.1116,"size":"0.0136","color":"white"},{"name":"Jaipur, IN","lat":26.9525,"lng":75.7105,"size":"0.0068","color":"white"},{"name":"Chennai, IN","lat":12.8996,"lng":80.2209,"size":"0.0612","color":"white"},{"name":"Kolkata, IN","lat":22.5732,"lng":88.4334,"size":"0.0136","color":"white"},{"name":"Quincy, US","lat":47.233,"lng":-119.852,"size":"0.0408","color":"white"},{"name":"Bhubaneswar, IN","lat":20.2706,"lng":85.8334,"size":"0.2857","color":"white"},{"name":"Nagpur, IN","lat":21.1161,"lng":79.0706,"size":"0.0272","color":"white"},{"name":"Shimla, IN","lat":31.1034,"lng":77.1659,"size":"0.0136","color":"white"},{"name":"Pune, IN","lat":18.6161,"lng":73.7286,"size":"0.0204","color":"white"},{"name":"Indore, IN","lat":22.717,"lng":75.8337,"size":"0.0884","color":"white"},{"name":"Jaipur, IN","lat":26.9525,"lng":75.7105,"size":"0.1156","color":"white"},{"name":"New York, US","lat":40.7123,"lng":-74.0068,"size":"0.0068","color":"white"},{"name":"Delhi, IN","lat":28.6542,"lng":77.2373,"size":"0.0068","color":"white"},{"name":"San Francisco, US","lat":37.7308,"lng":-122.3838,"size":"0.0340","color":"white"},{"name":"Lucknow, IN","lat":26.8756,"lng":80.9115,"size":"0.1361","color":"white"},{"name":"Ahmedabad, IN","lat":23.0276,"lng":72.5871,"size":"0.1361","color":"white"},{"name":"Tirupur, IN","lat":11.1424,"lng":77.3422,"size":"0.0068","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0204","color":"white"},{"name":"Amin, IN","lat":29.9072,"lng":76.8709,"size":"0.0340","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.1973","color":"white"},{"name":"Jaipur, IN","lat":26.9525,"lng":75.7105,"size":"0.0612","color":"white"},{"name":"Lucknow, IN","lat":26.8756,"lng":80.9115,"size":"0.0748","color":"white"},{"name":"Brampton, CA","lat":43.6445,"lng":-79.7755,"size":"0.0068","color":"white"},{"name":"Riyadh, SA","lat":24.6869,"lng":46.7224,"size":"0.0408","color":"white"},{"name":"Bhubaneswar, IN","lat":20.2706,"lng":85.8334,"size":"0.0476","color":"white"},{"name":"Bhubaneswar, IN","lat":20.2706,"lng":85.8334,"size":"0.0068","color":"white"},{"name":"Jaipur, IN","lat":26.9525,"lng":75.7105,"size":"0.0544","color":"white"},{"name":"Portland, US","lat":45.5235,"lng":-122.676,"size":"0.0272","color":"white"},{"name":"Dhanbad, IN","lat":23.8006,"lng":86.4283,"size":"0.0136","color":"white"},{"name":"Sangli, IN","lat":16.8564,"lng":74.5571,"size":"0.0068","color":"white"},{"name":"Muscat, OM","lat":23.6182,"lng":58.5945,"size":"0.0204","color":"white"},{"name":"Navi Mumbai, IN","lat":19.136,"lng":73.0039,"size":"0.0748","color":"white"},{"name":"Kochi, IN","lat":9.9185,"lng":76.2558,"size":"0.0068","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0408","color":"white"},{"name":"Chicago, US","lat":41.8819,"lng":-87.6278,"size":"0.0136","color":"white"},{"name":"Kuchaiburi, IN","lat":22.2668,"lng":86.1739,"size":"0.0408","color":"white"},{"name":"Kanigiri, IN","lat":15.4087,"lng":79.5047,"size":"0.0068","color":"white"},{"name":"Indore, IN","lat":22.717,"lng":75.8337,"size":"0.0680","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0340","color":"white"},{"name":"Jaipur, IN","lat":26.9525,"lng":75.7105,"size":"0.1088","color":"white"},{"name":"Hisar, IN","lat":29.1501,"lng":75.7176,"size":"0.0204","color":"white"},{"name":"Cupertino, US","lat":37.3219,"lng":-122.03,"size":"0.0272","color":"white"},{"name":"Haidian, CN","lat":39.9786,"lng":116.302,"size":"0.0272","color":"white"},{"name":"Lucknow, IN","lat":26.8756,"lng":80.9115,"size":"0.1293","color":"white"},{"name":"Indore, IN","lat":22.717,"lng":75.8337,"size":"0.0476","color":"white"},{"name":"Shimla, IN","lat":31.1034,"lng":77.1659,"size":"0.0204","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0340","color":"white"},{"name":"Ranchi, IN","lat":23.3426,"lng":85.3099,"size":"0.0068","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0068","color":"white"},{"name":"Chandigarh, IN","lat":30.7339,"lng":76.7889,"size":"0.0204","color":"white"},{"name":"Jodhpur, IN","lat":26.2692,"lng":73.009,"size":"0.0272","color":"white"},{"name":"Hubli, IN","lat":15.3581,"lng":75.1417,"size":"0.0068","color":"white"},{"name":"Nanded, IN","lat":19.1556,"lng":77.3148,"size":"0.0068","color":"white"},{"name":"Gurgaon, IN","lat":28.4597,"lng":77.0282,"size":"0.0408","color":"white"},{"name":"Kochi, IN","lat":9.9185,"lng":76.2558,"size":"0.0408","color":"white"},{"name":"Abu Dhabi, AE","lat":24.4638,"lng":54.363,"size":"0.1020","color":"white"},{"name":"Ann Arbor, US","lat":42.2809,"lng":-83.7489,"size":"0.0136","color":"white"},{"name":"Prayagraj, IN","lat":25.4425,"lng":81.8517,"size":"0.0136","color":"white"},{"name":"Guwahati, IN","lat":26.1206,"lng":91.6523,"size":"0.0136","color":"white"},{"name":"Surat, IN","lat":21.1888,"lng":72.8293,"size":"0.0272","color":"white"},{"name":"Coimbatore, IN","lat":11.0142,"lng":76.9941,"size":"0.0068","color":"white"},{"name":"Dehradun, IN","lat":30.322,"lng":78.03,"size":"0.0136","color":"white"},{"name":"Ahmedabad, IN","lat":23.0276,"lng":72.5871,"size":"0.0068","color":"white"},{"name":"Bengaluru, IN","lat":12.9634,"lng":77.5855,"size":"0.0068","color":"white"},{"name":"Patna, IN","lat":25.5908,"lng":85.1348,"size":"0.0272","color":"white"},{"name":"Ludhiana, IN","lat":31.0048,"lng":75.9463,"size":"0.0816","color":"white"},{"name":"Bengaluru, IN","lat":12.9634,"lng":77.5855,"size":"0.0136","color":"white"},{"name":"Bhubaneswar, IN","lat":20.2706,"lng":85.8334,"size":"0.0340","color":"white"},{"name":"Dallas, US","lat":32.7769,"lng":-96.7977,"size":"0.0136","color":"white"},{"name":"Panampilly Nagar, IN","lat":9.9587,"lng":76.2982,"size":"0.0340","color":"white"},{"name":"Bhopal, IN","lat":23.2487,"lng":77.4066,"size":"0.0204","color":"white"},{"name":"Madurai, IN","lat":9.9327,"lng":78.1141,"size":"0.0068","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0340","color":"white"},{"name":"Nagpur, IN","lat":21.1161,"lng":79.0706,"size":"0.0136","color":"white"},{"name":"Sheung Wan, HK","lat":22.2868,"lng":114.152,"size":"0.0068","color":"white"},{"name":"Muzaffarnagar, IN","lat":29.4742,"lng":77.7027,"size":"0.0068","color":"white"},{"name":"Guwahati, IN","lat":26.1206,"lng":91.6523,"size":"0.0408","color":"white"},{"name":"Shimla, IN","lat":31.1034,"lng":77.1659,"size":"0.0340","color":"white"},{"name":"D\\u00fcsseldorf, DE","lat":51.2673,"lng":6.81752,"size":"0.0068","color":"white"},{"name":"Bilaspur, IN","lat":22.0787,"lng":82.1519,"size":"0.0068","color":"white"},{"name":"Montreal, CA","lat":45.4995,"lng":-73.5848,"size":"0.0068","color":"white"},{"name":"St Petersburg, RU","lat":59.8983,"lng":30.2618,"size":"0.0068","color":"white"},{"name":"Kashipur, IN","lat":29.2211,"lng":78.9606,"size":"0.0068","color":"white"},{"name":"Pune, IN","lat":18.6161,"lng":73.7286,"size":"0.1156","color":"white"},{"name":"Singapore, SG","lat":1.352,"lng":103.8198,"size":"0.0544","color":"white"},{"name":"Agra, IN","lat":27.1826,"lng":78.0256,"size":"0.0068","color":"white"},{"name":"Chandigarh, IN","lat":30.7339,"lng":76.7889,"size":"0.0204","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0068","color":"white"},{"name":"Rohtak, IN","lat":28.8964,"lng":76.5909,"size":"0.0068","color":"white"},{"name":"Bhiwani, IN","lat":28.793,"lng":76.1397,"size":"0.0068","color":"white"},{"name":"Pune, IN","lat":18.6161,"lng":73.7286,"size":"0.0748","color":"white"},{"name":"Dombivali, IN","lat":19.216,"lng":73.1034,"size":"0.0068","color":"white"},{"name":"Bardhaman, IN","lat":23.2528,"lng":87.8582,"size":"0.0136","color":"white"},{"name":"Noida, IN","lat":28.6145,"lng":77.3063,"size":"0.0136","color":"white"},{"name":"Jagadhri, IN","lat":30.1719,"lng":77.3089,"size":"0.0068","color":"white"},{"name":"Odisha, IN","lat":20.5,"lng":84.4167,"size":"0.0204","color":"white"},{"name":"Toronto, CA","lat":43.6532,"lng":-79.3832,"size":"0.0544","color":"white"},{"name":"Chennai, IN","lat":12.8996,"lng":80.2209,"size":"0.0136","color":"white"},{"name":"Pune, IN","lat":18.6161,"lng":73.7286,"size":"0.0408","color":"white"},{"name":"Brahmapur, IN","lat":19.3075,"lng":84.7931,"size":"0.0068","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0204","color":"white"},{"name":"Mathura, IN","lat":27.4987,"lng":77.6669,"size":"0.0068","color":"white"},{"name":"Ahmedabad, IN","lat":23.0276,"lng":72.5871,"size":"0.0068","color":"white"},{"name":"Luckeesarai, IN","lat":25.1764,"lng":86.0982,"size":"0.0068","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0068","color":"white"},{"name":"Ludhiana, IN","lat":31.0048,"lng":75.9463,"size":"0.0408","color":"white"},{"name":"Pune, IN","lat":18.6161,"lng":73.7286,"size":"0.0680","color":"white"},{"name":"Chandigarh, IN","lat":30.7339,"lng":76.7889,"size":"0.0068","color":"white"},{"name":"Guntur, IN","lat":16.3007,"lng":80.4639,"size":"0.0068","color":"white"},{"name":"Jamnagar, IN","lat":22.4667,"lng":70.0644,"size":"0.0068","color":"white"},{"name":"Minato-ku, JP","lat":35.6629,"lng":139.761,"size":"0.0068","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0204","color":"white"},{"name":"Kochi, IN","lat":9.9185,"lng":76.2558,"size":"0.0068","color":"white"},{"name":"Siliguri, IN","lat":26.7084,"lng":88.4318,"size":"0.0068","color":"white"},{"name":"Ashgabat, TM","lat":37.95,"lng":58.3833,"size":"0.0068","color":"white"},{"name":"Coimbatore, IN","lat":11.0142,"lng":76.9941,"size":"0.0068","color":"white"},{"name":"Ahirka, IN","lat":29.3521,"lng":76.3039,"size":"0.0136","color":"white"},{"name":"Kurukshetra, IN","lat":29.9666,"lng":76.8358,"size":"0.0068","color":"white"},{"name":"Bhopal, IN","lat":23.2487,"lng":77.4066,"size":"0.0204","color":"white"},{"name":"Yamunanagar, IN","lat":30.1295,"lng":77.2838,"size":"0.0068","color":"white"},{"name":"Chandigarh, IN","lat":30.7339,"lng":76.7889,"size":"0.0272","color":"white"},{"name":"Cuttack, IN","lat":20.4659,"lng":85.8822,"size":"0.0068","color":"white"},{"name":"Council Bluffs, US","lat":41.2619,"lng":-95.8608,"size":"0.0408","color":"white"},{"name":"Aurangabad, IN","lat":19.861,"lng":75.3929,"size":"0.0136","color":"white"},{"name":"Ludhiana, IN","lat":31.0048,"lng":75.9463,"size":"0.0136","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0340","color":"white"},{"name":"Raurkela, IN","lat":22.2252,"lng":84.8685,"size":"0.0136","color":"white"},{"name":"Ranchi, IN","lat":23.3426,"lng":85.3099,"size":"0.0204","color":"white"},{"name":"Malappuram, IN","lat":11.0808,"lng":76.0702,"size":"0.0068","color":"white"},{"name":"Gurgaon, IN","lat":28.4597,"lng":77.0282,"size":"0.0068","color":"white"},{"name":"Washington, US","lat":38.9072,"lng":-77.0369,"size":"0.0068","color":"white"},{"name":"Mohali, IN","lat":30.674,"lng":76.7249,"size":"0.0204","color":"white"},{"name":"Prayagraj, IN","lat":25.4425,"lng":81.8517,"size":"0.0068","color":"white"},{"name":"Batu, ID","lat":-7.87,"lng":112.528,"size":"0.0272","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0068","color":"white"},{"name":"Bhanvad, IN","lat":21.929,"lng":69.7781,"size":"0.0068","color":"white"},{"name":"Warangal, IN","lat":17.9958,"lng":79.5782,"size":"0.0136","color":"white"},{"name":"Kanpur, IN","lat":26.4969,"lng":80.3246,"size":"0.0204","color":"white"},{"name":"Ahmedabad, IN","lat":23.0276,"lng":72.5871,"size":"0.0068","color":"white"},{"name":"Bhubaneswar, IN","lat":20.2706,"lng":85.8334,"size":"0.0136","color":"white"},{"name":"Los Angeles, US","lat":34.0544,"lng":-118.2441,"size":"0.0068","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0204","color":"white"},{"name":"Chandigarh, IN","lat":30.7339,"lng":76.7889,"size":"0.0136","color":"white"},{"name":"Sonipat, IN","lat":28.9933,"lng":77.021,"size":"0.0068","color":"white"},{"name":"Pune, IN","lat":18.6161,"lng":73.7286,"size":"0.0068","color":"white"},{"name":"Mohali, IN","lat":30.674,"lng":76.7249,"size":"0.0068","color":"white"},{"name":"Bhopal, IN","lat":23.2487,"lng":77.4066,"size":"0.0068","color":"white"},{"name":"Bamla, IN","lat":28.811,"lng":76.2374,"size":"0.0136","color":"white"},{"name":"Achmatti, IN","lat":15.7479,"lng":75.303,"size":"0.0068","color":"white"},{"name":"Shimla, IN","lat":31.1034,"lng":77.1659,"size":"0.0340","color":"white"},{"name":"Mohali, IN","lat":30.674,"lng":76.7249,"size":"0.0068","color":"white"},{"name":"Imphal, IN","lat":24.809,"lng":93.9407,"size":"0.0204","color":"white"},{"name":"Bengaluru, IN","lat":12.9634,"lng":77.5855,"size":"0.0476","color":"white"},{"name":"Kanpur, IN","lat":26.4969,"lng":80.3246,"size":"0.0068","color":"white"},{"name":"Neyveli, IN","lat":11.6112,"lng":79.4972,"size":"0.0068","color":"white"},{"name":"Hyderabad, PK","lat":25.3831,"lng":68.3577,"size":"0.0068","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0408","color":"white"},{"name":"London, GB","lat":51.5074,"lng":-0.127758,"size":"0.0136","color":"white"},{"name":"Mandi, IN","lat":31.7126,"lng":76.9328,"size":"0.0204","color":"white"},{"name":"Boydton, US","lat":36.677696,"lng":-78.37471,"size":"0.0204","color":"white"},{"name":"Itarsi, IN","lat":22.6148,"lng":77.7622,"size":"0.0068","color":"white"},{"name":"Raipur Rani, IN","lat":30.5894,"lng":77.0202,"size":"0.0068","color":"white"},{"name":"Surat, IN","lat":21.1888,"lng":72.8293,"size":"0.0204","color":"white"},{"name":"Mysore, IN","lat":12.2989,"lng":76.6394,"size":"0.0068","color":"white"},{"name":"Kanata, CA","lat":45.3033,"lng":-75.9239,"size":"0.0068","color":"white"},{"name":"Visakhapatnam, IN","lat":17.6774,"lng":83.2036,"size":"0.0136","color":"white"},{"name":"Prayagraj, IN","lat":25.4425,"lng":81.8517,"size":"0.0068","color":"white"},{"name":"Amsterdam, NL","lat":52.3704,"lng":4.89524,"size":"0.0068","color":"white"},{"name":"Rohtak, IN","lat":28.8964,"lng":76.5909,"size":"0.0340","color":"white"},{"name":"Cortlandt Manor, US","lat":41.2846,"lng":-73.8904,"size":"0.0204","color":"white"},{"name":"Brampton, CA","lat":43.693,"lng":-79.8365,"size":"0.0068","color":"white"},{"name":"Karnal, IN","lat":29.6923,"lng":76.986,"size":"0.0136","color":"white"},{"name":"Nagpur, IN","lat":21.1161,"lng":79.0706,"size":"0.0680","color":"white"},{"name":"Nagpur, IN","lat":21.1161,"lng":79.0706,"size":"0.0068","color":"white"},{"name":"Alappuzha, IN","lat":9.4897,"lng":76.3223,"size":"0.0068","color":"white"},{"name":"Dimapur, IN","lat":25.9169,"lng":93.7274,"size":"0.0204","color":"white"},{"name":"Nagpur, IN","lat":21.1161,"lng":79.0706,"size":"0.0272","color":"white"},{"name":"Moscow, RU","lat":55.7483,"lng":37.6171,"size":"0.0068","color":"white"},{"name":"Banka, IN","lat":24.8773,"lng":86.9293,"size":"0.0068","color":"white"},{"name":"Liverpool, GB","lat":53.4113,"lng":-2.9759,"size":"0.0068","color":"white"},{"name":"Bengaluru, IN","lat":12.9634,"lng":77.5855,"size":"0.0136","color":"white"},{"name":"Helsinki, FI","lat":60.1719,"lng":24.9347,"size":"0.0068","color":"white"},{"name":"Vadodara, IN","lat":22.3008,"lng":73.2043,"size":"0.0068","color":"white"},{"name":"San Francisco, US","lat":37.7749,"lng":-122.419,"size":"0.0068","color":"white"},{"name":"Varanasi, IN","lat":25.2979,"lng":82.9956,"size":"0.0136","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0204","color":"white"},{"name":"Roost, LU","lat":49.7866,"lng":6.0753,"size":"0.0068","color":"white"},{"name":"Bengaluru, IN","lat":12.9634,"lng":77.5855,"size":"0.0340","color":"white"},{"name":"Manchester, US","lat":41.7958,"lng":-72.5241,"size":"0.0068","color":"white"},{"name":"Dhamangaon, IN","lat":21.1208,"lng":78.5684,"size":"0.0068","color":"white"},{"name":"Aroor, IN","lat":9.8731,"lng":76.3087,"size":"0.0068","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0068","color":"white"},{"name":"Bezons, FR","lat":48.9243,"lng":2.2128,"size":"0.0068","color":"white"},{"name":"Salem, IN","lat":11.6602,"lng":78.1532,"size":"0.0068","color":"white"},{"name":"Bahadurgarh, IN","lat":28.6659,"lng":77.0044,"size":"0.0068","color":"white"},{"name":"Madurai, IN","lat":9.9327,"lng":78.1141,"size":"0.0068","color":"white"},{"name":"Ghaziabad, IN","lat":28.665,"lng":77.4477,"size":"0.0068","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0068","color":"white"},{"name":"Kollam, IN","lat":8.8814,"lng":76.585,"size":"0.0068","color":"white"},{"name":"Nagpur, IN","lat":21.1161,"lng":79.0706,"size":"0.0068","color":"white"},{"name":"Ahmedabad, IN","lat":23.0276,"lng":72.5871,"size":"0.0204","color":"white"},{"name":"Chandigarh, IN","lat":30.7339,"lng":76.7889,"size":"0.0068","color":"white"},{"name":"Singapore, SG","lat":1.30306,"lng":103.908,"size":"0.0136","color":"white"},{"name":"Naperville, US","lat":41.7057,"lng":-88.1946,"size":"0.0136","color":"white"},{"name":"St Louis, US","lat":38.5793,"lng":-90.422,"size":"0.0068","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0340","color":"white"},{"name":"Kurukshetra, IN","lat":29.9666,"lng":76.8358,"size":"0.0068","color":"white"},{"name":"Vijayawada, IN","lat":16.5033,"lng":80.6465,"size":"0.0068","color":"white"},{"name":"Pune, IN","lat":18.6161,"lng":73.7286,"size":"0.0068","color":"white"},{"name":"Amera, IN","lat":21.5948,"lng":82.168,"size":"0.0068","color":"white"},{"name":"Helsinki, FI","lat":60.1797,"lng":24.9344,"size":"0.0068","color":"white"},{"name":"Vijayawada, IN","lat":16.5033,"lng":80.6465,"size":"0.0068","color":"white"},{"name":"Mangalore, IN","lat":12.9187,"lng":74.8598,"size":"0.0068","color":"white"},{"name":"Sydney, AU","lat":-33.8715,"lng":151.2006,"size":"0.0068","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0068","color":"white"},{"name":"Gurgaon, IN","lat":28.4597,"lng":77.0282,"size":"0.0068","color":"white"},{"name":"Cuttack, IN","lat":20.4659,"lng":85.8822,"size":"0.0204","color":"white"},{"name":"Hanamkonda, IN","lat":18.0101,"lng":79.5694,"size":"0.0068","color":"white"},{"name":"Visakhapatnam, IN","lat":17.6774,"lng":83.2036,"size":"0.0068","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0136","color":"white"},{"name":"Coimbatore, IN","lat":11.0142,"lng":76.9941,"size":"0.0068","color":"white"},{"name":"Udaipur, IN","lat":24.5854,"lng":73.7141,"size":"0.0136","color":"white"},{"name":"Jaipur, IN","lat":26.9525,"lng":75.7105,"size":"0.0068","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0476","color":"white"},{"name":"Jabalpur, IN","lat":23.1701,"lng":79.957,"size":"0.0136","color":"white"},{"name":"Mullur, IN","lat":12.1569,"lng":77.0657,"size":"0.0068","color":"white"},{"name":"Mangalore, IN","lat":12.9141,"lng":74.856,"size":"0.0068","color":"white"},{"name":"Mysore, IN","lat":12.2989,"lng":76.6394,"size":"0.0068","color":"white"},{"name":"Karlsruhe, DE","lat":49.0078,"lng":8.4001,"size":"0.0068","color":"white"},{"name":"Dallas, US","lat":32.9503,"lng":-96.819,"size":"0.0068","color":"white"},{"name":"Mumbai, IN","lat":19.076,"lng":72.8777,"size":"0.0272","color":"white"},{"name":"Singapore, SG","lat":1.28009,"lng":103.851,"size":"0.0068","color":"white"},{"name":"Johannesburg, ZA","lat":-26.3811,"lng":27.8376,"size":"0.0068","color":"white"},{"name":"Aurora, US","lat":41.7892,"lng":-88.262,"size":"0.0068","color":"white"},{"name":"Gajwel, IN","lat":17.8552,"lng":78.6771,"size":"0.0068","color":"white"},{"name":"Kamianske, UA","lat":48.5231,"lng":34.6136,"size":"0.0068","color":"white"},{"name":"Anand, IN","lat":22.5504,"lng":72.9515,"size":"0.0068","color":"white"},{"name":"Faridabad, IN","lat":28.4098,"lng":77.31,"size":"0.0068","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0136","color":"white"},{"name":"Thane, IN","lat":19.1963,"lng":72.9675,"size":"0.0068","color":"white"},{"name":"New York, US","lat":40.7425,"lng":-73.9877,"size":"0.0068","color":"white"},{"name":"Balasore, IN","lat":21.5027,"lng":86.9401,"size":"0.0136","color":"white"},{"name":"Amsterdam, NL","lat":52.364,"lng":4.866,"size":"0.0068","color":"white"},{"name":"Roha, IN","lat":18.4405,"lng":73.1213,"size":"0.0068","color":"white"},{"name":"Ahmedabad, IN","lat":23.0276,"lng":72.5871,"size":"0.0068","color":"white"},{"name":"Fremont, US","lat":37.4718,"lng":-121.92,"size":"0.0068","color":"white"},{"name":"Dhaka, BD","lat":23.7272,"lng":90.4093,"size":"0.0068","color":"white"},{"name":"Raipur, IN","lat":21.2333,"lng":81.6333,"size":"0.0136","color":"white"},{"name":"Mangalore, IN","lat":12.9187,"lng":74.8598,"size":"0.0068","color":"white"},{"name":"Warsaw, PL","lat":52.2297,"lng":21.0122,"size":"0.0136","color":"white"},{"name":"Thrissur, IN","lat":10.516,"lng":76.2157,"size":"0.0136","color":"white"},{"name":"Shillong, IN","lat":25.5679,"lng":91.8787,"size":"0.0068","color":"white"},{"name":"Vizianagaram, IN","lat":18.1105,"lng":83.4121,"size":"0.0068","color":"white"},{"name":"Ambad, IN","lat":19.7515,"lng":75.7139,"size":"0.0068","color":"white"},{"name":"Santa Clara, US","lat":37.3833,"lng":-121.983,"size":"0.0068","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0068","color":"white"},{"name":"Rupnagar, IN","lat":30.208,"lng":73.9982,"size":"0.0068","color":"white"},{"name":"Detroit, US","lat":42.3255,"lng":-83.0415,"size":"0.0068","color":"white"},{"name":"Brandenburg, DE","lat":52.6171,"lng":13.1207,"size":"0.0136","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0272","color":"white"},{"name":"Bridgewater, US","lat":40.5921,"lng":-74.6238,"size":"0.0068","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0068","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0068","color":"white"},{"name":"Kanchipuram, IN","lat":12.8378,"lng":79.6973,"size":"0.0136","color":"white"},{"name":"Nozay, FR","lat":48.6478,"lng":2.23646,"size":"0.0068","color":"white"},{"name":"Vijayawada, IN","lat":16.5033,"lng":80.6465,"size":"0.0068","color":"white"},{"name":"Bengaluru, IN","lat":12.9634,"lng":77.5855,"size":"0.0068","color":"white"},{"name":"Pune, IN","lat":18.6161,"lng":73.7286,"size":"0.0204","color":"white"},{"name":"Medak, IN","lat":18.0495,"lng":78.2601,"size":"0.0068","color":"white"},{"name":"Salem, IN","lat":11.6602,"lng":78.1532,"size":"0.0068","color":"white"},{"name":"Steinhorst, DE","lat":52.6803,"lng":10.4001,"size":"0.0068","color":"white"},{"name":"Nagpur, IN","lat":21.1161,"lng":79.0706,"size":"0.0068","color":"white"},{"name":"Halol, IN","lat":22.5037,"lng":73.4767,"size":"0.0068","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0068","color":"white"},{"name":"Pune, IN","lat":18.6161,"lng":73.7286,"size":"0.0272","color":"white"},{"name":"Kottayam, IN","lat":9.5813,"lng":76.5263,"size":"0.0068","color":"white"},{"name":"Rajkot, IN","lat":22.2904,"lng":70.7915,"size":"0.0068","color":"white"},{"name":"Pune, IN","lat":18.6161,"lng":73.7286,"size":"0.0068","color":"white"},{"name":"Rabat, MA","lat":34.0123,"lng":-6.8484,"size":"0.0136","color":"white"},{"name":"Munich, DE","lat":48.1351,"lng":11.582,"size":"0.0068","color":"white"},{"name":"Nagpur, IN","lat":21.1161,"lng":79.0706,"size":"0.0068","color":"white"},{"name":"Khandagiri, IN","lat":20.2634,"lng":85.7885,"size":"0.0068","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0068","color":"white"},{"name":"Lagos, NG","lat":6.54646,"lng":3.35719,"size":"0.0136","color":"white"},{"name":"Wardha, IN","lat":20.7405,"lng":78.6062,"size":"0.0068","color":"white"},{"name":"Kozhikode, IN","lat":11.2189,"lng":75.7268,"size":"0.0068","color":"white"},{"name":"Ludhiana, IN","lat":31.0048,"lng":75.9463,"size":"0.0068","color":"white"},{"name":"Patna, IN","lat":25.5908,"lng":85.1348,"size":"0.0068","color":"white"},{"name":"Guwahati, IN","lat":26.1206,"lng":91.6523,"size":"0.0204","color":"white"},{"name":"Bhanjanagar, IN","lat":19.9271,"lng":84.5761,"size":"0.0068","color":"white"},{"name":"Bhubaneswar, IN","lat":20.2706,"lng":85.8334,"size":"0.0136","color":"white"},{"name":"Lucknow, IN","lat":26.8756,"lng":80.9115,"size":"0.0068","color":"white"},{"name":"Guwahati, IN","lat":26.1206,"lng":91.6523,"size":"0.0068","color":"white"},{"name":"Philadelphia, US","lat":39.9526,"lng":-75.1652,"size":"0.0068","color":"white"},{"name":"Chandigarh, IN","lat":30.7339,"lng":76.7889,"size":"0.0068","color":"white"},{"name":"Dongen, NL","lat":51.6267,"lng":4.9267,"size":"0.0068","color":"white"},{"name":"Phnom Penh, KH","lat":11.5492,"lng":104.905,"size":"0.0068","color":"white"},{"name":"Navi Mumbai, IN","lat":19.0565,"lng":73.0656,"size":"0.0136","color":"white"},{"name":"Jhajjar, IN","lat":28.6036,"lng":76.6497,"size":"0.0068","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0068","color":"white"},{"name":"Novokuznetsk, RU","lat":53.7438,"lng":87.0979,"size":"0.0068","color":"white"},{"name":"Singapore, SG","lat":1.26796,"lng":103.693,"size":"0.0068","color":"white"},{"name":"Ahmedabad, IN","lat":23.0276,"lng":72.5871,"size":"0.0068","color":"white"},{"name":"Hollywood, US","lat":26.0219,"lng":-80.3003,"size":"0.0068","color":"white"},{"name":"Kanpur, IN","lat":26.4969,"lng":80.3246,"size":"0.0068","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0068","color":"white"},{"name":"Porterville, US","lat":36.0683,"lng":-119.0343,"size":"0.0068","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0068","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0136","color":"white"},{"name":"Kozhikode, IN","lat":11.2189,"lng":75.7268,"size":"0.0068","color":"white"},{"name":"Navi Mumbai, IN","lat":19.0565,"lng":73.0656,"size":"0.0068","color":"white"},{"name":"Coimbatore, IN","lat":11.0142,"lng":76.9941,"size":"0.0068","color":"white"},{"name":"Srinagar, IN","lat":34.0837,"lng":74.7973,"size":"0.0068","color":"white"},{"name":"New Delhi, IN","lat":28.6328,"lng":77.2204,"size":"0.0068","color":"white"},{"name":"Chennai, IN","lat":12.8996,"lng":80.2209,"size":"0.0068","color":"white"},{"name":"Balasore, IN","lat":21.5027,"lng":86.9401,"size":"0.0136","color":"white"},{"name":"Melbourne, AU","lat":-37.8159,"lng":144.9669,"size":"0.0068","color":"white"},{"name":"Secunderabad, IN","lat":17.5122,"lng":78.5303,"size":"0.0068","color":"white"},{"name":"Beaumont, US","lat":30.0959,"lng":-94.1689,"size":"0.0068","color":"white"},{"name":"Pune, IN","lat":18.6161,"lng":73.7286,"size":"0.0136","color":"white"},{"name":"Paris, FR","lat":48.8323,"lng":2.4075,"size":"0.0068","color":"white"},{"name":"Nirmal, IN","lat":19.0986,"lng":78.3549,"size":"0.0068","color":"white"},{"name":"Coimbatore, IN","lat":11.0142,"lng":76.9941,"size":"0.0068","color":"white"},{"name":"Vapi, IN","lat":20.3736,"lng":72.9014,"size":"0.0068","color":"white"},{"name":"Lynnfield, US","lat":42.5327,"lng":-71.0339,"size":"0.0068","color":"white"},{"name":"Paris, FR","lat":48.8566,"lng":2.35222,"size":"0.0136","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0068","color":"white"},{"name":"Meerut, IN","lat":28.9834,"lng":77.706,"size":"0.0068","color":"white"},{"name":"Hugli, IN","lat":22.9108,"lng":88.4001,"size":"0.0068","color":"white"},{"name":"Nugegoda, LK","lat":6.8719,"lng":79.8939,"size":"0.0068","color":"white"},{"name":"Dhule, IN","lat":20.9073,"lng":74.7709,"size":"0.0068","color":"white"},{"name":"Bangkok, TH","lat":13.7366,"lng":100.4995,"size":"0.0068","color":"white"},{"name":"Guwahati, IN","lat":26.1206,"lng":91.6523,"size":"0.0068","color":"white"},{"name":"Arlington, US","lat":38.8924,"lng":-77.0757,"size":"0.0068","color":"white"},{"name":"Trivandrum, IN","lat":8.4832,"lng":76.9458,"size":"0.0068","color":"white"},{"name":"Ernakulam, IN","lat":9.9628,"lng":76.2964,"size":"0.0068","color":"white"},{"name":"Hayward, US","lat":37.6403,"lng":-122.0667,"size":"0.0068","color":"white"},{"name":"Singapore, SG","lat":1.28141,"lng":103.851,"size":"0.0068","color":"white"},{"name":"Manantoddy, IN","lat":11.7987,"lng":75.999,"size":"0.0068","color":"white"},{"name":"Bamroda, IN","lat":23.2743,"lng":73.662,"size":"0.0068","color":"white"},{"name":"Palm Beach Gardens, US","lat":26.8238,"lng":-80.1407,"size":"0.0068","color":"white"},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.0068","color":"white"},{"name":"Trivandrum, IN","lat":8.4832,"lng":76.9458,"size":"0.0068","color":"white"},{"name":"Jhajjar, IN","lat":28.6036,"lng":76.6497,"size":"0.0068","color":"white"},{"name":"Penugolanu, IN","lat":16.9736,"lng":80.439,"size":"0.0068","color":"white"},{"name":"Bengaluru, IN","lat":12.9634,"lng":77.5855,"size":"0.0068","color":"white"},{"name":"Chennai, IN","lat":12.8996,"lng":80.2209,"size":"0.0068","color":"white"},{"name":"San Francisco, US","lat":37.7595,"lng":-122.4367,"size":"0.0068","color":"white"},{"name":"Chicago, US","lat":41.8781,"lng":-87.6298,"size":"0.0068","color":"white"},{"name":"Nagpur, IN","lat":21.1161,"lng":79.0706,"size":"0.0068","color":"white"},{"name":"Belgaum, IN","lat":15.8576,"lng":74.5011,"size":"0.0068","color":"white"},{"name":"Falkenstein, DE","lat":50.475,"lng":12.365,"size":"0.0068","color":"white"},{"name":"Ghaziabad, IN","lat":28.665,"lng":77.4477,"size":"0.0068","color":"white"},{"name":"Vijayawada, IN","lat":16.5033,"lng":80.6465,"size":"0.0068","color":"white"},{"name":"Doha, QA","lat":25.2925,"lng":51.5321,"size":"0.0068","color":"white"},{"name":"Ambajogai, IN","lat":18.7387,"lng":76.3842,"size":"0.0068","color":"white"},{"name":"Enniskillen, GB","lat":54.4801,"lng":-8.0789,"size":"0.0068","color":"white"},{"name":"Sikar, IN","lat":27.594,"lng":75.1367,"size":"0.0068","color":"white"},{"name":"Kozhikode, IN","lat":11.2189,"lng":75.7268,"size":"0.0068","color":"white"},{"name":"Roorkee, IN","lat":29.794,"lng":77.8653,"size":"0.0068","color":"white"},{"name":"Surat, IN","lat":21.1888,"lng":72.8293,"size":"0.0068","color":"white"},{"name":"Mysore, IN","lat":12.2989,"lng":76.6394,"size":"0.0068","color":"white"},{"name":"Berlin, DE","lat":52.5521,"lng":13.4103,"size":"0.0068","color":"white"},{"name":"New York, US","lat":40.7114,"lng":-74.0005,"size":"0.0068","color":"white"},{"name":"Panchkula, IN","lat":30.6954,"lng":76.8524,"size":"0.0068","color":"white"},{"name":"Mulavukad, IN","lat":10.0165,"lng":76.2643,"size":"0.0068","color":"white"},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.0068","color":"white"},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.0068","color":"white"}]}
  const weightColor = d3.scaleSequentialSqrt(d3.interpolateYlOrRd).domain([0.1, 0.2]);

  useEffect(() => {
    const globe = globeEl.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = -0.35;
  })

  return (
    <div className="">
      <Globe
        ref={globeEl}
        onGlobeReady={() =>{
          globeEl.current.pointOfView({ lat: 23.7473749, lng: 76.266156, altitude: 2 }, 5000)
          // globeEl.current.pointOfView({ lat: 23.7473749, lng: 76.266156, altitude: 0 }, 100)
          console.log("Ready")
          }
        }
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        
        // labelsData={store["loc"]}
        // labelLat={(d) => d.lat}
        // labelLng={(d) => d.lng}
        // labelText={(d) => d.name}
        // labelSize={(d) => 0.1+(Math.sqrt(d.size*1000) * 4e-4)}
        // labelDotRadius={(d) => 0.0+(Math.sqrt(d.size*1000) * 4e-4)}
        // labelColor={(d) => weightColor(d.size)}
        // labelResolution={2}
        // bars
        hexBinPointsData={store["loc"]}
        hexBinPointWeight="size"
        hexAltitude={(d) => d.sumWeight / 4}
        hexBinResolution={4}
        hexTopColor={(d) => weightColor(d.sumWeight)}
        hexSideColor={(d) => weightColor(d.sumWeight)}
        hexBinMerge={true}
        enablePointerInteraction={true}
      />
    </div>
  );
}
