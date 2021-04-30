import { useRouter } from 'next/router'
import cardsDefault from '../../data/cardsDefault'
import Layout from '../../components/Layout'
import DetailsPageHeader from '../../components/DetailsPageHeader'
import {SectionHeader} from '../../components/SectionHeader'
import DetailsContent from '../../components/DetailsContent'


const ProjectDetails = () => {


    

    const router = useRouter()
    const { id } = router.query
    const card = cardsDefault ? cardsDefault.find(card => card.id === id) : {}
    
    return (
        <>
 
        <Layout>
            <DetailsPageHeader section={'Details du Projet'} />
            <DetailsContent imgPath={card.imgPath} projectDescription={card.description} projectName={card.projectName} />
        </Layout>

        </>
    )
}

export default ProjectDetails;