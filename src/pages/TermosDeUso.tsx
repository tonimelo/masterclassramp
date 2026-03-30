import { Link } from "react-router-dom";

export default function TermosDeUso() {
  return (
    <div className="bg-background min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-12 hover:opacity-80 transition">
          ← Voltar para a página principal
        </Link>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-2">
          Termos de <span className="text-primary">Uso</span>
        </h1>
        <p className="text-xs text-muted-foreground/40 tracking-wider mb-16">Última atualização: 29 de março de 2026</p>

        <div className="space-y-10">
          <Section title="1. Aceitação dos termos">
            <p>
              Ao acessar nossas páginas e se inscrever em qualquer evento, masterclass ou conteúdo da
              <strong className="text-foreground"> Rumo à Máxima Potência</strong>, nome fantasia da
              <strong className="text-foreground"> RM Desenvolvimento Humano e Educação Corporativa LTDA</strong>,
              CNPJ <strong className="text-foreground">49.585.305/0001-00</strong>, você declara ter lido,
              compreendido e concordado com os presentes Termos de Uso em sua totalidade.
            </p>
            <p>
              Caso não concorde com qualquer disposição destes termos, solicitamos que não realize a inscrição
              e não utilize nossos serviços.
            </p>
          </Section>

          <Section title="2. Sobre a masterclass">
            <p>
              A Masterclass "Da Operação Caótica ao Comando Estratégico" é um evento educacional online,
              transmitido ao vivo, de caráter informativo e formativo. O conteúdo é apresentado por
              especialistas convidados e tem como objetivo compartilhar conhecimento sobre gestão empresarial
              e inteligência financeira.
            </p>
            <p>
              A inscrição garante acesso ao evento ao vivo na data e horário informados, bem como à gravação
              pelo período especificado na página de inscrição. O acesso ao grupo VIP está condicionado ao
              perfil de qualificação do inscrito, conforme critérios definidos pela organização.
            </p>
          </Section>

          <Section title="3. Gratuidade e condições de acesso">
            <p>
              A participação na masterclass é gratuita. A Rumo à Máxima Potência reserva-se o direito de
              limitar o número de vagas disponíveis, encerrar as inscrições antecipadamente e alterar
              data, horário ou formato do evento mediante comunicação prévia aos inscritos por e-mail
              ou WhatsApp.
            </p>
            <p>
              O link de acesso ao evento será enviado ao e-mail e/ou WhatsApp cadastrados no formulário.
              A empresa não se responsabiliza por dados de contato informados incorretamente pelo usuário.
            </p>
          </Section>

          <Section title="4. Propriedade intelectual">
            <p>
              Todo o conteúdo apresentado na masterclass, incluindo apresentações, metodologias, materiais
              complementares, gravações e demais produções, é de propriedade exclusiva da
              Rumo à Máxima Potência e/ou dos especialistas convidados.
            </p>
            <p>É expressamente proibido ao participante:</p>
            <ul>
              <li>Gravar, reproduzir ou transmitir o conteúdo do evento sem autorização prévia e por escrito</li>
              <li>Compartilhar o link de acesso ao evento com terceiros não inscritos</li>
              <li>Utilizar os materiais para fins comerciais sem licença expressa da empresa</li>
              <li>Publicar trechos do conteúdo em redes sociais ou plataformas públicas sem autorização</li>
            </ul>
            <p>
              O descumprimento dessas disposições sujeita o infrator às penalidades previstas na
              Lei de Direitos Autorais (Lei nº 9.610/1998) e demais legislações aplicáveis.
            </p>
          </Section>

          <Section title="5. Responsabilidades e limitações">
            <p>
              O conteúdo da masterclass tem caráter exclusivamente educacional e informativo. As
              informações compartilhadas pelos especialistas representam suas perspectivas e experiências
              profissionais, e não constituem consultoria jurídica, contábil, financeira ou empresarial
              individualizada.
            </p>
            <p>
              A Rumo à Máxima Potência não garante resultados específicos decorrentes da aplicação
              dos conteúdos apresentados, uma vez que os resultados dependem de fatores individuais
              de cada empresa e empresário.
            </p>
            <p>
              Não nos responsabilizamos por falhas técnicas de conexão à internet, interrupções de
              serviço de plataformas de terceiros ou quaisquer problemas de acesso fora do nosso controle.
            </p>
          </Section>

          <Section title="6. Conduta do participante">
            <p>
              Ao participar do evento e/ou do grupo VIP, o inscrito compromete-se a manter uma postura
              respeitosa com os demais participantes, palestrantes e equipe de organização. É vedado:
            </p>
            <ul>
              <li>Utilizar linguagem ofensiva, discriminatória ou assediante</li>
              <li>Divulgar conteúdo publicitário não autorizado nos canais do evento</li>
              <li>Praticar spam ou qualquer forma de abordagem comercial não solicitada a outros participantes</li>
            </ul>
            <p>
              O descumprimento dessas normas pode resultar na remoção do participante do evento e do
              grupo VIP, sem direito a qualquer compensação.
            </p>
          </Section>

          <Section title="7. Uso da imagem e depoimentos">
            <p>
              Ao participar do evento ao vivo, o inscrito autoriza a Rumo à Máxima Potência a utilizar
              eventuais comentários, depoimentos e interações realizadas nos chats públicos do evento
              para fins de divulgação educacional e institucional, com ou sem identificação do autor,
              salvo solicitação expressa em contrário.
            </p>
            <p>
              A transmissão ao vivo do evento pode ser gravada. A participação no evento implica ciência
              e concordância com essa possibilidade.
            </p>
          </Section>

          <Section title="8. Privacidade e proteção de dados">
            <p>
              O tratamento dos dados pessoais coletados no processo de inscrição é regido pela nossa
              <Link to="/politica-de-privacidade" className="text-primary underline underline-offset-2 hover:opacity-80 transition"> Política de Privacidade</Link>, que faz parte integrante
              destes Termos de Uso. Ao aceitar estes termos, você também declara ter lido e concordado
              com a Política de Privacidade.
            </p>
          </Section>

          <Section title="9. Alterações nos termos">
            <p>
              Estes Termos de Uso podem ser atualizados a qualquer momento. A versão vigente será sempre
              a publicada nesta página, com a respectiva data de atualização. O uso continuado dos nossos
              serviços após qualquer alteração implica na aceitação dos novos termos.
            </p>
          </Section>

          <Section title="10. Foro e legislação aplicável">
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Eventuais
              litígios decorrentes da sua interpretação ou cumprimento serão submetidos ao foro da
              comarca de São Paulo, estado de São Paulo, com renúncia expressa a qualquer outro,
              por mais privilegiado que seja.
            </p>
          </Section>

          <Section title="11. Contato">
            <p>Para dúvidas sobre estes Termos de Uso, entre em contato:</p>
            <ul>
              <li><strong className="text-foreground">Empresa:</strong> RM Desenvolvimento Humano e Educação Corporativa LTDA</li>
              <li><strong className="text-foreground">Nome fantasia:</strong> Rumo à Máxima Potência</li>
              <li><strong className="text-foreground">CNPJ:</strong> 49.585.305/0001-00</li>
              <li><strong className="text-foreground">E-mail:</strong> <a href="mailto:contato@rumoamaximapotencia.com.br" className="text-primary underline underline-offset-2 hover:opacity-80 transition">contato@rumoamaximapotencia.com.br</a></li>
            </ul>
          </Section>
        </div>

        <div className="w-10 h-0.5 bg-primary my-14" />
        <p className="text-xs text-muted-foreground/30">
          Estes termos foram elaborados em conformidade com o Código de Defesa do Consumidor
          (Lei nº 8.078/1990), a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e a
          Lei de Direitos Autorais (Lei nº 9.610/1998).
        </p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base sm:text-lg font-bold text-foreground uppercase tracking-wide mb-4 flex items-center gap-3">
        <span className="w-1 h-5 bg-primary rounded-full inline-block" />
        {title}
      </h2>
      <div className="text-sm sm:text-base text-muted-foreground/70 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-muted-foreground/70">
        {children}
      </div>
    </div>
  );
}