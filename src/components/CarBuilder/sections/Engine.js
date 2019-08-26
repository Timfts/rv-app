import React, { useEffect, useContext } from 'react';
import {BuilderContext} from '../context/builderContext';
import EngineSelector from '../EngineSelector';


const EngineSection = () => {
    const { visited, engine, selectedEngine, loading } = useContext(BuilderContext);
    useEffect(() => {
        visited('engine');
    },[]);
    return (
        <section className="engine-section">
            <div className="engine-section__image-container">
                <img className="engine-section__image" src={selectedEngine.model.image} />
            </div>
            <div class="engine-section__engine-selector-container">
                <EngineSelector />
                teste
            </div>
        </section>
    );
}

export default EngineSection;