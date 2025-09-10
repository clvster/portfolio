import React from 'react';

const WorkItems = ({item}) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className='work__img'/>
            <h3 className="work__title">{item.title}</h3>
            <a href="https://github.com/clvster?tab=repositories" className="work__button">
                Репозитории <i className='bxr  bx-arrow-right-stroke work__button-icon'></i>
            </a>
        </div>
    )
}

export default WorkItems;