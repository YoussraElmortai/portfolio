import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './style.css';

const Showcase = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.case__image', {
            scrollTrigger: {
                trigger: '.case__content',
                start: 'top center-=200', 
                end: 'bottom-=200',
                scrub: 1,
                markers: true, 
            },
            y: -200,
            x: -60,
            height: '25rem',
        });

        gsap.to('.case__image__2', {
            scrollTrigger: {
                trigger: '.case__image',
                start: 'top center+=150',
                end: 'bottom center',
                scrub: 1,
                markers: true, 
            },
            y: -180,
            x: -6,
            height: '20rem',
        });
    }, []);

    return (
        <section className="showcase__wrapper">
            <div className="case box">
                <article className="case__content">
                    <h2>Unc inc</h2>
                    <p>A fresh new look for digital agency focused on a better world</p>
                </article>
                <img className="case__bg" src="https://i.pinimg.com/564x/0d/34/36/0d3436c1e7def4e7fb7bf640af1b0671.jpg" alt="case background" />
                <img className="case__image" src="https://i.pinimg.com/564x/0d/34/36/0d3436c1e7def4e7fb7bf640af1b0671.jpg" alt="case background" />
                <img className="case__image__2" src="https://i.pinimg.com/564x/0d/34/36/0d3436c1e7def4e7fb7bf640af1b0671.jpg" alt="case background" />
            </div>

            <div className="case box">
                <article className="case__content">
                    <h2>Bieb in Bloei</h2>
                    <p>Connecting a community through plants</p>
                </article>
                <img className="case__bg" src="https://i.pinimg.com/564x/0d/34/36/0d3436c1e7def4e7fb7bf640af1b0671.jpg" alt="case background" />
                <img className="case__image" src="https://i.pinimg.com/564x/0d/34/36/0d3436c1e7def4e7fb7bf640af1b0671.jpg" alt="case background" />
                <img className="case__image__2" src="https://i.pinimg.com/564x/0d/34/36/0d3436c1e7def4e7fb7bf640af1b0671.jpg" alt="case background" />
            </div>
        </section>
    );
}

export default Showcase;
