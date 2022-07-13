import './Loading.css';

const Loading = () => {

    return (
        <div className="Loading">
            <div className="Loading__text">
                <p>Laddar...</p>
            </div>
            <div className="Loading__wave">
                <svg viewBox="0 0 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentleWave" d="M-160 9 Q-150 16 -120 28 Q-80 40 -40 56 Q0 72 0 90 Q0 100 40 120 Q80 140 120 160 Q150 180 160 180 Q180 180 200 160 Q220 140 240 120 Q260 100 260 90 Q260 72 240 56 Q200 40 160 28 Q120 16 100 9 Q80 0 60 0 Q40 0 20 8 Q0 16 0 24 Q0 32 20 40 Q40 48 60 48 Q80 48 100 40 Q120 28 120 24 Q120 16 100 9 Z"></path>
                    </defs>
                    <g className="parallax">
                        <use href="#gentleWave" x="0" y="0" fill="rgba(255,255,255,0.5)" />
                        <use href="#gentleWave" x="0" y="3" fill="rgba(255,255,255,0.5)" />
                        <use href="#gentleWave" x="0" y="5" fill="rgba(255,255,255,0.5)" />
                        <use href="#gentleWave" x="0" y="7" fill="rgba(255,255,255,0.5)" />
                    </g>
                </svg>
            </div>
        </div>
    )
}
export default Loading;