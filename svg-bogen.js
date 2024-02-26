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

    let path            = `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`
    return path
}


const grafik    = document.querySelector('#grafik')
console.log('grafik');
const arcPath   = createArcPath( 180,270,50,100,100)
const path      = document.createElementNS("http://www.w3.org/2000/svg","path")

path.setAttribute   (   "d"        , arcPath        )
path.setAttribute   (   "stroke"   , "black"        )

path.setAttribute   (   "fill"     , "transparent"  )

grafik.append(path)

