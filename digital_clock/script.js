function tick()
{
    const ele = <h1>{new Date().toLocaleTimeString()}</h1>;
    ReactDOM.render(ele, document.getElementById("root"));
}
setInterval(tick, 1000);