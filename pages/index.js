import Hero from '../components/Hero'
import Layout from '../components/Layout'
import CallToActionSection from '../components/Sections/CallToActionSection'
import ProjectSection from '../components/Sections/ProjectsSection'
import Testimonials from '../components/Sections/Testimonials'
import VideoSection from '../components/Sections/VideoSection'
import Contact from '../components/Sections/Contact'
import Footer from '../components/Sections/Footer'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <VideoSection />
      <ProjectSection />
      <CallToActionSection />
      <Testimonials />
      <Contact />
      <Footer />
    </Layout>
  )
}
