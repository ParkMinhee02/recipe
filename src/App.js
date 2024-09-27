import axios from 'axios';
import {useState, useEffect, createContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './layout/Home';
import Recipe from './layout/Recipe';
import Category from './layout/Category';
import Navi from './layout/Navi';

const DataContext=createContext();
function App({children}) {
	const [data, setData] = useState([]);
	const [loading, setLoading]=useState(true);

	const getDB= async () =>{
		try{
			const {data} = await axios.get('http://openapi.foodsafetykorea.go.kr/api/d1d505e5857e48eb9a21/COOKRCP01/json/1/100');
			const {COOKRCP01: {row}} =data;
			const initData=row.map((item)=>({
			...item,
			instructions: Array.from({length: 20}, (_, i) => ({
				manual: item[`MANUAL${String(i+1).padStart(2, '0')}`],
				manualImg: item[`MANUAL_IMG${String(i+1).padStart(2, '0')}`]
			})).filter((inst) => inst.MANUAL)
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
	return <DataContext.Provider value={{data, loading}}>
		<Navi />
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/recipe/:id' element={<Recipe />} />
			<Route path='/category/:category' element={<Category />} />
		</Routes>
</DataContext.Provider>

}

export default App;
export {DataContext};

