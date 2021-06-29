import Layout from '../components/Layout'


import ProjectsSection from '../components/Sections/ProjectsSection'
import VideoSection from '../components/Sections/VideoSection'
import Contact from '../components/Sections/Contact'
import Hero from '../components/Hero'
import CallToActionSection from '../components/Sections/CallToActionSection'
import Services from '../components/Sections/Services'
import Info from '../components/Info';
import {data} from '../data/general-services'

export default function Home() {
  return (
    <Layout title="QualiMet - Maroc">
      <Hero />
      {/* <VideoSection /> */}
      {/* <ProjectsSection /> */}
      <CallToActionSection />
      <Services subtitle='Accrédités par le Semac & Tunac' title="SERVICES" data={data} />
      <Services subtitle='Prestations' title="Vérification" data={data}/>
      <Contact />
      <Info logo='/img/logofooter.png' address="23 bd boured, Roches Noire, Casablanca, Maroc" email="email@email.ma"phone="(212) 05-22-24-38-76" />
    </Layout>
  )
}
