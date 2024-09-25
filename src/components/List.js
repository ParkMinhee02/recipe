import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { MdOutlineSoupKitchen } from "react-icons/md";

const List = ({data}) => {
	return (
		<div className='group'>
			{
				data.map(({RCP_SEQ, RCP_NM, RCP_WAY2, ATT_FILE_NO_MAIN, INFO_ENG}) => (
					<Link to={`recipe/${RCP_SEQ}`}>
						<div className="list" key={RCP_SEQ}>
							<img src={ATT_FILE_NO_MAIN} alt={RCP_NM} />
							<div className="list-text-wrap">
								<div className="list-txt-title">{RCP_NM}</div>
								<div className='list-sub-text-wrap'>
									<div className="list-txt-kal"><span className='icon'><AiFillStar /></span>{INFO_ENG}Kal</div>
									<div className="list-txt-way"><span className='icon'><MdOutlineSoupKitchen /></span>{RCP_WAY2}</div>
								</div>
							</div>
						</div>
					</Link>
				))
			}
		</div>
	);
};

export default List;