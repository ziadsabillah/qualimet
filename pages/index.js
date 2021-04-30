import dynamic from 'next/dynamic'

import Layout from '../components/Layout'

const DynamicProjectSection = dynamic(() => import('../components/Sections/ProjectsSection'), {loading: () => <p>...</p>})
const DynamicTestimonials = dynamic(() => import('../components/Sections/Testimonials') , {loading: () => <p>...</p>})
const DynamicVideoSection = dynamic(() => import('../components/Sections/VideoSection'), {loading: () => <p>...</p>})
const DynamicContact = dynamic(() => import('../components/Sections/Contact'), {loading: () => <p>...</p>})
const DynamicHero = dynamic(() => import('../components/Hero'), {loading: () => <p>...</p>})
const DynamicCallToAction = dynamic(() => import('../components/Sections/CallToActionSection'), {loading: () => <p>...</p>})

export default function Home() {
  return (
    <Layout>
      <DynamicHero />
      <DynamicVideoSection />
      <DynamicProjectSection />
      <DynamicCallToAction />
      <DynamicTestimonials />
      <DynamicContact />
    </Layout>
  )
}
