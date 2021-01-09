import first from './img/1.jpg';
import second from './img/2.jpg';
import third from './img/3.jpg';

const data = {
    testimonials: [
        {
            _id: 1,
        img: first,
        name: 'Mr Smith',
        rank: 'Father',
        text: 'I told my wife she was drawing her eyebrows too high. She looked surprised.'
        }
    , {
            _id: 2,
            img: second,
            name: 'Mrs Puff',
            rank: 'Mother',
            text: 'You don\'t need a parachute to go skydiving.\n' +
                'You need a parachute to go skydiving \n' +
                ' twice.'
        }, {
            _id: 3,
            img: third,
            name: 'Mrs Puff',
            rank: 'Mother',
            text: 'Did you hear about the claustrophobic astronaut? He just needed a little space.'
        },
    ]
}

 export default data;
