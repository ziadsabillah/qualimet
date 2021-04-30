import { useRouter } from 'next/router'
import cardsDefault from '../../data/cardsDefault'
import Layout from '../../components/Layout'


const ProjectDetails = () => {


    

    const router = useRouter()
    const { id } = router.query
    const card = cardsDefault ? cardsDefault.find(card => card.id === id) : {}
    
    return (
        <>
 
        <Layout>

        </Layout>

        </>
    )
}

export default ProjectDetails;