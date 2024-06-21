import src1 from './images/1.jpg'
import src2 from './images/2.jpg'
import src3 from './images/3.jpg'
import src4 from './images/4.jpg'
import src5 from './images/5.jpg'

function getSrc(id) {
    switch (id) {
        case 1: {
            return src1;
        }
        case 2: {
            return src2;
        }
        case 3: {
            return src3;
        }
        case 4: {
            return src4;
        }
        case 5: {
            return src5;
        }
        default: {
            return src1;
        }
    }
}

export default getSrc