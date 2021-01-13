
function LightBulb({isOn}) {
	return <div className="d-flex justify-content-center align-content-center">
		<h2 className="h2"> { isOn ? '💡' : '💤'}</h2>
	</div>
}

export default LightBulb;
