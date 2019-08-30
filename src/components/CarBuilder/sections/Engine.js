import React, { useEffect, useContext } from 'react';
import {BuilderContext} from '../context/builderContext';
import EngineSelector from '../EngineSelector';


const EngineSection = () => {
    const { visited, engine, selectedEngine, loading } = useContext(BuilderContext);
    useEffect(() => {
        visited('engine');
    },[]);
    return (
        <section className="car-builder__section car-buider__section--engine">
            <div className="car-builder__engine-image-container">
                <img className="car-builder__engine-image" src={selectedEngine.model.image} />
            </div>
            <div className="car-builder__engine-selector-container">
                <h1 className="car-builder__title">Engine</h1>
                <EngineSelector />
            </div>
        </section>
    );
}

export default EngineSection;