import { useRouter } from 'next/router'
import cardsDefault from '../../data/cardsDefault'
import Layout from '../../components/Layout'
import DetailsPageHeader from '../../components/DetailsPageHeader'
import {SectionHeader} from '../../components/SectionHeader'
import DetailsContent from '../../components/DetailsContent'


const ProjectDetails = () => {


    

    const router = useRouter()
    const { id } = router.query
    const card = cardsDefault ? cardsDefault.find(card => card.id === id) : {
        projectName: 'Projet Exemple',
        imgPath: '/img/project-1.jfif',
        projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit erat orci, et porttitor ligula lacinia egestas. Pellentesque et ante ante. Suspendisse erat libero, feugiat at leo vitae, convallis convallis quam. Aenean quis lectus pellentesque, tempus enim at, tristique lectus. Suspendisse blandit sed turpis ut scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium nisi at justo auctor luctus. Suspendisse tincidunt, ante non laoreet ornare, massa lectus dignissim metus, sit amet pharetra turpis lectus vel mi. Curabitur faucibus nisi non est ullamcorper, nec elementum urna lobortis. Nam tempus elit vel ullamcorper mattis. Etiam porttitor ut neque eu finibus. Suspendisse sed nibh ante.',
        id: 'abcd'
    }
    
    return (
        <>
 
        <Layout>
            <DetailsPageHeader section={'Details du Projet'} />
            <DetailsContent imgPath={card ? card.imgPath : ''} projectDescription={cardd ? card.description : ''} projectName={card ? card.projectName : ''} />
        </Layout>

        </>
    )
}

export default ProjectDetails;