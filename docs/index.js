// ===== TRANSLATIONS =====
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-specialties': 'Specialties',
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-badge': 'Open to new opportunities',
        'hero-title': 'MAKING DIGITAL IDEAS COME TRUE',
        'hero-desc': "Crafting immersive digital worlds by weaving code with creativity. I'm a full-stack developer and SAP BTP specialist. Let's turn your vision into captivating digital reality.",
        'hero-btn': 'Get in Touch',
        'specialties-heading': 'MY <span>SPECIALTIES.</span>',
        'spec-fe-title': 'Front-end',
        'spec-fe-desc': 'Creating beautiful and functional websites and applications with HTML/CSS and JavaScript.',
        'spec-be-title': 'Back-end',
        'spec-be-desc': 'Building robust and scalable back-end systems with TypeScript, Node.js and SQL.',
        'spec-ai-title': 'Prompt Engineering',
        'spec-ai-desc': 'Creating effective creative chatbot prompts and stunning AI-generated visuals.',
        'spec-sap-title': 'SAP / BTP Developer',
        'spec-sap-desc': 'Building enterprise integrations and cloud extensions on SAP BTP using CAP, OData and ABAP.',
        'about-heading': 'HELLO THERE,<span>I AM LUCAS JAQUES.</span>',
        'about-p1': "Hi, I'm Lucas Jaques, a full-stack developer and SAP BTP specialist based in Brazil. With hands-on experience in the SAP Cloud Application Programming (CAP) model and real-world integrations with SAP S/4HANA, I bridge the gap between enterprise systems and modern cloud solutions.",
        'about-p2': "When I'm not coding, you can find me playing video games, watching movies, or anime.",
        'about-completion': 'Completing the DSM course in July 2026.',
        'sap-heading': 'SAP <span>EXPERTISE.</span>',
        'sap-desc': 'Active SAP ecosystem professional with hands-on experience building cloud-native solutions on SAP BTP. Currently delivering real integration solutions for clients using SAP S/4HANA Public Edition.',
        'sap-btp-desc': 'Business Technology Platform — cloud-native apps and integrations',
        'sap-cap-desc': 'Cloud Application Programming Model — certified developer',
        'sap-s4-desc': 'Public Edition integrations and extensions',
        'sap-fiori-desc': 'UI5 development and Fiori Elements customization',
        'sap-abap-desc': 'Custom development and enhancement implementations',
        'sap-odata-desc': 'API design, integration and consumption',
        'cert-heading': 'MY <span>CERTIFICATIONS.</span>',
        'cert-name': 'SAP Certified Associate',
        'cert-subtitle': 'Back-End Developer — SAP Cloud Application Programming Model',
        'cert-verify': 'Verify Certificate',
        'portfolio-heading': 'MY <span>PORTFOLIO.</span>',
        'featured-badge': 'Featured Project',
        'featured-desc': 'An ambitious SAP integration platform currently serving real clients. Delivers nota fiscal (NF-e) monitoring integrated directly into SAP S/4HANA Public Edition — with a pipeline of new integration capabilities in development.',
        'client-label': 'Live client:',
        'private-label': 'Private Project',
        'fatec-tag': 'FATEC · Interdisciplinary Projects',
        'fatec-heading': 'CANDAGO <span>ABPs.</span>',
        'fatec-desc': 'Projects developed at FATEC under the ABP (Project-Based Learning) methodology, in partnership with the Candago organization. Real systems built by real teams tackling real problems.',
        'candago-scrum-desc': 'Scrum management platform — sprint planning, backlog and team collaboration.',
        'sem-tag-1': '1DSM – 2nd Sem. 2022',
        'sem-tag-2': '2DSM – 1st Sem. 2023',
        'sem-tag-3': '3DSM – 2nd Sem. 2023',
        'sem-tag-4': '4DSM – 1st Sem. 2024',
        'sem-tag-5': '5DSM – 2nd Sem. 2024',
        'sem-tag-6': '6DSM – 1st Sem. 2025',
        'contrib-label': 'My contribution:',
        'candago-scrum-contrib': "Front-end development with HTML, CSS and JavaScript and participation in the team's Scrum ceremonies.",
        'candago-2-contrib': 'Full-stack work — building the React front-end and the Node.js REST API with PostgreSQL.',
        'candago-3-contrib': 'Front-end development with React and TypeScript and integration with the Node.js/MongoDB API.',
        'candago-4-contrib': 'Development of the Expo mobile app and integration of real-time telemetry via MQTT.',
        'candago-5-contrib': 'Development of the React Native app and integration of the TensorFlow breed-classification model.',
        'candago-6-contrib': 'Development of the chatbot conversation flows with Python/FastAPI and the NLP intent routing.',
        'candago-2-desc': 'Project management platform — upload and manage projects, register team members, statistical reports and PDF data export.',
        'candago-3-desc': 'Nutrition and health tracking app — meal registration, water intake, macronutrient monitoring and personal goal management.',
        'candago-4-desc': 'IoT monitoring mobile app — device telemetry collection via MQTT, real-time data visualization and Docker-containerized backend.',
        'candago-5-desc': 'Mobile platform for registering and finding lost dogs — geolocation, camera and AI-powered breed classification with 120+ breeds.',
        'candago-6-desc': 'AI-powered WhatsApp chatbot for Procon de Jacareí — automates complaint intake, consumer rights guidance and intelligent routing with human escalation.',
        'view-project': 'View Project',
        'view-github': 'View on GitHub',
        'other-projects-label': 'Other Projects',
        'stat-abp': 'FATEC ABP Projects',
        'stat-cert': 'SAP Certification',
        'stat-client': 'Live SAP Client',
        'stat-years': 'Years of Experience',
        'timeline-heading': 'MY <span>JOURNEY.</span>',
        'tl-1-title': 'FATEC Jacareí',
        'tl-1-desc': 'Started DSM — building the foundation for modern full-stack development.',
        'tl-2-title': 'Full-Stack ABPs',
        'tl-2-desc': '2nd & 3rd semester projects with React, TypeScript, Node.js, PostgreSQL and MongoDB.',
        'tl-3-title': 'SAP Market Entry',
        'tl-3-desc': 'Joined the SAP ecosystem, specializing in SAP BTP and Cloud Application Programming Model.',
        'tl-4-title': 'SAP CAP Certified',
        'tl-4-desc': 'Achieved SAP Certified Associate — Back-End Developer for Cloud Application Programming Model.',
        'tl-5-title': 'Live Client & Advanced ABPs',
        'tl-5-desc': 'Luma integration running in production for Vida Veg. Advanced ABPs featuring ML, IoT and AI/NLP.',
        'client-heading': 'Real Impact. Real Client.',
        'client-desc': 'Nota fiscal (NF-e) monitoring running live in SAP S/4HANA Public Edition. Enterprise integration for real — not just a demo.',
        'cf-1': 'Production Environment',
        'cf-3': 'NF-e Integration',
        'contact-heading': 'TALK <span>TO ME.</span>',
        'contact-desc': 'You can reach me through my professional networks:',
        'footer-tagline': 'Built with pure HTML, CSS & JavaScript — no frameworks.',
        'cat-prof': 'Professional Projects',
        'cat-acad': 'Academic Projects',
        'cat-pers': 'Personal Projects',
        'featured-period': 'In production since 2024',
        'featured-contrib': 'Complete development of the platform — front-end, back-end and SAP integrations — in collaboration with one partner.',
        'view-demo': 'Live Demo',
        'about-goals': 'Professional goal: to grow as a SAP BTP / full-stack engineer, building high-impact enterprise integrations and cloud solutions.',
        'langs-pt': 'Portuguese — Native',
        'langs-en': 'English — Advanced',
        'todolist-desc': 'Task management app with JWT authentication, role-based access control (RBAC), SQLite persistence and an interactive drag-and-drop Kanban board.',
        'todolist-contrib': 'Solo project — full development of the front-end, REST API and database.',
        'tincat-desc': '"Tinder for cats" concept website — a fun take on the Tinder experience built to practice responsive layouts.',
        'tincat-contrib': 'Solo project — design and full implementation.',
        'simon-desc': 'Browser version of the classic Simon memory game — color sequences, sounds and progressive difficulty.',
        'simon-contrib': 'Solo project — game logic and interface in pure JavaScript.',
        'drum-desc': 'Interactive virtual drum kit — play with mouse clicks or keyboard keys, with real drum samples.',
        'drum-contrib': 'Solo project — DOM event handling and audio playback in JavaScript.',
        'dice-desc': 'Two-player dice game — random rolls decide the winner on each page refresh.',
        'dice-contrib': 'Solo project — randomization logic and DOM manipulation.',
    },
    pt: {
        'nav-home': 'Início',
        'nav-specialties': 'Especialidades',
        'nav-about': 'Sobre',
        'nav-projects': 'Projetos',
        'nav-contact': 'Contato',
        'hero-badge': 'Aberto a novas oportunidades',
        'hero-title': 'TRANSFORMANDO IDEIAS DIGITAIS EM REALIDADE',
        'hero-desc': 'Criando mundos digitais imersivos unindo código com criatividade. Sou desenvolvedor full-stack e especialista em SAP BTP. Vamos transformar sua visão em realidade digital.',
        'hero-btn': 'Entre em Contato',
        'specialties-heading': 'MINHAS <span>ESPECIALIDADES.</span>',
        'spec-fe-title': 'Front-end',
        'spec-fe-desc': 'Criando sites e aplicações bonitas e funcionais com HTML/CSS e JavaScript.',
        'spec-be-title': 'Back-end',
        'spec-be-desc': 'Construindo sistemas robustos e escaláveis com TypeScript, Node.js e SQL.',
        'spec-ai-title': 'Engenharia de Prompt',
        'spec-ai-desc': 'Criando prompts eficazes para chatbots de IA e imagens incríveis geradas por IA.',
        'spec-sap-title': 'Desenvolvedor SAP / BTP',
        'spec-sap-desc': 'Construindo integrações enterprise e extensões cloud na SAP BTP com CAP, OData e ABAP.',
        'about-heading': 'OLÁ,<span>EU SOU LUCAS JAQUES.</span>',
        'about-p1': 'Olá, sou Lucas Jaques, desenvolvedor full-stack e especialista em SAP BTP baseado no Brasil. Com experiência prática no modelo CAP (Cloud Application Programming) da SAP e integrações reais com SAP S/4HANA, faço a ponte entre sistemas enterprise e soluções modernas em nuvem.',
        'about-p2': 'Quando não estou codando, você pode me encontrar jogando video games, assistindo filmes ou animes.',
        'about-completion': 'Conclusão do curso DSM em julho de 2026.',
        'sap-heading': 'EXPERIÊNCIA <span>SAP.</span>',
        'sap-desc': 'Profissional ativo no ecossistema SAP com experiência prática na construção de soluções cloud-native na SAP BTP. Atualmente entregando soluções de integração reais para clientes utilizando SAP S/4HANA Public Edition.',
        'sap-btp-desc': 'SAP Business Technology Platform — apps e integrações cloud-native',
        'sap-cap-desc': 'Cloud Application Programming Model — desenvolvedor certificado',
        'sap-s4-desc': 'Integrações e extensões para Public Edition',
        'sap-fiori-desc': 'Desenvolvimento UI5 e customização Fiori Elements',
        'sap-abap-desc': 'Desenvolvimento customizado e implementações de enhancement',
        'sap-odata-desc': 'Design, integração e consumo de APIs',
        'cert-heading': 'MINHAS <span>CERTIFICAÇÕES.</span>',
        'cert-name': 'SAP Certified Associate',
        'cert-subtitle': 'Desenvolvedor Back-End — SAP Cloud Application Programming Model',
        'cert-verify': 'Verificar Certificado',
        'portfolio-heading': 'MEU <span>PORTFÓLIO.</span>',
        'featured-badge': 'Projeto em Destaque',
        'featured-desc': 'Uma plataforma ambiciosa de integração SAP que atende clientes reais. Entrega monitoramento de notas fiscais (NF-e) integrado diretamente ao SAP S/4HANA Public Edition — com um pipeline de novas capacidades de integração em desenvolvimento.',
        'client-label': 'Cliente ativo:',
        'private-label': 'Projeto Privado',
        'fatec-tag': 'FATEC · Projetos Interdisciplinares',
        'fatec-heading': 'CANDAGO <span>ABPs.</span>',
        'fatec-desc': 'Projetos desenvolvidos na FATEC pela metodologia ABP (Aprendizagem Baseada em Projetos), em parceria com a organização Candago. Sistemas reais construídos por times reais resolvendo problemas reais.',
        'candago-scrum-desc': 'Plataforma de gestão Scrum — planejamento de sprints, backlog e colaboração em equipe.',
        'sem-tag-1': '1DSM – 2º Sem. 2022',
        'sem-tag-2': '2DSM – 1º Sem. 2023',
        'sem-tag-3': '3DSM – 2º Sem. 2023',
        'sem-tag-4': '4DSM – 1º Sem. 2024',
        'sem-tag-5': '5DSM – 2º Sem. 2024',
        'sem-tag-6': '6DSM – 1º Sem. 2025',
        'contrib-label': 'Minha contribuição:',
        'candago-scrum-contrib': 'Desenvolvimento do front-end com HTML, CSS e JavaScript e participação nas cerimônias Scrum da equipe.',
        'candago-2-contrib': 'Atuação full-stack — construção do front-end em React e da API REST em Node.js com PostgreSQL.',
        'candago-3-contrib': 'Desenvolvimento do front-end em React com TypeScript e integração com a API Node.js/MongoDB.',
        'candago-4-contrib': 'Desenvolvimento do app mobile em Expo e integração da telemetria em tempo real via MQTT.',
        'candago-5-contrib': 'Desenvolvimento do app em React Native e integração do modelo de classificação de raças com TensorFlow.',
        'candago-6-contrib': 'Desenvolvimento dos fluxos de conversa do chatbot em Python/FastAPI e do roteamento de intenções com NLP.',
        'candago-2-desc': 'Plataforma de gerenciamento de projetos — upload e gestão de projetos, cadastro de membros, relatórios estatísticos e exportação de dados em PDF.',
        'candago-3-desc': 'App de nutrição e saúde — registro de refeições, consumo de água, monitoramento de macronutrientes e gestão de metas pessoais.',
        'candago-4-desc': 'App mobile de monitoramento IoT — coleta de telemetria via MQTT, visualização de dados em tempo real e backend containerizado com Docker.',
        'candago-5-desc': 'Plataforma mobile para registro e busca de cães perdidos — geolocalização, câmera e classificação de raças por IA com 120+ raças.',
        'candago-6-desc': 'Chatbot WhatsApp com IA para o Procon de Jacareí — automatiza triagem de reclamações, orientação sobre direitos do consumidor e roteamento inteligente com escalada humana.',
        'view-project': 'Ver Projeto',
        'view-github': 'Ver no GitHub',
        'other-projects-label': 'Outros Projetos',
        'stat-abp': 'Projetos ABP FATEC',
        'stat-cert': 'Certificação SAP',
        'stat-client': 'Cliente SAP Ativo',
        'stat-years': 'Anos de Experiência',
        'timeline-heading': 'MINHA <span>JORNADA.</span>',
        'tl-1-title': 'FATEC Jacareí',
        'tl-1-desc': 'Início do curso DSM — construindo a base para desenvolvimento full-stack moderno.',
        'tl-2-title': 'ABPs Full-Stack',
        'tl-2-desc': 'Projetos do 2º e 3º semestre com React, TypeScript, Node.js, PostgreSQL e MongoDB.',
        'tl-3-title': 'Entrada no Mercado SAP',
        'tl-3-desc': 'Início no ecossistema SAP, com especialização em SAP BTP e Cloud Application Programming Model.',
        'tl-4-title': 'Certificado SAP CAP',
        'tl-4-desc': 'Conquista da certificação SAP Certified Associate — Desenvolvedor Back-End para Cloud Application Programming Model.',
        'tl-5-title': 'Cliente Ativo e ABPs Avançados',
        'tl-5-desc': 'Integração Luma em produção para Vida Veg. ABPs avançados com ML, IoT e IA/NLP.',
        'client-heading': 'Impacto Real. Cliente Real.',
        'client-desc': 'Monitoramento de notas fiscais (NF-e) rodando ao vivo no SAP S/4HANA Public Edition. Integração enterprise de verdade — não apenas uma demo.',
        'cf-1': 'Ambiente de Produção',
        'cf-3': 'Integração NF-e',
        'contact-heading': 'FALE <span>COMIGO.</span>',
        'contact-desc': 'Você pode falar comigo pelas minhas redes profissionais:',
        'footer-tagline': 'Feito com HTML, CSS e JavaScript puros — sem frameworks.',
        'cat-prof': 'Projetos Profissionais',
        'cat-acad': 'Projetos Acadêmicos',
        'cat-pers': 'Projetos Pessoais',
        'featured-period': 'Em produção desde 2024',
        'featured-contrib': 'Desenvolvimento completo da plataforma — front-end, back-end e integrações SAP — em colaboração com um parceiro.',
        'view-demo': 'Ver Demo',
        'about-goals': 'Objetivo profissional: crescer como engenheiro SAP BTP / full-stack, construindo integrações enterprise e soluções em nuvem de alto impacto.',
        'langs-pt': 'Português — Nativo',
        'langs-en': 'Inglês — Avançado',
        'todolist-desc': 'App de gestão de tarefas com autenticação JWT, controle de acesso por papéis (RBAC), persistência em SQLite e quadro Kanban interativo com drag-and-drop.',
        'todolist-contrib': 'Projeto solo — desenvolvimento completo do front-end, API REST e banco de dados.',
        'tincat-desc': 'Site conceito "Tinder para gatos" — releitura divertida da experiência do Tinder, criada para praticar layouts responsivos.',
        'tincat-contrib': 'Projeto solo — design e implementação completa.',
        'simon-desc': 'Versão browser do clássico jogo da memória Simon — sequências de cores, sons e dificuldade progressiva.',
        'simon-contrib': 'Projeto solo — lógica do jogo e interface em JavaScript puro.',
        'drum-desc': 'Bateria virtual interativa — toque com cliques do mouse ou teclas do teclado, com samples reais de bateria.',
        'drum-contrib': 'Projeto solo — manipulação de eventos DOM e reprodução de áudio em JavaScript.',
        'dice-desc': 'Jogo de dados para dois jogadores — rolagens aleatórias decidem o vencedor a cada atualização da página.',
        'dice-contrib': 'Projeto solo — lógica de aleatoriedade e manipulação do DOM.',
    }
};

// ===== THEME TOGGLE =====
const html = document.documentElement;
const btnTheme = document.getElementById('btn-theme');
const themeIcon = btnTheme.querySelector('i');

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
}

btnTheme.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
});

// ===== LANGUAGE TOGGLE =====
const btnLang = document.getElementById('btn-lang');
const langLabel = btnLang.querySelector('span');
let currentLang = localStorage.getItem('lang') || 'pt';

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key] !== undefined) el.setAttribute('placeholder', translations[lang][key]);
    });
    document.querySelectorAll('[data-i18n-value]').forEach(el => {
        const key = el.getAttribute('data-i18n-value');
        if (translations[lang][key] !== undefined) el.setAttribute('value', translations[lang][key]);
    });
    html.setAttribute('lang', lang);
    langLabel.textContent = lang === 'en' ? 'PT' : 'EN';
}

applyTranslations(currentLang);

btnLang.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    localStorage.setItem('lang', currentLang);
    applyTranslations(currentLang);
});

// ===== CURSOR GLOW =====
const cursorEl = document.getElementById('cursor-glow');
if (window.matchMedia('(pointer: fine)').matches) {
    cursorEl.style.display = 'block';
    let cx = 0, cy = 0, gx = 0, gy = 0;
    document.addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; });
    (function tickCursor() {
        gx += (cx - gx) * 1;
        gy += (cy - gy) * 1;
        cursorEl.style.transform = `translate(${gx - 12}px, ${gy - 12}px)`;
        requestAnimationFrame(tickCursor);
    })();
}

// ===== STATS COUNTER =====
const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        let current = 0;
        const step = target / 55;
        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current);
            if (current >= target) clearInterval(timer);
        }, 18);
        statsObs.unobserve(el);
    });
}, { threshold: 0.7 });
document.querySelectorAll('.stat-number').forEach(el => statsObs.observe(el));

// ===== MOBILE MENU =====
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const btnClose = document.getElementById('btn-close');

btnMenu.addEventListener('click', () => menu.classList.add('active'));
btnClose.addEventListener('click', () => menu.classList.remove('active'));
overlay.addEventListener('click', () => menu.classList.remove('active'));

document.querySelectorAll('.menu-mobile-nav a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('active'));
});

// ===== SCROLL PROGRESS & HEADER =====
const progressBar = document.getElementById('scroll-progress');
const headerEl = document.querySelector('header');

function onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    headerEl.classList.toggle('scrolled', window.scrollY > 10);
}

document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
