const teachingData = [
    {
        ressource: "R1.05 - Outils numériques",
        year: "2021-2022",
        semester: "1",
        department: "Qualité Logistique Industrielle et organisation (QLIO)",
        level: "1st year",
        description: "Boolean algebra, logical operations, foundations of digital systems.",
        TD: "8 hours",
        TP: "8 hours",
        hours: "16 hours",
    },
    {
        ressource: "M3105 - Système de gestion de base de données",
        year: "2021-2022",
        semester: "1",
        department: "Database design, SQL query writing.",
        level: "1st year",
        description: "Course introduces students to the MERISE methodology for database design and querying using SQL.",
        CM: "3 hours",
        TD: "12 hours",
        TP: "16 hours",
        hours: "31 hours",
    },
    {
        ressource: "R1.05 - Outils numériques",
        year: "2022-2023",
        semester: "1",
        department: "Qualité Logistique Industrielle et organisation (QLIO)",
        level: "1st year",
        description: "Boolean algebra, logical operations, foundations of digital systems.",
        TD: "9 hours",
        TP: "6 hours",
        hours: "13 hours",
    },
    {
        ressource: "R3.05 - Algorithmique et programmation avancées",
        year: "2022-2023",
        semester: "1",
        department: "Qualité Logistique Industrielle et organisation (QLIO)",
        level: "2nd year",
        description: "Advanced Python, algorithmic techniques, software development.",
        TD: "8 hours",
        TP: "10 hours",
        hours: "18 hours",
    },
    {
        ressource: "R3.VCOD.10 - Programmation objet",
        year: "2022-2023",
        semester: "1",
        department: "Science de Données (SD)",
        level: "2nd year",
        description: "Object-oriented programming and Smalltalk/Pharo.",
        TD: "8 hours",
        TP: "12 hours",
        hours: "20 hours",
    },
    {
        ressource: "R2.05 - Algorithmique, Programmation et Systèmes d'Information",
        year: "2022-2023",
        semester: "2",
        department: "Qualité Logistique Industrielle et organisation (QLIO)",
        level: "1st year",
        description: "Python programming, algorithm design, information systems.",
        TD: "10 hours",
        TP: "14 hours",
        hours: "24 hours",
    },
    {
        ressource: "SAÉ 3.VCOD.01 - Collecte automatisée de données web",
        year: "2022-2023",
        semester: "2",
        department: "Science de Données (SD)",
        level: "2nd year",
        description: "Web scraping, Java, student autonomous work",
        TP: "3 hours",
        hours: "3 hours",
    },
    {
        ressource: "R1.05 - Outils numériques",
        year: "2023-2024",
        semester: "1",
        department: "Qualité Logistique Industrielle et organisation (QLIO)",
        level: "1st year",
        description: "Boolean algebra, logical operations, foundations of digital systems.",
        CM: "3 hours",
        TD: "8 hours",
        TP: "6 hours",
        hours: "17 hours",
    },
    {
        ressource: "R3.05 - Algorithmique et programmation avancées",
        year: "2023-2024",
        semester: "1",
        department: "Qualité Logistique Industrielle et organisation (QLIO)",
        level: "2nd year",
        description: "Advanced Python, algorithmic techniques, software development.",
        CM: "4 hours",
        TD: "8 hours",
        TP: "6 hours",
        hours: "18 hours",
    },
    {
        ressource: "R3.VCOD.10 - Programmation objet",
        year: "2023-2024",
        semester: "1",
        department: "Science de Données (SD)",
        level: "2nd year",
        description: "Object-oriented programming and Java",
        TD: "10 hours",
        TP: "14 hours",
        hours: "24 hours",
    },
    {
        ressource: "SAÉ 3.VCOD.01 - Collecte automatisée de données web",
        year: "2023-2024",
        semester: "2",
        department: "Science de Données (SD)",
        level: "2nd year",
        description: "Web scraping, Java, student autonomous work",
        TD: "2 hours",
        TP: "4 hours",
        hours: "6 hours",
    },
    {
        ressource: "R5.VCOD.07 - Programmation web pour la visualisation",
        year: "2023-2024",
        semester: "2",
        department: "Science de Données (SD)",
        level: "3rd year (Bachelor)",
        description: "JavaScript (frontend), D3.js, data visualization",
        TD: "4 hours",
        TP: "14 hours",
        hours: "18 hours",
    },
    {
        ressource: "R3.VCOD.10 - Programmation objet",
        year: "2024-2025",
        semester: "1",
        department: "Science de Données (SD)",
        level: "2nd year",
        description: "Object-oriented programming and Java",
        TD: "4 hours",
        TP: "12 hours",
        hours: "16 hours",
    },
    {
        ressource: "R5.MTD.14 - Interoperabilité et Hygiène numérique",
        year: "2024-2025",
        semester: "1",
        department: "Qualité Logistique Industrielle et organisation (QLIO)",
        level: "3rd year (Bachelor)",
        description: "System interoperability, problem-solving, student autonomous work",
        CM: "4 hours",
        TD: "4 hours",
        TP: "6 hours",
        hours: "14 hours",
    },
    {
        ressource: "SAé 5.MTD.02 - Interopérabilité des systèmes",
        year: "2024-2025",
        semester: "1",
        department: "Qualité Logistique Industrielle et organisation (QLIO)",
        level: "3rd year (Bachelor)",
        description: "Interoperability, digital hygiene, security",
        TP: "4 hours",
        hours: "4 hours",
    },
    {
        ressource: "SAÉ 3.VCOD.01 - Collecte automatisée de données web",
        year: "2024-2025",
        semester: "2",
        department: "Science de Données (SD)",
        level: "2nd year",
        description: "Web scraping, Java, student autonomous work",
        TD: "2 hours",
        TP: "6 hours",
        hours: "8 hours",
    },
    {
        ressource: "R5.VCOD.07 - Programmation web pour la visualisation",
        year: "2024-2025",
        semester: "2",
        department: "Science de Données (SD)",
        level: "3rd year (Bachelor)",
        description: " JavaScript (frontend), D3.js, data visualization",
        TD: "4 hours",
        TP: "20 hours",
        hours: "24 hours",
    },
  ];
  
  export default teachingData;
  