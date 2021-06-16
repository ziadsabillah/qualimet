import Layout from "../../components/Layout";
import services from '../../data/services'
import DetailsPageHeader from '../../components/DetailsPageHeader'
import SideBarLayout from '../../components/SideBarLayout'



export default function Services() {
    const images = [
        '/img/service-1.jpg',
        '/img/service-2.jpg',
        '/img/service-3.jpg'
    ]
    return (
        <>
        <Layout title="Nos Services">
                <DetailsPageHeader section={services[0] ? services[0].title : ''} />
                <SideBarLayout allServices={services} currentService={services[0]} images={images} />
            </Layout>
        </>
    )
}