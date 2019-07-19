

var text = document.querySelector("h1");

const minAxisValue = 200;
const maxAxisValue = 20;

const minEventValue = 0;
const maxEventValue = 1000;


if ( 'AmbientLightSensor' in window ) {
  const sensor = new AmbientLightSensor();
  sensor.onreading = () => {
	  console.log(sensor.illuminance)
    console.log('here')
	 fluidAxisVariation(minAxisValue, maxAxisValue, minEventValue, maxEventValue, sensor.illuminance, "--axis", text);
    
    // console.log('Current light level:', sensor.illuminance);
  };
  sensor.onerror = (event) => {
    console.log(event.error.name, event.error.message);
  };
  sensor.start();
}




// Fluid Axis Variation Event
function fluidAxisVariation(minimumAxisValue, maximumAxisValue, minimumEventValue, maximumEventValue, eventValue, axisCustomPropertyName, element) {
debugger
	const minAxisValue = minimumAxisValue;
	const maxAxisValue = maximumAxisValue;
    const minEventValue = minimumEventValue;
	const maxEventValue = maximumEventValue;
	const currentEventValue = eventValue;

	const eventPercent = (currentEventValue - minEventValue) / (maxEventValue - minEventValue);
	const fontAxisScale = eventPercent * (minAxisValue - maxAxisValue) + maxAxisValue;

	const newAxisValue = currentEventValue > maxEventValue
	   ? minAxisValue
       : currentEventValue < minEventValue
   			? maxAxisValue
   			: fontAxisScale;
	
	element.style.setProperty(axisCustomPropertyName, newAxisValue);
};

