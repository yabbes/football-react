import React from 'react';

const Banner = (props) => {
    const bannerpath = "static/img/"+props.leagueSelect+".png";
    return(
        <div className="banner">
            <img src={bannerpath} alt="" />
        </div>
    );
}

export default Banner;