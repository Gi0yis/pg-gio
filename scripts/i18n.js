(() => {
    const storageKey = 'pg-gio-language';
    const defaultLanguage = 'es';

    const translations = {
        es: {
            common: {
                nav: {
                    home: '[ Inicio ]',
                    about: '[ Sobre mí ]',
                    projects: '[ Proyectos ]',
                    certificates: '[ Certificados ]',
                    contact: '[ Contacto ]'
                },
                languageLabel: 'Selector de idioma',
                loginPrefix: 'Último acceso:',
                loginSuffix: 'en',
                footer: '(c) 2025 Giovanni López. Todos los derechos reservados.',
                actions: {
                    github: 'GitHub',
                    blog: 'Blog',
                    credential: 'Ver credencial',
                    certificate: 'Ver certificado'
                },
                contactStatus: {
                    success: '¡Gracias! Tu mensaje ha sido enviado.',
                    error: 'Oops! Hubo un problema al enviar tu mensaje.'
                }
            },
            home: {
                title: 'Portafolio :: Giovanni López',
                heroPrefix: '¿Tienes una idea genial?',
                heroHighlight: '¡Hagamos que cobre vida!',
                intro: '¡Hola! Soy Giovanni López, desarrollador Back-End. Ayudo a pequeños negocios y diseñadores a llevar a cabo buenas ideas. ¿Hablamos?',
                linksTitle: 'Accede a mis redes:'
            },
            about: {
                title: 'Sobre mí :: Portafolio',
                pageTitle: 'Sobre mí',
                intro: 'Desarrollador backend con experiencia en sistemas empresariales y apasionado por la inteligencia artificial.',
                paragraph1: 'Mi experiencia profesional se centra en el desarrollo y personalización de módulos ERP (ecosistema Odoo), construyendo la lógica de negocio a nivel backend con Python, XML y OWL. Me encargo de la gestión de bases de datos, consumo de APIs y la adaptación de sistemas complejos a flujos de trabajo específicos.',
                paragraph2: 'De manera paralela, a través de proyectos personales y hackathones organizados por Microsoft, he explorado el potencial de los servicios de Azure y la IA para resolver problemas complejos. En estos entornos de innovación, he implementado soluciones en la nube que integran APIs de búsqueda avanzadas, análisis de texto y modelos de lenguaje de última generación.',
                paragraph3: 'Más allá del desarrollo de software, me apasiona la enseñanza y he tenido la oportunidad de formar a más de 100 estudiantes en diversas instituciones educativas. He diseñado planes de estudio adaptados a diferentes niveles, abarcando desde los fundamentos de la programación hasta lenguajes como Python, Java, JavaScript y C. Además, he fomentado la exploración de la inteligencia artificial y el desarrollo web a través de proyectos prácticos.',
                paragraph4: 'Mi interés radica en la investigación y aplicación de la inteligencia artificial en diversos campos, especialmente en la automatización de procesos y el análisis de datos.',
                paragraph5: 'Si desea obtener más información sobre mi trabajo o explorar oportunidades de colaboración en proyectos, no dude en contactarme.'
            },
            projects: {
                title: 'Proyectos :: Portafolio',
                pageTitle: 'Proyectos',
                nextstep: {
                    alt: 'Imagen de la arquitectura de NextStep Science',
                    description: 'Asistente multimodal de IA para investigación científica (Angular/Azure Serverless). Orquesta análisis de datos experimentales aplicando un estricto pipeline de seguridad multicapa para garantizar pasos de acción acotados y seguros.'
                },
                lotus: {
                    alt: 'Imagen de LotusVerify funcionando',
                    description: 'Extensión de navegador y backend (Java/Spring Boot, Azure) para auditar y validar salidas de modelos IA (LLMs). Utiliza RAG invertido y Azure Cognitive Services para mitigar alucinaciones y desinformación.'
                },
                quoverit: {
                    alt: 'Imagen demo de QuoVerit',
                    description: 'Plataforma Full-Stack (Next.js/Flask) para cálculo de ROI y análisis de métricas empresariales. Integra Azure Machine Learning y Azure Functions para procesamiento de datos escalable y generación de recomendaciones automatizadas.'
                },
                datacrafter: {
                    alt: 'Logo de DataCrafter',
                    description: 'Motor RAG y procesamiento documental. Integra React y Python con Azure AI (Document Intelligence, Cognitive Search, OpenAI) para extraer, vectorizar y consultar semánticamente datos desde PDFs e imágenes.'
                },
                eunoa: {
                    alt: 'Logo de Eunoa',
                    description: 'Toma notas y registra la asistencia de tu clase de manera rápida y sencilla. Puedes escanear un código QR para mis alumnos.'
                },
                pythagoras: {
                    alt: 'Logo de PythagorasCalc',
                    description: 'Es una aplicación móvil creada para calcular el lado faltante de un triángulo rectángulo.'
                }
            },
            certificates: {
                title: 'Certificados :: Portafolio',
                pageTitle: 'Certificados',
                innovationDecemberTitle: 'Innovation Challenge Hackathon December 2024',
                innovationOctoberTitle: 'Innovation Challenge Hackathon October 2024',
                azureAiTitle: 'Microsoft Certified: Azure AI Engineer Associate',
                oracleOneTitle: 'Formación SQL con MySQL Server de Oracle - ONE',
                oracleBackEndTitle: 'Programa Oracle Next Education F2 T6 Back-end',
                innovationDecemberAlt: 'Badge de Innovation Challenge Hackathon December 2024',
                innovationOctoberAlt: 'Badge de Innovation Challenge Hackathon October 2024',
                azureAiAlt: 'Logo de la certificación Microsoft Azure AI Engineer Associate',
                oracleOneAlt: 'Logo del programa Oracle Next Education',
                oracleBackEndAlt: 'Logo del programa Oracle Next Education'
            },
            contact: {
                title: 'Contacto :: Portafolio',
                pageTitle: 'Contacto',
                intro: '¿Interesado en colaborar? Envíame un mensaje.',
                email: 'Tu Email:',
                subject: 'Asunto:',
                message: 'Mensaje:',
                submit: '[ Enviar Mensaje ]'
            }
        },
        en: {
            common: {
                nav: {
                    home: '[ Home ]',
                    about: '[ About Me ]',
                    projects: '[ Projects ]',
                    certificates: '[ Certificates ]',
                    contact: '[ Contact ]'
                },
                languageLabel: 'Language selector',
                loginPrefix: 'Last login:',
                loginSuffix: 'on',
                footer: '(c) 2025 Giovanni López. All rights reserved.',
                actions: {
                    github: 'GitHub',
                    blog: 'Blog',
                    credential: 'View credential',
                    certificate: 'View certificate'
                },
                contactStatus: {
                    success: 'Thanks! Your message has been sent.',
                    error: 'Oops! There was a problem sending your message.'
                }
            },
            home: {
                title: 'Portfolio :: Giovanni López',
                heroPrefix: 'Do you have a great idea?',
                heroHighlight: 'Let us bring it to life!',
                intro: 'Hi! I am Giovanni López, a Back-End developer. I help small businesses and designers turn good ideas into reality. Want to talk?',
                linksTitle: 'Find me here:'
            },
            about: {
                title: 'About Me :: Portfolio',
                pageTitle: 'About Me',
                intro: 'Backend developer with experience in enterprise systems and a strong interest in artificial intelligence.',
                paragraph1: 'My professional experience focuses on developing and customizing ERP modules (Odoo ecosystem), building backend business logic with Python, XML, and OWL. I handle database management, API consumption, and the adaptation of complex systems to specific workflows.',
                paragraph2: 'In parallel, through personal projects and hackathons organized by Microsoft, I have explored the potential of Azure services and AI to solve complex problems. In these innovation environments, I have implemented cloud solutions that integrate advanced search APIs, text analysis, and state-of-the-art language models.',
                paragraph3: 'Beyond software development, I am passionate about teaching and have had the opportunity to train more than 100 students in different educational institutions. I have designed study plans adapted to different levels, covering everything from programming fundamentals to languages such as Python, Java, JavaScript, and C. I have also encouraged exploration of artificial intelligence and web development through practical projects.',
                paragraph4: 'My interest lies in the research and application of artificial intelligence across different fields, especially process automation and data analysis.',
                paragraph5: 'If you would like to learn more about my work or explore collaboration opportunities, feel free to contact me.'
            },
            projects: {
                title: 'Projects :: Portfolio',
                pageTitle: 'Projects',
                nextstep: {
                    alt: 'Architecture image of NextStep Science',
                    description: 'Multimodal AI assistant for scientific research (Angular/Azure Serverless). It orchestrates experimental data analysis using a strict multilayer security pipeline to guarantee bounded and safe action steps.'
                },
                lotus: {
                    alt: 'LotusVerify running image',
                    description: 'Browser extension and backend (Java/Spring Boot, Azure) to audit and validate AI model outputs (LLMs). It uses reverse RAG and Azure Cognitive Services to mitigate hallucinations and misinformation.'
                },
                quoverit: {
                    alt: 'QuoVerit demo image',
                    description: 'Full-Stack platform (Next.js/Flask) for ROI calculations and business metrics analysis. It integrates Azure Machine Learning and Azure Functions for scalable data processing and automated recommendation generation.'
                },
                datacrafter: {
                    alt: 'DataCrafter logo',
                    description: 'RAG engine and document processing platform. It integrates React and Python with Azure AI (Document Intelligence, Cognitive Search, OpenAI) to extract, vectorize, and query data semantically from PDFs and images.'
                },
                eunoa: {
                    alt: 'Eunoa logo',
                    description: 'Take notes and record your class attendance quickly and easily. You can scan a QR code for my students.'
                },
                pythagoras: {
                    alt: 'PythagorasCalc logo',
                    description: 'A mobile application created to calculate the missing side of a right triangle.'
                }
            },
            certificates: {
                title: 'Certificates :: Portfolio',
                pageTitle: 'Certificates',
                innovationDecemberTitle: 'Innovation Challenge Hackathon December 2024',
                innovationOctoberTitle: 'Innovation Challenge Hackathon October 2024',
                azureAiTitle: 'Microsoft Certified: Azure AI Engineer Associate',
                oracleOneTitle: 'SQL Training with MySQL Server from Oracle - ONE',
                oracleBackEndTitle: 'Oracle Next Education F2 T6 Back-end Program',
                innovationDecemberAlt: 'Innovation Challenge Hackathon December 2024 badge',
                innovationOctoberAlt: 'Innovation Challenge Hackathon October 2024 badge',
                azureAiAlt: 'Microsoft Azure AI Engineer Associate certification logo',
                oracleOneAlt: 'Oracle Next Education program logo',
                oracleBackEndAlt: 'Oracle Next Education program logo'
            },
            contact: {
                title: 'Contact :: Portfolio',
                pageTitle: 'Contact',
                intro: 'Interested in collaborating? Send me a message.',
                email: 'Your Email:',
                subject: 'Subject:',
                message: 'Message:',
                submit: '[ Send Message ]'
            }
        }
    };

    const pageKey = document.body?.dataset.page || 'home';
    const tty = document.body?.dataset.tty || 'ttys001';
    const loginElement = document.querySelector('.terminal-login');
    const languageButtons = document.querySelectorAll('[data-language-option]');
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    const getLanguage = () => localStorage.getItem(storageKey) || defaultLanguage;

    const resolve = (dictionary, key) => key.split('.').reduce((value, part) => value?.[part], dictionary);

    const translate = (language, key, fallback = '') => resolve(translations[language], key) ?? resolve(translations[defaultLanguage], key) ?? fallback;

    const toDatasetKey = (attributeName) => {
        return `i18n${attributeName
            .split('-')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join('')}`;
    };

    const applyAttributeTranslations = (language, attributeName) => {
        const datasetKey = toDatasetKey(attributeName);
        document.querySelectorAll(`[data-i18n-${attributeName}]`).forEach((element) => {
            const key = element.dataset[datasetKey];
            if (!key) {
                return;
            }
            const value = translate(language, key, element.getAttribute(attributeName) || '');
            if (value) {
                element.setAttribute(attributeName, value);
            }
        });
    };

    const updateLogin = (language) => {
        if (!loginElement) {
            return;
        }

        const now = new Date();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dayName = days[now.getDay()];
        const monthName = months[now.getMonth()];
        const dayNum = String(now.getDate()).padStart(2, '0');
        const year = now.getFullYear();
        const timeString = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        loginElement.textContent = `Last login: ${dayName} ${monthName} ${dayNum} ${timeString} ${year} on ${tty}`;
    };

    const updateLanguageButtons = (language) => {
        languageButtons.forEach((button) => {
            const isActive = button.dataset.languageOption === language;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    };

    const updateFormMessages = (language) => {
        if (!formStatus) {
            return;
        }

        if (!formStatus.dataset.state) {
            formStatus.textContent = '';
            return;
        }

        formStatus.textContent = translate(language, `common.contactStatus.${formStatus.dataset.state}`);
    };

    const applyLanguage = (language) => {
        const normalizedLanguage = language === 'en' ? 'en' : defaultLanguage;
        localStorage.setItem(storageKey, normalizedLanguage);
        document.documentElement.lang = normalizedLanguage === 'en' ? 'en' : 'es-MX';
        document.title = translate(normalizedLanguage, `${pageKey}.title`);

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.dataset.i18n;
            const value = translate(normalizedLanguage, key, element.textContent || '');
            if (value) {
                element.textContent = value;
            }
        });

        applyAttributeTranslations(normalizedLanguage, 'placeholder');
        applyAttributeTranslations(normalizedLanguage, 'title');
        applyAttributeTranslations(normalizedLanguage, 'alt');
        applyAttributeTranslations(normalizedLanguage, 'aria-label');
        updateLogin(normalizedLanguage);
        updateLanguageButtons(normalizedLanguage);
        updateFormMessages(normalizedLanguage);
    };

    languageButtons.forEach((button) => {
        button.addEventListener('click', () => {
            applyLanguage(button.dataset.languageOption || defaultLanguage);
        });
    });

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const currentLanguage = getLanguage();
            const data = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        Accept: 'application/json'
                    }
                });

                formStatus.dataset.state = response.ok ? 'success' : 'error';

                if (response.ok) {
                    formStatus.style.color = 'var(--color-secundario)';
                    form.reset();
                } else {
                    formStatus.style.color = 'var(--color-acento)';
                }

                updateFormMessages(currentLanguage);
            } catch (_error) {
                formStatus.dataset.state = 'error';
                formStatus.style.color = 'var(--color-acento)';
                updateFormMessages(currentLanguage);
            }
        });
    }

    applyLanguage(getLanguage());
})();