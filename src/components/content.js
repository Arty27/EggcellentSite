import React from 'react';
import ImageOne from '../img/egg2.jpg';
import ImageTwo from '../img/egg1.jpg';

const Content = () => {
    return (
        <>
            <div  className="menu-card">
                    <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
                    <div className="menu-content">
                        <h2 className="text-2xl">
                            Sunny Side Up
                        </h2>
                        <p className="mb-2">
                            Highly Nutritious, and Healthy and Tasty Egg Recipe
                        </p>
                        <span>$5</span>
                    </div>
                </div>
                <div  className="menu-card">
                <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
                <div className="menu-content">
                    <h2 className="text-2xl">
                        Egg Monchow Noodles
                    </h2>
                    <p className="mb-2">
                        Highly Nutritious, and Healthy and Tasty Egg Recipe
                    </p>
                    <span>$12</span>
                </div>
            </div>
        </>
    )
}

export default Content
