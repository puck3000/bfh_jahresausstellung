export default function Horzline({mb}) {
    if(mb.marginBottom.includes('kleiner')) {
        return <hr className="my-2"/>
    } else {
        return <hr className="mt-2 mb-8"/>
    }
}