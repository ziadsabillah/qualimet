import DetailsContent from "../components/DetailsContent";
import DetailsPageHeader from "../components/DetailsPageHeader";
import Layout from "../components/Layout";
import CallToActionSection from "../components/Sections/CallToActionSection";
import Testimonials from '../components/Sections/Testimonials'

export default function About() {

    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent tristique. Massa enim nec dui nunc mattis enim ut. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Sem et tortor consequat id. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Bibendum est ultricies integer quis auctor elit sed. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Ut morbi tincidunt augue interdum velit euismod. Habitant morbi tristique senectus et netus et malesuada fames. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Quis vel eros donec ac odio tempor. Dictum varius duis at consectetur lorem donec massa. Neque egestas congue quisque egestas. A diam maecenas sed enim. Pellentesque massa placerat duis ultricies lacus sed turpis. Est ante in nibh mauris cursus mattis molestie a. Pretium fusce id velit ut tortor pretium viverra. Eget aliquet nibh praesent tristique magna sit. Tortor aliquam nulla facilisi cras fermentum. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Augue neque gravida in fermentum et sollicitudin ac orci. Erat imperdiet sed euismod nisi porta. Vel facilisis volutpat est velit egestas dui id.'
    return (
        <>
            <Layout>
                <DetailsPageHeader section={'A propos de nous'} />
                <DetailsContent imgPath={'/img/about.jpg'} 
                projectName={'A propos de Borvel'} projectDescription={lorem} />
                <CallToActionSection />
                <Testimonials />
            </Layout>
        </>
    )
}