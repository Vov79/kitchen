import About from '@//components/About';
import Showrooms from '@//components/Showrooms';
import Pages_Intro from '@//components/Pages_Intro';


export default function Showroom() {
    return(
        <div>
            <Pages_Intro/>
            <Showrooms/>
            <About/>
        </div>
    );
}