const elForm = document.querySelector('form');
// const elInput = document.querySelector('#number');

const elPerson = document.querySelector('.person');
const elBicycle = document.querySelector('.bicycle');
const elCar = document.querySelector('.car');
const elPlain = document.querySelector('.plain');
const elError = document.querySelector('.error');

const personSpeed = 3.6;
const bicycleSpeed = 20.1;
const carSpeed = 70;
const plainSpeed = 800;

elForm.addEventListener('submit', function (e) {
	e.preventDefault();

	const space = Number(e.target.input.value);

	if (space == '' || isNaN(space)) {
		elError.textContent = 'iltimos son kiriting';
	} else {
		elError.textContent = '';
		const personTime = space / personSpeed;
		const personHour = Math.floor(personTime);
		const personTotalMinute = personTime - personHour;
		const personMinute = Math.floor(personTotalMinute * 60);
		const personSecond = Math.floor(
			(personTotalMinute * 60 - personMinute) * 60
		);

		const bicycleTime = space / bicycleSpeed;
		const bicycleHour = Math.floor(bicycleTime);
		const bicycleTotalMinute = bicycleTime - bicycleHour;
		const bicycleMinute = Math.floor(bicycleTotalMinute * 60);
		const bicycleSecond = Math.floor(
			(bicycleTotalMinute * 60 - bicycleMinute) * 60
		);

		const carTime = space / carSpeed;
		const carHour = Math.floor(carTime);
		const carTotalMinute = carTime - carHour;
		const carMinute = Math.floor(carTotalMinute * 60);
		const carSecond = Math.floor((carTotalMinute * 60 - carMinute) * 60);

		const plainTime = space / plainSpeed;
		const plainHour = Math.floor(plainTime);
		const plainTotalMinute = plainTime - plainHour;
		const plainMinute = Math.floor(plainTotalMinute * 60);
		const plainSecond = Math.floor(
			(plainTotalMinute * 60 - plainMinute) * 60
		);

		// console.log();

		elPerson.textContent = `${personHour} soat, ${personMinute} daqiqa, ${personSecond} soniya`;
		elBicycle.textContent = `${bicycleHour} soat, ${bicycleMinute} daqiqa, ${bicycleSecond} soniya`;
		elCar.textContent = `${carHour} soat, ${carMinute} daqiqa, ${carSecond} soniya`;
		elPlain.textContent = `${plainHour} soat, ${plainMinute} daqiqa, ${plainSecond} soniya`;
	}
});
