import Page from '../components/Page'

export default function About() {
    return (
        <Page>
            <div style={{ maxWidth: '800px', padding: '0 20px' }}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '25px', marginBottom: '85px'}}>
                    <h2>Sobre o projeto</h2>
                    <p>Uma aplicação web para administrar seu tempo. Este projeto foi feito em React JS, com o propósito de testar conhecimentos e ajudar as pessoas. Enjoy!</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '25px'}}>
                    <h2>Sobre mim</h2>
                    <p>Me chamo Gabriel. Estudante da área de desenvolvimento web front-end. Meus estudos envolvem HTML, CSS, JavaScript, React JS e outras tecnologias. Confira minhas redes sociais nos links acima!</p>
                </div>
            </div>
        </Page>
    )
}