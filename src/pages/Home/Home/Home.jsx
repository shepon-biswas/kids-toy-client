
import Slider from '../Slider/Slider';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';
import Gallery from '../../Gallery/Gallery';
import TestomonialVideo from '../../TestomonialVideo/TestomonialVideo';
import TestomonialSlider from '../../TestomonialSlider/TestomonialSlider';
import Brands from '../../shared/Brands/Brands';
import ShopByAge from '../../ShopByAge/ShopByAge';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <ShopByAge></ShopByAge>
            <TestomonialVideo></TestomonialVideo>
            <TestomonialSlider></TestomonialSlider>
            <Brands></Brands>
        </>
    );
};

export default Home;