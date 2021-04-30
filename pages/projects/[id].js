import { useRouter } from 'next/router'
import cardsDefault from '../../data/cardsDefault'
import Layout from '../../components/Layout'
import DetailsPageHeader from '../../components/DetailsPageHeader'


const ProjectDetails = () => {


    

    const router = useRouter()
    const { id } = router.query
    const card = cardsDefault ? cardsDefault.find(card => card.id === id) : {}
    
    return (
        <>
 
        <Layout>
            <DetailsPageHeader section={card ? card.projectName : ''} />
        </Layout>

        </>
    )
}

export default ProjectDetails;