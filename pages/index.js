import Hero from '../components/Hero'
import Layout from '../components/Layout'
import ProjectSection from '../components/Sections/ProjectsSection'
import VideoSection from '../components/Sections/VideoSection'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <VideoSection />
      <ProjectSection />
    </Layout>
  )
}
