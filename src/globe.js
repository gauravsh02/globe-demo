import "./styles.css";
import Globe from "react-globe.gl";

import { useRef, useState, useEffect } from "react";
export default function GlobeComp({ sel }) {

  const globeEl = useRef();
  // const store = data[sel];
  const store = {"loc": [{"name":"Angul, IN","lat":20.7851,"lng":85.0897,"size":"0.0050","color":"white","count":1},{"name":"Mumbai, IN","lat":19.0748,"lng":72.8856,"size":"0.4600","color":"white","count":92},{"name":"Hyderabad, IN","lat":17.411,"lng":78.4487,"size":"0.5750","color":"white","count":115},{"name":"Kochi, IN","lat":9.9185,"lng":76.2558,"size":"0.0400","color":"white","count":8},{"name":"Delhi, IN","lat":28.6542,"lng":77.2373,"size":"1.0000","color":"white","count":200},{"name":"Lucknow, IN","lat":26.8756,"lng":80.9115,"size":"0.4900","color":"white","count":98},{"name":"Chennai, IN","lat":12.8996,"lng":80.2209,"size":"0.1800","color":"white","count":36},{"name":"Mohali, IN","lat":30.674,"lng":76.7249,"size":"0.0350","color":"white","count":7},{"name":"Kolkata, IN","lat":22.518,"lng":88.3832,"size":"0.4850","color":"white","count":97},{"name":"Mountain View, US","lat":37.422,"lng":-122.084,"size":"0.1750","color":"white","count":35},{"name":"Bareilly, IN","lat":28.3535,"lng":79.4137,"size":"0.0050","color":"white","count":1},{"name":"Ghaziabad, IN","lat":28.665,"lng":77.4477,"size":"0.0150","color":"white","count":3},{"name":"Shimla, IN","lat":31.1034,"lng":77.1659,"size":"0.0900","color":"white","count":18},{"name":"Ashburn, US","lat":39.0438,"lng":-77.4874,"size":"0.0850","color":"white","count":17},{"name":"Visakhapatnam, IN","lat":17.6774,"lng":83.2036,"size":"0.0250","color":"white","count":5},{"name":"Bengaluru, IN","lat":12.9634,"lng":77.5855,"size":"0.7750","color":"white","count":155},{"name":"Cuttack, IN","lat":20.4659,"lng":85.8822,"size":"0.0300","color":"white","count":6},{"name":"Indore, IN","lat":22.717,"lng":75.8337,"size":"0.1700","color":"white","count":34},{"name":"Gorakhpur, IN","lat":26.7631,"lng":83.3729,"size":"0.0200","color":"white","count":4},{"name":"Agartala, IN","lat":23.8356,"lng":91.2836,"size":"0.0050","color":"white","count":1},{"name":"Patna, IN","lat":25.5908,"lng":85.1348,"size":"0.1150","color":"white","count":23},{"name":"Guwahati, IN","lat":26.1206,"lng":91.6523,"size":"0.1250","color":"white","count":25},{"name":"New Delhi, IN","lat":28.6328,"lng":77.2204,"size":"0.0450","color":"white","count":9},{"name":"Malegaon, IN","lat":20.5493,"lng":74.5309,"size":"0.0050","color":"white","count":1},{"name":"Clifton, US","lat":40.8364,"lng":-74.1403,"size":"0.0050","color":"white","count":1},{"name":"Dammam, SA","lat":26.4336,"lng":50.1116,"size":"0.0050","color":"white","count":1},{"name":"Jaipur, IN","lat":26.9525,"lng":75.7105,"size":"0.2600","color":"white","count":52},{"name":"Quincy, US","lat":47.233,"lng":-119.852,"size":"0.0300","color":"white","count":6},{"name":"Bhubaneswar, IN","lat":20.2706,"lng":85.8334,"size":"0.2950","color":"white","count":59},{"name":"Nagpur, IN","lat":21.1161,"lng":79.0706,"size":"0.1250","color":"white","count":25},{"name":"Pune, IN","lat":18.6161,"lng":73.7286,"size":"0.2950","color":"white","count":59},{"name":"New York, US","lat":40.7123,"lng":-74.0068,"size":"0.0150","color":"white","count":3},{"name":"San Francisco, US","lat":37.7308,"lng":-122.3838,"size":"0.0350","color":"white","count":7},{"name":"Ahmedabad, IN","lat":23.0276,"lng":72.5871,"size":"0.1400","color":"white","count":28},{"name":"Tirupur, IN","lat":11.1424,"lng":77.3422,"size":"0.0050","color":"white","count":1},{"name":"Amin, IN","lat":29.9072,"lng":76.8709,"size":"0.0050","color":"white","count":1},{"name":"Brampton, CA","lat":43.6445,"lng":-79.7755,"size":"0.0100","color":"white","count":2},{"name":"Riyadh, SA","lat":24.6869,"lng":46.7224,"size":"0.0300","color":"white","count":6},{"name":"Portland, US","lat":45.5235,"lng":-122.676,"size":"0.0200","color":"white","count":4},{"name":"Dhanbad, IN","lat":23.8006,"lng":86.4283,"size":"0.0100","color":"white","count":2},{"name":"Sangli, IN","lat":16.8564,"lng":74.5571,"size":"0.0050","color":"white","count":1},{"name":"Muscat, OM","lat":23.6182,"lng":58.5945,"size":"0.0150","color":"white","count":3},{"name":"Navi Mumbai, IN","lat":19.136,"lng":73.0039,"size":"0.0700","color":"white","count":14},{"name":"Chicago, US","lat":41.8819,"lng":-87.6278,"size":"0.0150","color":"white","count":3},{"name":"Kuchaiburi, IN","lat":22.2668,"lng":86.1739,"size":"0.0050","color":"white","count":1},{"name":"Kanigiri, IN","lat":15.4087,"lng":79.5047,"size":"0.0050","color":"white","count":1},{"name":"Kurukshetra, IN","lat":29.9666,"lng":76.8358,"size":"0.0300","color":"white","count":6},{"name":"Hisar, IN","lat":29.1501,"lng":75.7176,"size":"0.0150","color":"white","count":3},{"name":"Cupertino, US","lat":37.3219,"lng":-122.03,"size":"0.0200","color":"white","count":4},{"name":"Haidian, CN","lat":39.9786,"lng":116.302,"size":"0.0100","color":"white","count":2},{"name":"Ranchi, IN","lat":23.3426,"lng":85.3099,"size":"0.0200","color":"white","count":4},{"name":"Chandigarh, IN","lat":30.7339,"lng":76.7889,"size":"0.0750","color":"white","count":15},{"name":"Jodhpur, IN","lat":26.2692,"lng":73.009,"size":"0.0200","color":"white","count":4},{"name":"Hubli, IN","lat":15.3581,"lng":75.1417,"size":"0.0050","color":"white","count":1},{"name":"Nanded, IN","lat":19.1556,"lng":77.3148,"size":"0.0050","color":"white","count":1},{"name":"Gurgaon, IN","lat":28.4597,"lng":77.0282,"size":"0.0400","color":"white","count":8},{"name":"Abu Dhabi, AE","lat":24.4638,"lng":54.363,"size":"0.0350","color":"white","count":7},{"name":"Ann Arbor, US","lat":42.2809,"lng":-83.7489,"size":"0.0100","color":"white","count":2},{"name":"Prayagraj, IN","lat":25.4425,"lng":81.8517,"size":"0.0200","color":"white","count":4},{"name":"Surat, IN","lat":21.1888,"lng":72.8293,"size":"0.0400","color":"white","count":8},{"name":"Coimbatore, IN","lat":11.0142,"lng":76.9941,"size":"0.0250","color":"white","count":5},{"name":"Dehradun, IN","lat":30.322,"lng":78.03,"size":"0.0100","color":"white","count":2},{"name":"Ludhiana, IN","lat":31.0048,"lng":75.9463,"size":"0.1050","color":"white","count":21},{"name":"Dallas, US","lat":32.7769,"lng":-96.7977,"size":"0.0150","color":"white","count":3},{"name":"Panampilly Nagar, IN","lat":9.9587,"lng":76.2982,"size":"0.0150","color":"white","count":3},{"name":"Bhopal, IN","lat":23.2487,"lng":77.4066,"size":"0.0350","color":"white","count":7},{"name":"Madurai, IN","lat":9.9327,"lng":78.1141,"size":"0.0100","color":"white","count":2},{"name":"Sheung Wan, HK","lat":22.2868,"lng":114.152,"size":"0.0050","color":"white","count":1},{"name":"Muzaffarnagar, IN","lat":29.4742,"lng":77.7027,"size":"0.0050","color":"white","count":1},{"name":"D\\u00fcsseldorf, DE","lat":51.2673,"lng":6.81752,"size":"0.0050","color":"white","count":1},{"name":"Bilaspur, IN","lat":22.0787,"lng":82.1519,"size":"0.0050","color":"white","count":1},{"name":"Montreal, CA","lat":45.4995,"lng":-73.5848,"size":"0.0050","color":"white","count":1},{"name":"St Petersburg, RU","lat":59.8983,"lng":30.2618,"size":"0.0050","color":"white","count":1},{"name":"Kashipur, IN","lat":29.2211,"lng":78.9606,"size":"0.0050","color":"white","count":1},{"name":"Singapore, SG","lat":1.352,"lng":103.8198,"size":"0.0650","color":"white","count":13},{"name":"Hangzhou, CN","lat":30.2994,"lng":120.1612,"size":"0.0050","color":"white","count":1},{"name":"Agra, IN","lat":27.1826,"lng":78.0256,"size":"0.0050","color":"white","count":1},{"name":"Dubai, AE","lat":25.2633,"lng":55.3087,"size":"0.0250","color":"white","count":5},{"name":"Mundamveli, IN","lat":9.9201,"lng":76.2559,"size":"0.0050","color":"white","count":1},{"name":"Rohtak, IN","lat":28.8964,"lng":76.5909,"size":"0.0300","color":"white","count":6},{"name":"Bhiwani, IN","lat":28.793,"lng":76.1397,"size":"0.0050","color":"white","count":1},{"name":"Dombivali, IN","lat":19.216,"lng":73.1034,"size":"0.0050","color":"white","count":1},{"name":"Bardhaman, IN","lat":23.2528,"lng":87.8582,"size":"0.0100","color":"white","count":2},{"name":"Noida, IN","lat":28.6145,"lng":77.3063,"size":"0.0100","color":"white","count":2},{"name":"Jagadhri, IN","lat":30.1719,"lng":77.3089,"size":"0.0050","color":"white","count":1},{"name":"Odisha, IN","lat":20.5,"lng":84.4167,"size":"0.0150","color":"white","count":3},{"name":"Toronto, CA","lat":43.6532,"lng":-79.3832,"size":"0.0400","color":"white","count":8},{"name":"Brahmapur, IN","lat":19.3075,"lng":84.7931,"size":"0.0050","color":"white","count":1},{"name":"Pimpri-Chinchwad, IN","lat":18.6055,"lng":73.7527,"size":"0.0050","color":"white","count":1},{"name":"Mathura, IN","lat":27.4987,"lng":77.6669,"size":"0.0050","color":"white","count":1},{"name":"Luckeesarai, IN","lat":25.1764,"lng":86.0982,"size":"0.0050","color":"white","count":1},{"name":"Guntur, IN","lat":16.3007,"lng":80.4639,"size":"0.0050","color":"white","count":1},{"name":"Jamnagar, IN","lat":22.4667,"lng":70.0644,"size":"0.0050","color":"white","count":1},{"name":"Minato-ku, JP","lat":35.6629,"lng":139.761,"size":"0.0050","color":"white","count":1},{"name":"Siliguri, IN","lat":26.7084,"lng":88.4318,"size":"0.0050","color":"white","count":1},{"name":"Ashgabat, TM","lat":37.95,"lng":58.3833,"size":"0.0050","color":"white","count":1},{"name":"Ahirka, IN","lat":29.3521,"lng":76.3039,"size":"0.0100","color":"white","count":2},{"name":"Yamunanagar, IN","lat":30.1295,"lng":77.2838,"size":"0.0050","color":"white","count":1},{"name":"Council Bluffs, US","lat":41.2619,"lng":-95.8608,"size":"0.0150","color":"white","count":3},{"name":"Aurangabad, IN","lat":19.861,"lng":75.3929,"size":"0.0100","color":"white","count":2},{"name":"Raurkela, IN","lat":22.2252,"lng":84.8685,"size":"0.0100","color":"white","count":2},{"name":"Malappuram, IN","lat":11.0808,"lng":76.0702,"size":"0.0050","color":"white","count":1},{"name":"Washington, US","lat":38.9072,"lng":-77.0369,"size":"0.0100","color":"white","count":2},{"name":"Batu, ID","lat":-7.87,"lng":112.528,"size":"0.0050","color":"white","count":1},{"name":"Bhanvad, IN","lat":21.929,"lng":69.7781,"size":"0.0050","color":"white","count":1},{"name":"Warangal, IN","lat":17.9958,"lng":79.5782,"size":"0.0100","color":"white","count":2},{"name":"Kanpur, IN","lat":26.4969,"lng":80.3246,"size":"0.0250","color":"white","count":5},{"name":"Los Angeles, US","lat":34.0544,"lng":-118.2441,"size":"0.0050","color":"white","count":1},{"name":"Sonipat, IN","lat":28.9933,"lng":77.021,"size":"0.0050","color":"white","count":1},{"name":"Shenzhen, CN","lat":22.5431,"lng":114.058,"size":"0.0050","color":"white","count":1},{"name":"Bamla, IN","lat":28.811,"lng":76.2374,"size":"0.0100","color":"white","count":2},{"name":"Achmatti, IN","lat":15.7479,"lng":75.303,"size":"0.0050","color":"white","count":1},{"name":"Imphal, IN","lat":24.809,"lng":93.9407,"size":"0.0150","color":"white","count":3},{"name":"Neyveli, IN","lat":11.6112,"lng":79.4972,"size":"0.0050","color":"white","count":1},{"name":"Hyderabad, PK","lat":25.3831,"lng":68.3577,"size":"0.0050","color":"white","count":1},{"name":"London, GB","lat":51.5074,"lng":-0.127758,"size":"0.0100","color":"white","count":2},{"name":"Mandi, IN","lat":31.7126,"lng":76.9328,"size":"0.0150","color":"white","count":3},{"name":"Boydton, US","lat":36.677696,"lng":-78.37471,"size":"0.0150","color":"white","count":3},{"name":"Itarsi, IN","lat":22.6148,"lng":77.7622,"size":"0.0050","color":"white","count":1},{"name":"Raipur Rani, IN","lat":30.5894,"lng":77.0202,"size":"0.0050","color":"white","count":1},{"name":"Mysore, IN","lat":12.2989,"lng":76.6394,"size":"0.0150","color":"white","count":3},{"name":"Kanata, CA","lat":45.3033,"lng":-75.9239,"size":"0.0050","color":"white","count":1},{"name":"Amsterdam, NL","lat":52.3704,"lng":4.89524,"size":"0.0100","color":"white","count":2},{"name":"Cortlandt Manor, US","lat":41.2846,"lng":-73.8904,"size":"0.0150","color":"white","count":3},{"name":"Jakarta, ID","lat":-6.2114,"lng":106.8446,"size":"0.0100","color":"white","count":2},{"name":"Karnal, IN","lat":29.6923,"lng":76.986,"size":"0.0100","color":"white","count":2},{"name":"Alappuzha, IN","lat":9.4897,"lng":76.3223,"size":"0.0050","color":"white","count":1},{"name":"Dimapur, IN","lat":25.9169,"lng":93.7274,"size":"0.0150","color":"white","count":3},{"name":"Moscow, RU","lat":55.7483,"lng":37.6171,"size":"0.0050","color":"white","count":1},{"name":"Banka, IN","lat":24.8773,"lng":86.9293,"size":"0.0050","color":"white","count":1},{"name":"Liverpool, GB","lat":53.4113,"lng":-2.9759,"size":"0.0050","color":"white","count":1},{"name":"Helsinki, FI","lat":60.1719,"lng":24.9347,"size":"0.0100","color":"white","count":2},{"name":"Vadodara, IN","lat":22.3008,"lng":73.2043,"size":"0.0050","color":"white","count":1},{"name":"Varanasi, IN","lat":25.2979,"lng":82.9956,"size":"0.0100","color":"white","count":2},{"name":"Roost, LU","lat":49.7866,"lng":6.0753,"size":"0.0050","color":"white","count":1},{"name":"Manchester, US","lat":41.7958,"lng":-72.5241,"size":"0.0050","color":"white","count":1},{"name":"Dhamangaon, IN","lat":21.1208,"lng":78.5684,"size":"0.0050","color":"white","count":1},{"name":"Aroor, IN","lat":9.8731,"lng":76.3087,"size":"0.0050","color":"white","count":1},{"name":"Bezons, FR","lat":48.9243,"lng":2.2128,"size":"0.0050","color":"white","count":1},{"name":"Salem, IN","lat":11.6602,"lng":78.1532,"size":"0.0100","color":"white","count":2},{"name":"Bahadurgarh, IN","lat":28.6659,"lng":77.0044,"size":"0.0050","color":"white","count":1},{"name":"Kollam, IN","lat":8.8814,"lng":76.585,"size":"0.0050","color":"white","count":1},{"name":"Naperville, US","lat":41.7057,"lng":-88.1946,"size":"0.0100","color":"white","count":2},{"name":"St Louis, US","lat":38.5793,"lng":-90.422,"size":"0.0050","color":"white","count":1},{"name":"Vijayawada, IN","lat":16.5033,"lng":80.6465,"size":"0.0200","color":"white","count":4},{"name":"Amera, IN","lat":21.5948,"lng":82.168,"size":"0.0050","color":"white","count":1},{"name":"Mangalore, IN","lat":12.9187,"lng":74.8598,"size":"0.0150","color":"white","count":3},{"name":"Sydney, AU","lat":-33.8715,"lng":151.2006,"size":"0.0050","color":"white","count":1},{"name":"Hanamkonda, IN","lat":18.0101,"lng":79.5694,"size":"0.0050","color":"white","count":1},{"name":"Udaipur, IN","lat":24.5854,"lng":73.7141,"size":"0.0100","color":"white","count":2},{"name":"Phoenix, US","lat":33.4483,"lng":-112.074,"size":"0.0050","color":"white","count":1},{"name":"Jabalpur, IN","lat":23.1701,"lng":79.957,"size":"0.0100","color":"white","count":2},{"name":"Mullur, IN","lat":12.1569,"lng":77.0657,"size":"0.0050","color":"white","count":1},{"name":"Karlsruhe, DE","lat":49.0078,"lng":8.4001,"size":"0.0050","color":"white","count":1},{"name":"Sharjah, AE","lat":25.3569,"lng":55.405,"size":"0.0100","color":"white","count":2},{"name":"Johannesburg, ZA","lat":-26.3811,"lng":27.8376,"size":"0.0050","color":"white","count":1},{"name":"Aurora, US","lat":41.7892,"lng":-88.262,"size":"0.0050","color":"white","count":1},{"name":"Gajwel, IN","lat":17.8552,"lng":78.6771,"size":"0.0050","color":"white","count":1},{"name":"Kamianske, UA","lat":48.5231,"lng":34.6136,"size":"0.0050","color":"white","count":1},{"name":"Anand, IN","lat":22.5504,"lng":72.9515,"size":"0.0050","color":"white","count":1},{"name":"Faridabad, IN","lat":28.4098,"lng":77.31,"size":"0.0050","color":"white","count":1},{"name":"Thane, IN","lat":19.1963,"lng":72.9675,"size":"0.0050","color":"white","count":1},{"name":"Balasore, IN","lat":21.5027,"lng":86.9401,"size":"0.0200","color":"white","count":4},{"name":"Roha, IN","lat":18.4405,"lng":73.1213,"size":"0.0050","color":"white","count":1},{"name":"Fremont, US","lat":37.4718,"lng":-121.92,"size":"0.0050","color":"white","count":1},{"name":"Dhaka, BD","lat":23.7272,"lng":90.4093,"size":"0.0050","color":"white","count":1},{"name":"Raipur, IN","lat":21.2333,"lng":81.6333,"size":"0.0100","color":"white","count":2},{"name":"Warsaw, PL","lat":52.2297,"lng":21.0122,"size":"0.0100","color":"white","count":2},{"name":"Thrissur, IN","lat":10.516,"lng":76.2157,"size":"0.0100","color":"white","count":2},{"name":"Makkah, SA","lat":21.423,"lng":39.821,"size":"0.0050","color":"white","count":1},{"name":"Shillong, IN","lat":25.5679,"lng":91.8787,"size":"0.0050","color":"white","count":1},{"name":"Vizianagaram, IN","lat":18.1105,"lng":83.4121,"size":"0.0050","color":"white","count":1},{"name":"Ajman, AE","lat":25.441,"lng":55.532,"size":"0.0050","color":"white","count":1},{"name":"Ambad, IN","lat":19.7515,"lng":75.7139,"size":"0.0050","color":"white","count":1},{"name":"Santa Clara, US","lat":37.3833,"lng":-121.983,"size":"0.0050","color":"white","count":1},{"name":"Rupnagar, IN","lat":30.208,"lng":73.9982,"size":"0.0050","color":"white","count":1},{"name":"Detroit, US","lat":42.3255,"lng":-83.0415,"size":"0.0050","color":"white","count":1},{"name":"Brandenburg, DE","lat":52.6171,"lng":13.1207,"size":"0.0100","color":"white","count":2},{"name":"Bridgewater, US","lat":40.5921,"lng":-74.6238,"size":"0.0050","color":"white","count":1},{"name":"Kanchipuram, IN","lat":12.8378,"lng":79.6973,"size":"0.0100","color":"white","count":2},{"name":"Nozay, FR","lat":48.6478,"lng":2.23646,"size":"0.0050","color":"white","count":1},{"name":"Medak, IN","lat":18.0495,"lng":78.2601,"size":"0.0050","color":"white","count":1},{"name":"Steinhorst, DE","lat":52.6803,"lng":10.4001,"size":"0.0050","color":"white","count":1},{"name":"Halol, IN","lat":22.5037,"lng":73.4767,"size":"0.0050","color":"white","count":1},{"name":"Kottayam, IN","lat":9.5813,"lng":76.5263,"size":"0.0050","color":"white","count":1},{"name":"Rajkot, IN","lat":22.2904,"lng":70.7915,"size":"0.0050","color":"white","count":1},{"name":"Rabat, MA","lat":34.0123,"lng":-6.8484,"size":"0.0050","color":"white","count":1},{"name":"Munich, DE","lat":48.1351,"lng":11.582,"size":"0.0050","color":"white","count":1},{"name":"Khandagiri, IN","lat":20.2634,"lng":85.7885,"size":"0.0050","color":"white","count":1},{"name":"Lagos, NG","lat":6.54646,"lng":3.35719,"size":"0.0050","color":"white","count":1},{"name":"Wardha, IN","lat":20.7405,"lng":78.6062,"size":"0.0050","color":"white","count":1},{"name":"Kozhikode, IN","lat":11.2189,"lng":75.7268,"size":"0.0150","color":"white","count":3},{"name":"Bhanjanagar, IN","lat":19.9271,"lng":84.5761,"size":"0.0050","color":"white","count":1},{"name":"Abuja, NG","lat":9.0579,"lng":7.4951,"size":"0.0050","color":"white","count":1},{"name":"Philadelphia, US","lat":39.9526,"lng":-75.1652,"size":"0.0050","color":"white","count":1},{"name":"Dongen, NL","lat":51.6267,"lng":4.9267,"size":"0.0050","color":"white","count":1},{"name":"Ichch\\u0101puram, IN","lat":19.1139,"lng":84.6872,"size":"0.0050","color":"white","count":1},{"name":"Phnom Penh, KH","lat":11.5492,"lng":104.905,"size":"0.0050","color":"white","count":1},{"name":"Jhajjar, IN","lat":28.6036,"lng":76.6497,"size":"0.0100","color":"white","count":2},{"name":"Novokuznetsk, RU","lat":53.7438,"lng":87.0979,"size":"0.0050","color":"white","count":1},{"name":"Hollywood, US","lat":26.0219,"lng":-80.3003,"size":"0.0050","color":"white","count":1},{"name":"Porterville, US","lat":36.0683,"lng":-119.0343,"size":"0.0050","color":"white","count":1},{"name":"Birmingham, US","lat":33.5185,"lng":-86.8103,"size":"0.0050","color":"white","count":1},{"name":"Srinagar, IN","lat":34.0837,"lng":74.7973,"size":"0.0050","color":"white","count":1},{"name":"Melbourne, AU","lat":-37.8159,"lng":144.9669,"size":"0.0050","color":"white","count":1},{"name":"Secunderabad, IN","lat":17.5122,"lng":78.5303,"size":"0.0050","color":"white","count":1},{"name":"Beaumont, US","lat":30.0959,"lng":-94.1689,"size":"0.0050","color":"white","count":1},{"name":"Casablanca, MA","lat":33.5922,"lng":-7.6184,"size":"0.0050","color":"white","count":1},{"name":"Basavana B\\u0101gev\\u0101di, IN","lat":16.5728,"lng":75.9725,"size":"0.0050","color":"white","count":1},{"name":"Paris, FR","lat":48.8323,"lng":2.4075,"size":"0.0150","color":"white","count":3},{"name":"Nirmal, IN","lat":19.0986,"lng":78.3549,"size":"0.0050","color":"white","count":1},{"name":"Vapi, IN","lat":20.3736,"lng":72.9014,"size":"0.0050","color":"white","count":1},{"name":"Lynnfield, US","lat":42.5327,"lng":-71.0339,"size":"0.0050","color":"white","count":1},{"name":"Meerut, IN","lat":28.9834,"lng":77.706,"size":"0.0050","color":"white","count":1},{"name":"Hugli, IN","lat":22.9108,"lng":88.4001,"size":"0.0050","color":"white","count":1},{"name":"Nugegoda, LK","lat":6.8719,"lng":79.8939,"size":"0.0050","color":"white","count":1},{"name":"Dhule, IN","lat":20.9073,"lng":74.7709,"size":"0.0050","color":"white","count":1},{"name":"Bangkok, TH","lat":13.7366,"lng":100.4995,"size":"0.0050","color":"white","count":1},{"name":"Ernakulam, IN","lat":9.9628,"lng":76.2964,"size":"0.0150","color":"white","count":3},{"name":"Arlington, US","lat":38.8924,"lng":-77.0757,"size":"0.0050","color":"white","count":1},{"name":"Trivandrum, IN","lat":8.4832,"lng":76.9458,"size":"0.0100","color":"white","count":2},{"name":"Hayward, US","lat":37.6403,"lng":-122.0667,"size":"0.0050","color":"white","count":1},{"name":"Manantoddy, IN","lat":11.7987,"lng":75.999,"size":"0.0050","color":"white","count":1},{"name":"Bamroda, IN","lat":23.2743,"lng":73.662,"size":"0.0050","color":"white","count":1},{"name":"Palm Beach Gardens, US","lat":26.8238,"lng":-80.1407,"size":"0.0050","color":"white","count":1},{"name":"Semarang, ID","lat":-6.9932,"lng":110.4215,"size":"0.0050","color":"white","count":1},{"name":"Penugolanu, IN","lat":16.9736,"lng":80.439,"size":"0.0050","color":"white","count":1},{"name":"Belgaum, IN","lat":15.8576,"lng":74.5011,"size":"0.0050","color":"white","count":1},{"name":"Falkenstein, DE","lat":50.475,"lng":12.365,"size":"0.0050","color":"white","count":1},{"name":"Doha, QA","lat":25.2925,"lng":51.5321,"size":"0.0050","color":"white","count":1},{"name":"Ambajogai, IN","lat":18.7387,"lng":76.3842,"size":"0.0050","color":"white","count":1},{"name":"Enniskillen, GB","lat":54.4801,"lng":-8.0789,"size":"0.0050","color":"white","count":1},{"name":"Sikar, IN","lat":27.594,"lng":75.1367,"size":"0.0050","color":"white","count":1},{"name":"Roorkee, IN","lat":29.794,"lng":77.8653,"size":"0.0050","color":"white","count":1},{"name":"Berlin, DE","lat":52.5521,"lng":13.4103,"size":"0.0050","color":"white","count":1},{"name":"Panchkula, IN","lat":30.6954,"lng":76.8524,"size":"0.0050","color":"white","count":1},{"name":"Mulavukad, IN","lat":10.0165,"lng":76.2643,"size":"0.0050","color":"white","count":1}]};
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
        hexBinPointLat={(d) => d.lat}
        hexBinPointLng={(d) => d.lng}
        hexBinPointWeight="size"
        hexAltitude={(d) => d.sumWeight / 4}
        hexBinResolution={4}
        hexTopColor={(d) => weightColor(d.sumWeight)}
        hexSideColor={(d) => weightColor(d.sumWeight)}
        // hexBinMerge={true}  // label not working with hexBinMerge when set true
        enablePointerInteraction={true}
        hexLabel={(d) => `<div style="background: rgba(0, 0, 0, 0.7); padding: 5px;"> ${d.points[0].name}  ( ${d.points[0].count} ) <div>` }
      />
    </div>
  );
}
