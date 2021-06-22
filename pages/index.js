import Layout from '../components/Layout'


import ProjectsSection from '../components/Sections/ProjectsSection'
import VideoSection from '../components/Sections/VideoSection'
import Contact from '../components/Sections/Contact'
import Hero from '../components/Hero'
import CallToActionSection from '../components/Sections/CallToActionSection'

export default function Home() {
  return (
    <Layout title="QualiMet - Maroc">
      <Hero />
      {/* <VideoSection /> */}
      {/* <ProjectsSection /> */}
      <CallToActionSection />
      {/* <Contact /> */}
    </Layout>
  )
}
