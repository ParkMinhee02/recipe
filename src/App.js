import './App.css';
import axios from 'axios';
import {useState, useEffect, createContext} from 'react';
const DataContext=createContext();
function App({children}) {
   const [data, setData] = useState([]);
   const [loading, setLoading]=useState(true);

   const getDB= async () =>{
      try{
         const {data} = await axios.get('http://openapi.foodsafetykorea.go.kr/api/d1d505e5857e48eb9a21/COOKRCP01/json/1/100');
         const {COOKRCP01: {row}} =data;
         const initData=row.map(({RCP_SEQ,RCP_NM,RCP_WAY2,RCP_PAT2,INFO_WGT,INFO_ENG,INFO_CAR,INFO_PRO,INFO_FAT,INFO_NA,HASH_TAG,ATT_FILE_NO_MK,ATT_FILE_NO_MAIN,RCP_PARTS_DTLS,MANUAL01,MANUAL02,MANUAL03,MANUAL04,MANUAL05,MANUAL06,MANUAL07,MANUAL08,MANUAL09,MANUAL10,MANUAL_IMG01,MANUAL_IMG02,MANUAL_IMG03,MANUAL_IMG04,MANUAL_IMG05,MANUAL_IMG06,MANUAL_IMG07,MANUAL_IMG08,MANUAL_IMG09,MANUAL_IMG10,RCP_NA_TIP})=>({
            RCP_SEQ, 
            RCP_NM, 
            RCP_WAY2, 
            RCP_PAT2,
            INFO_WGT, 
            INFO_ENG, 
            INFO_CAR, 
            INFO_PRO, 
            INFO_FAT, 
            INFO_NA,
            HASH_TAG, 
            ATT_FILE_NO_MK, 
            ATT_FILE_NO_MAIN, 
            RCP_PARTS_DTLS,
            MANUAL01, 
            MANUAL02, 
            MANUAL03, 
            MANUAL04, 
            MANUAL05, 
            MANUAL06, 
            MANUAL07, 
            MANUAL08, 
            MANUAL09, 
            MANUAL10,
            MANUAL_IMG01, 
            MANUAL_IMG02, 
            MANUAL_IMG03, 
            MANUAL_IMG04,
            MANUAL_IMG05, 
            MANUAL_IMG06, 
            MANUAL_IMG07, 
            MANUAL_IMG08, 
            MANUAL_IMG09, 
            MANUAL_IMG10,
            RCP_NA_TIP,
         }));
         setLoading(false);
         setData(initData)
         console.log(data)
      }catch(error){
         console.error('데이터를 불러오는데 실패했습니다', error)
      }
   }
   useEffect(() =>{
      getDB();
   },[]);
   return <DataContext.Provider value={{data, loading}}>{children}</DataContext.Provider>

}

export default App;
export {DataContext};

