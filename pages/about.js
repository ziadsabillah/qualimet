import DetailsContent from "../components/DetailsContent";
import DetailsPageHeader from "../components/DetailsPageHeader";
import Layout from "../components/Layout";
import CallToActionSection from "../components/Sections/CallToActionSection";
import Testimonials from '../components/Sections/Testimonials'
import VideoSection from "../components/Sections/VideoSection";

export default function About() {

    const lorem = `
    Pour les professionnels et particuliers partout au Maroc. Notre entreprise met son savoir-faire et ses compétences au service de ces projets que ce soit un gros ou un petit chantier. Fournir des prestations de qualité dans les délais fixés, maintenir la croissance de l’entreprise par le contrôle d’une saine gestion, et l’investissement durable en recherche et développement, tels sont les piliers du Société ATOURRATE.
Dans un environnement à très forte concurrence, Société ATOURRATE considère depuis toujours que la réussite de son équipe est due à la qualité de son capital humain. Grâce à la mise en place de plans de formation et l’accompagnement au développement personnel et professionnel de nos ressources humaines. Aujourd’hui, le groupe est très bien implanté au niveau de toutes les villes du Maroc. Dotée d’une forte notoriété nationale, l’entreprise bénéficie d’une très bonne image et connue par le sérieux de ses prestations.`

    return (
        <>
            <Layout title="Présentation">
                <DetailsPageHeader section={'Présentation'} />
                <VideoSection />
                <CallToActionSection />
                <Testimonials />
            </Layout>
        </>
    )
}