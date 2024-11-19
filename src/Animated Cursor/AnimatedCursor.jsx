import AnimatedCursor from "react-animated-cursor";
export default function(){
    return(
        <>
        <div>
            <AnimatedCursor
             innerSize={12} 
             outerSize={30}
             color="000,00,131"
             outerAlpha={0.2} 
             innerScale={1}
             outerScale={2}
             />
        </div>
        </>
    )
}