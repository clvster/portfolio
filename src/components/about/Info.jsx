import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bxr  bx-medal-alt about__icon'></i>
                <h3 className="about__title">Опыт</h3>
                <span className="about__subtitle">3 года</span>
            </div>

            <div className="about__box">
                <i className='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Выполнено</h3>
                <span className="about__subtitle">6+ проектов</span>
            </div>

            <div className="about__box">
                <i className='bxr  bx-community about__icon'></i>
                <h3 className="about__title">В сети</h3>
                <span className="about__subtitle">C 10 до 20ч по Томску (UTC+7)</span>
            </div>
        </div>
    )
}

export default Info;
