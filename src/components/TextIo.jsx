// This Snippet was created to wrap about it's child allowing for a fade-in once effect when scrolling into view.
// .text-io { opacity: 1; margin-top: 0; transition: 1s ease; }
// .text-io.hide-item { opacity: 0; margin-top: 6px; }
import './TextiO.css';
import React, { useEffect, useRef } from 'react';

const TextiO = (props) => {

    const ref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting){
                setTimeout(() => {
                    entry.target.classList.remove('hide-item');
                    observer.disconnect();
                }, 300)
            };
        });
        observer.observe(ref.current);
    }, []);

    return(
        <section ref={ref} className={`text-io hide-item item`}>
            {props.children}
        </section>
    );
};

export default TextiO;