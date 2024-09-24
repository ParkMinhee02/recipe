import React from 'react';
import './List.css';

const List = ({data}) => {
	return (
		<div className='group'>
			{
				data.map(({RCP_SEQ, RCP_NM, RCP_WAY2, ATT_FILE_NO_MAIN}) => (
					<div className="list" key={RCP_SEQ}>
						<img src={ATT_FILE_NO_MAIN} alt={RCP_NM} />
						<div className="list-text-wrap">
							<div className="list-txt-title">{RCP_NM}</div>
							<div className="list-txt-way">{RCP_WAY2}</div>
						</div>
					</div>
				))
			}
		</div>
	);
};

export default List;