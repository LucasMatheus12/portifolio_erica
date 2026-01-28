const projectsData = [
    {
        id: 1,
        name: 'Projeto DAC 1',
        category: 'Residencial',
        year: '2025',
        thumbnail: 'imagens/projeto1_capa.jpg',
        description: 'Este projeto foi desenvolvido como atividade avaliativa (AV1) na disciplina de DAC I, com foco no aprendizado e na prática do software Autodesk Revit. A proposta consistiu na modelagem arquitetônica de uma edificação residencial, incluindo planta baixa, cortes, perspectivas isométricas e quadros técnicos de portas e janelas, conforme apresentado no material do projeto. Ao longo do desenvolvimento, foram aplicados conceitos básicos de BIM, organização do modelo, padronização de elementos construtivos e representação gráfica, contribuindo para o aprimoramento das habilidades em modelagem digital e documentação técnica.',
        images: [
            'imagens/projeto1.jpg'
        ]
    },
    {
        id: 2,
        name: 'Projeto DAC II',
        category: 'Residencial',
        year: '2025',
        thumbnail: 'imagens/projeto2_capa.jpg',
        description: 'Estas atividades foram desenvolvidas na segunda unidade da disciplina de DAC I, com foco no aprofundamento do uso do software Autodesk Revit. O trabalho consistiu na modelagem completa de uma residência, realizada em conjunto com o professor, incluindo plantas, cortes, fachadas e perspectivas isométricas, conforme apresentado nos materiais das atividades.  A criação de uma fachada de forma livre, estimulando a criatividade e a autonomia projetual, além do domínio dos principais recursos de modelagem, representação técnica e organização do projeto em ambiente BIM, compondo o processo avaliativo da disciplina.',
        images: [
            'imagens/projeto2_cortes_e_perspectivas.jpg',
            'imagens/projeto2_plantas.jpg',
        ]
    },
    {
        id: 3,
        name: 'Escritório',
        category: 'Projeto',
        year: '2024',
        thumbnail: 'imagens/projeto3_capa.png',
        description: 'Este projeto corresponde ao primeiro trabalho desenvolvido na graduação e ao primeiro realizado de forma individual, representando um marco importante no processo de formação acadêmica. A proposta foi elaborada a partir de um programa de necessidades definido pelo professor, que atuou como cliente fictício, exigindo a criação completa de um “escritório” de projeto, incluindo identidade visual, definição de marca, pesquisa de referências e conceituação arquitetônica, conforme apresentado no material do projeto. O desenvolvimento envolveu todas as etapas de um projeto arquitetônico contemporâneo, desde o levantamento do terreno, estudo de topografia, análise solar e ventilação, definição de níveis e implantação, até a elaboração de plantas, cortes, fachadas, detalhamentos construtivos, paisagismo e projeto executivo. Para a produção da documentação técnica, foi utilizado o software AutoCAD; para a modelagem arquitetônica, o Autodesk Revit; e para a etapa de renderização e apresentação visual, o Lumion, integrando diferentes ferramentas ao processo projetual. A proposta foi estruturada de acordo com as exigências do programa de necessidades, buscando atender às demandas funcionais, estéticas e técnicas. Além disso, o trabalho incluiu a produção de imagens renderizadas para apresentação final, aproximando o projeto da realidade do mercado profissional. Essa experiência contribuiu significativamente para o desenvolvimento da autonomia, da organização metodológica e da compreensão do processo completo de concepção arquitetônica, consolidando conhecimentos fundamentais para a atuação na área.',
        pdfFile: 'pdfs/projeto3.pdf',
        images: [
            'imagens/projeto3_pag1.jpg',
            'imagens/projeto3_pag2.jpg',   
        ]
    },
    {
        id: 4,
        name: 'Projeto Casa Azul',
        category: 'Paisagem',
        year: '2024',
        thumbnail: 'imagens/projeto_casa_azul_capa.jpg',
        description: 'Saindo da zona de conforto dos projetos arquitetônicos convencionais, este trabalho foi desenvolvido na disciplina de Planejamento e Projeto da Paisagem I da graduação, em atividade realizada em grupo com cinco integrantes. A proposta consistiu na elaboração de uma residência sustentável, atendendo às exigências da disciplina e às diretrizes do Programa Casa +Azul da Caixa, conforme apresentado no material do projeto. A modelagem arquitetônica foi realizada no software Autodesk Revit, permitindo a organização técnica e espacial do projeto, enquanto a diagramação e apresentação das pranchas foram desenvolvidas na plataforma Canva. O trabalho também incluiu a produção de plantas humanizadas, cortes, perspectivas, estudos de cobertura e painéis explicativos, abordando aspectos de eficiência energética, conforto ambiental, gestão hídrica e desenvolvimento social. Essa experiência contribuiu para o fortalecimento do trabalho em equipe, da responsabilidade coletiva e da compreensão do papel do paisagismo e da sustentabilidade no processo projetual contemporâneo, ampliando a visão profissional além da escala exclusivamente arquitetônica.',
        pdfFile: 'pdfs/CASA_AZUL.pdf',
        images: [
            'imagens/projeto_casa_azul_pag1.jpg',
            'imagens/projeto_casa_azul_pag2.jpg',
        ]
    },
    {
        id: 5,
        name: 'Und II Domingos Gameleiro',
        category: 'Projeto Urbano',
        year: '2024',
        thumbnail: 'imagens/DOMINGOS_GAMELEIRA_capa.jpg',
        description: 'Este projeto foi desenvolvido na disciplina de Planejamento e Projeto Urbano e Regional I da graduação, com foco na análise e intervenção em áreas urbanas consolidadas. A atividade teve início com o diagnóstico do bairro Domingos Gameleira, em Pau dos Ferros/RN, envolvendo o levantamento de edificações com pavimento superior, usos residenciais e comerciais, pontos de descarte de resíduos, arborização, infraestrutura viária e condições de mobilidade, conforme apresentado no material do projeto. A partir dessa etapa analítica, foram identificadas potencialidades e fragilidades do bairro, servindo como base para a elaboração de uma proposta de intervenção urbana. O trabalho resultou na concepção de uma praça central como espaço estruturador da vida comunitária, integrando quadras poliesportivas e de areia, quiosques, área infantil, espaços para lazer, eventos, alimentação e convivência. O desenvolvimento envolveu estudos de topografia, fluxos, zoneamento, diretrizes urbanísticas, setorização dos usos, acessibilidade, paisagismo e qualificação dos espaços públicos, além da produção de plantas, cortes, perspectivas e diagramas explicativos. Essa experiência contribuiu para o fortalecimento da visão crítica sobre o espaço urbano, da capacidade de leitura territorial e da compreensão do papel do urbanismo na promoção da qualidade de vida, inclusão social e desenvolvimento sustentável.',
        pdfFile: 'pdfs/DOMINGOS_GAMELEIRA.pdf',
        images: [
            'imagens/DOMINGOS_GAMELEIRA_pag1.jpg',
            'imagens/DOMINGOS_GAMELEIRA_pag2.jpg',
        ]
    },
    {
        id: 6,
        name: 'RENDERS',
        category: 'Render Lumion',
        year: '2024',
        thumbnail: 'imagens/RENDER_01.jpg',
        description: 'Este conjunto de trabalhos foi desenvolvido na disciplina de Informatização do Projeto Arquitetônico da graduação, com foco no aprimoramento das técnicas de renderização e apresentação visual de projetos. Ao longo da disciplina, foram abordados diferentes softwares, incluindo o aprofundamento no uso do QGIS para análise de curvas de nível, além do Lumion e do Enscape para visualização tridimensional. O principal enfoque das atividades foi o software Lumion, no qual foram produzidas renderizações de fachadas frontal, posterior e lateral, além de ambientes internos, a partir de modelos fornecidos pelo professor. O desenvolvimento envolveu a criação e aplicação de materiais, configuração de iluminação natural e artificial, definição de condições climáticas, ajustes de tempo, enquadramento de câmeras e aplicação de efeitos visuais para valorização das cenas. Durante o processo, foram explorados aspectos como composição, realismo, narrativa visual e qualidade estética das imagens, buscando aproximar as representações do padrão utilizado no mercado profissional. Essa experiência contribuiu para o fortalecimento das habilidades em visualização arquitetônica, leitura espacial, apresentação de projetos e comunicação visual, ampliando a capacidade de traduzir conceitos técnicos em imagens atrativas e impactantes.',
        images: [
            'imagens/RENDER_02.jpg',
            'imagens/RENDER_03.jpg',
            'imagens/RENDER_01.jpg',
            'imagens/RENDER_04.jpg',
            'imagens/RENDER_05.jpg',
            'imagens/RENDER_06.jpg',
            'imagens/RENDER_07.jpg',
        ]
    },
    {
        id: 7,
        name: 'RENDERS PROJETO 1',
        category: 'Render Lumion',
        year: '2024',
        thumbnail: 'imagens/RENDER_P1_4.png',
        description: 'Este conjunto de trabalhos foi desenvolvido na disciplina de Informatização do Projeto Arquitetônico da graduação, com foco no aprimoramento das técnicas de renderização e apresentação visual de projetos. Ao longo da disciplina, foram abordados diferentes softwares, incluindo o aprofundamento no uso do QGIS para análise de curvas de nível, além do Lumion e do Enscape para visualização tridimensional. O principal enfoque das atividades foi o software Lumion, no qual foram produzidas renderizações de fachadas frontal, posterior e lateral, além de ambientes internos, a partir de modelos fornecidos pelo professor. O desenvolvimento envolveu a criação e aplicação de materiais, configuração de iluminação natural e artificial, definição de condições climáticas, ajustes de tempo, enquadramento de câmeras e aplicação de efeitos visuais para valorização das cenas. Durante o processo, foram explorados aspectos como composição, realismo, narrativa visual e qualidade estética das imagens, buscando aproximar as representações do padrão utilizado no mercado profissional. Essa experiência contribuiu para o fortalecimento das habilidades em visualização arquitetônica, leitura espacial, apresentação de projetos e comunicação visual, ampliando a capacidade de traduzir conceitos técnicos em imagens atrativas e impactantes.',
        images: [
            'imagens/RENDER_P1_1.png',
            'imagens/RENDER_P1_2.png',
            'imagens/RENDER_P1_3.png',
            'imagens/RENDER_P1_5.png',
            'imagens/RENDER_P1_4.png',
            'imagens/RENDER_P1_6.png',
            'imagens/RENDER_P1_7.jpg',
            'imagens/RENDER_P1_8.jpg',
            'imagens/RENDER_P1_9.jpg',
            'imagens/RENDER_P1_10.jpg',
        ]
    },
    {
        id: 8,
        name: 'Apartamento K 3D',
        category: 'Projetos 3D Maquete',
        year: '2024',
        thumbnail: 'imagens/APARTAMENTO_K_3D.jpg',
        description: 'Este projeto consiste no desenvolvimento de uma maquete eletrônica de um edifício residencial, elaborada no software SketchUp durante o período de estágio. A proposta teve como objetivo a representação volumétrica da edificação, com foco na composição arquitetônica, organização dos pavimentos, estudo de fachadas e leitura espacial do conjunto, conforme ilustrado na maquete digital apresentada. O trabalho priorizou a modelagem da forma, dos elementos estruturais e das aberturas, buscando clareza na volumetria e fidelidade às diretrizes do projeto. Nesta etapa, não foram desenvolvidos os interiores, concentrando o processo na compreensão do edifício como um todo, na relação entre os volumes e na inserção urbana. Essa experiência contribuiu para o aprimoramento das habilidades em modelagem tridimensional, visualização espacial e representação arquitetônica, além de fortalecer a prática profissional no uso de ferramentas digitais aplicadas ao desenvolvimento de projetos no contexto do estágio.',
        images: [
            'imagens/APARTAMENTO_K_3D_1.jpg',
            'imagens/APARTAMENTO_K_3D_2.jpg',
            'imagens/APARTAMENTO_K_3D.jpg',
        ]
    },
    {
        id: 9,
        name: 'Fachada',
        category: 'Projetos 3D Maquete',
        year: '2024',
        thumbnail: 'imagens/FACHADA_SANDROELHA.jpg',
        description: 'Esta fachada foi desenvolvida no SketchUp como parte das atividades do estágio, representando um avanço em relação às modelagens anteriores por exigir maior nível de detalhamento e domínio da ferramenta. O trabalho envolveu a construção completa da volumetria a partir da elevação das paredes, definição e aplicação de materiais e texturas, modelagem do caimento do telhado e inserção de esquadrias, garantindo maior realismo e coerência construtiva. Além disso, foram utilizados componentes e blocos para compor a cena, como vegetação e elementos de apoio, contribuindo para uma apresentação mais próxima do padrão profissional. O processo reforçou habilidades de modelagem arquitetônica, leitura de fachada, organização de elementos e refinamento visual, consolidando uma evolução clara no desempenho e na qualidade das entregas ao longo do estágio.',
        images: [
            'imagens/FACHADA_SANDROELHA.jpg',
        ]
    },
    {
        id: 10,
        name: 'Sala de Reuniões',
        category: 'Projetos 3D Maquete',
        year: '2024',
        thumbnail: 'imagens/SALA_DE_REUNIÕES_DAIRILENE1.jpg',
        description: 'Este projeto consiste na modelagem tridimensional de interiores de uma sala de reuniões, desenvolvida no SketchUp durante o estágio, apresentando nível de complexidade semelhante aos trabalhos anteriores, porém com foco específico no ambiente interno. A proposta concentrou-se na organização espacial, no layout do mobiliário e na criação de uma atmosfera funcional e profissional. O desenvolvimento envolveu a definição do espaço interno a partir da inserção de esquadrias, modelagem dos elementos construtivos existentes e composição completa do ambiente, incluindo mobiliário, revestimentos, iluminação e elementos decorativos. Mesmo sem o levantamento das paredes, o trabalho exigiu atenção às proporções, circulação, ergonomia e conforto visual. Essa experiência contribuiu para o aprimoramento das habilidades em modelagem de interiores, detalhamento de ambientes corporativos e visualização tridimensional, fortalecendo a capacidade de traduzir conceitos projetuais em representações digitais coerentes e alinhadas às demandas profissionais.',
        images: [
            'imagens/SALA_DE_REUNIÕES_DAIRILENE2.jpg',
            'imagens/SALA_DE_REUNIÕES_DAIRILENE3.jpg',
            'imagens/SALA_DE_REUNIÕES_DAIRILENE1.jpg',
            'imagens/SALA_DE_REUNIÕES_DAIRILENE4.jpg',
        ]
    },
    {
        id: 11,
        name: 'PJ Comercial',
        category: 'Projetos Executivos',
        year: '2024',
        thumbnail: 'imagens/PJ_COMERCIAL_01.jpg',
        description: 'Durante o estágio, além das atividades de modelagem tridimensional, foram desenvolvidos projetos executivos no software AutoCAD, com foco na elaboração completa da documentação técnica necessária para execução das obras, conforme apresentado nas pranchas do projeto comercial. Os trabalhos envolveram a produção de plantas baixas, cortes, fachadas, planta de cobertura, planta de situação, quadros de esquadrias, cotagem detalhada, definição de níveis, especificação de materiais e organização das pranchas conforme padrões técnicos e normativos. Todo o processo foi desenvolvido com atenção à precisão gráfica, legibilidade das informações e compatibilização dos elementos construtivos. Essa experiência contribuiu para o fortalecimento das habilidades em desenho técnico, leitura e interpretação de projetos, padronização de layers, controle de escalas e desenvolvimento de projetos executivos voltados às exigências do mercado profissional, ampliando a compreensão sobre as etapas técnicas que antecedem a execução das edificações.',
        images: [
            'imagens/PJ_COMERCIAL_02.jpg',
            'imagens/PJ_COMERCIAL_01.jpg',
        ]
    },
    {
        id: 12,
        name: 'Projeto Deyn',
        category: 'Projetos Executivos',
        year: '2024',
        thumbnail: 'imagens/PROJETO_DEYN_NOVO.jpg',
        description: 'Este projeto refere-se ao desenvolvimento de um projeto executivo residencial elaborado no software AutoCAD durante o estágio, contemplando a produção completa da documentação técnica necessária para a execução da obra, conforme apresentado no material do projeto. O trabalho envolveu a elaboração das plantas arquitetônicas, cortes, fachada, planta de cobertura, planta de situação, contagem, definição de níveis, especificação de esquadrias e organização das pranchas técnicas, seguindo padrões profissionais e normativos. A maior parte do projeto técnico foi desenvolvida de forma autônoma, demonstrando domínio do processo de detalhamento e responsabilidade na organização das informações. A planta hidrossanitária foi desenvolvida por uma engenheira colaboradora do escritório, sendo posteriormente integrada ao conjunto técnico por meio da compatibilização com a planta arquitetônica elaborada. Esse processo possibilitou o contato direto com o trabalho multidisciplinar, reforçando a importância da colaboração entre as áreas e da correta sobreposição e organização dos projetos complementares. Essa experiência contribuiu para o aprimoramento das habilidades em desenho técnico, compatibilização de projetos, organização de arquivos e desenvolvimento de documentação executiva voltada às exigências do mercado profissional.',
        images: [
            'imagens/PROJETO_DEYN_NOVO.jpg',
        ]
    }
];