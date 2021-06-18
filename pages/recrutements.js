import Layout from '../components/Layout'

import { SectionHeader } from '../components/SectionHeader'
import AutoContainer from '../components/AutoContainer'
import { SubmitButton } from '../components/General'

import contact from '../data/contact'

export default function RecrutementPage() {
    return (
        <>
            <Layout title="Recrutements">
                <AutoContainer>
                    <SectionHeader
                        style={{ textAlign: 'center', margin: '3em 0' }}>
                        <h2>Rejoignez-nous</h2>
                        <p>Rejoignez notre equipe en nous envoyons votre CV!</p>
                    </SectionHeader>
                    <div style={{ textAlign: 'center', width: '100%', margin: '2em 0' }}>
                        <form action={`mailto:${contact.email}`} target="_blank" method="get">
                            <SubmitButton>
                                Envoyer votre CV
                            </SubmitButton>
                        </form>

                    </div>
                </AutoContainer>

            </Layout>
        </>
    )
}