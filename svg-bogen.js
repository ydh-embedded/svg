function degressToRadians(gegrees){
    return degrees / 360 * 2 * Math.PI ;
}
function radiansToDegrees(radians){
    return radians / (2 * Math.PI) * 360 ;
}

function creatArcPath(startAngel , endAngel , radius, KreisX , KreisY){
    const startRadians  = degressToRadians(startAngel)
    const endRadians    = degressToRadians (endAngel)
    const startOffsetX  = Math.cos(startRadians) * radius
    const startOffsetY  = Math.sin(startRadians) * radius
    const endOffsetX    = Math.cos(endRadians) * radius
    const endOffsetY    = Math.sin(endRadians) * radius

    const startX        = startOffsetX + KreisX
    const startY        = startOffsetY + KreisY
    const endX          = endOffsetX + KreisX
    const endY          = endOffsetY + KreisY

    const useLongArc    = (endAngel - startAngel ) >= 180 ? "1" : "0"
    const drawClockwise = "1"

    let path            = ` M ${startX} ${startY} A ${radius} ${radius} `
                        + ` 0 ${useLongArc} ${drawClockwise} `
                        + `   ${endX} ${endY}`
    return path
}


const grafik    = document.querySelector('#grafik')
console.log('grafik');
const arcPath   = createArcPath( 180,270,50,100,100)


const carbohydrates      = document.createElementNS("http://www.w3.org/2000/svg", "path")

carbohydrates.setAttribute   (   "d"        , arcPath        )
carbohydrates.setAttribute   (   "stroke"   , "black"        )
carbohydrates.setAttribute   (   "stroke"   , "black"        )
carbohydrates.setAttribute   (   "fill"     , "transparent"  )


const fat      = document.createElementNS("http://www.w3.org/2000/svg", "path")

fat.setAttribute            (   "d"        , arcPath        )
fat.setAttribute            (   "stroke"   , "red"          )
fat.setAttribute            (   "stroke"   , "red"          )
fat.setAttribute            (   "fill"     , "transparent"  )


const proteins      = document.createElementNS("http://www.w3.org/2000/svg", "path")

proteins.setAttribute       (   "d"        , arcPath         )
proteins.setAttribute       (   "stroke"   , "yellow"        )
proteins.setAttribute       (   "stroke"   , "yellow"        )
proteins.setAttribute       (   "fill"     , "transparent"   )



grafik.append(carbohydrates , fat , proteins )

console.log(grafik);


