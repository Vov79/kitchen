import About from "@//components/About";
import Kitchens from "@//components/Kitchens";
import Pages_Intro from "@//components/Pages_Intro";


export default function Bucatarii() {
    return(
        <div className="app">
            <Pages_Intro/>
            <Kitchens/>
            <About/>
        </div>
    );
}