import redPicker from '../images/color/picker-red.png';
import bluePicker from '../images/color/picker-blue.png';
import blackPicker  from "../images/color/picker-black.png";

import redDemo from '../images/color/demo-red.png';
import blueDemo from '../images/color/demo-blue.png';
import blackDemo from '../images/color/demo-black.png';

import redFinish from '../images/color/finish-red.png';
import blueFinish from '../images/color/finish-blue.png';
import blackFinish from '../images/color/finish-red.png';


export const red = {
    label: 'Metalic Vermilion',
    picker: redPicker,
    demo: redDemo,
    finishImage: redFinish
};

export const blue = {
    label:'Thunderbolt Blue',
    picker: bluePicker,
    demo: blueDemo,
    finishImage: blueFinish
};

export const black = {
    label:'Space Grey',
    picker: blackPicker,
    demo: blackDemo,
    finishImage: blackFinish
};

export const colorArray = [red, blue, black];