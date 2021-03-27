const patternDict = [{
    pattern: '\\b(Hello|Hey|Hi|Greetings|Bonjour|Salut)\\b',
    intent: 'Hello'
},
{
    pattern: '\\b(France|france)\\b',
    intent: 'France'
},
{
    pattern: '\\b(USA|United-States|United States|US|usa)\\b',
    intent: 'United States'
},
{
    pattern: '\\b(China|Chine|china|chine)\\b',
    intent: 'China',
    entities : {
        city: 'City'
    }
},
{
    pattern: '\\b(South Africa|Afrique du sud|SA)\\b',
    intent: 'South Africa'
},
{
    pattern: '\\b(Albania|Albanie|ALB)\\b',
    intent: 'Albania'
},
{
    pattern: '\\b(Algeria|Algerie|ALG)\\b',
    intent: 'Algeria'
},
{
    pattern: '\\b(Argentina|Argentine|ARG)\\b',
    intent: 'Argentina'
},
{
    pattern: '\\b(Austria|Autriche|AUT)\\b',
    intent: 'Austria'
},
{
    pattern: '\\b(Bahrain|BAH)\\b',
    intent: 'Bahrain'
},
{
    pattern: '\\b(Belarus|Bielorussie|Biélorussie|BLR)\\b',
    intent: 'Belarus'
},
{
    pattern: '\\b(Belgium|Belgique|BEL)\\b',
    intent: 'Belgium'
},
{
    pattern: '\\b(Brazil|Brésil|BRA)\\b',
    intent: 'Brazil'
},
{
    pattern: '\\b(Bulgaria|Bulgarie|BUL)\\b',
    intent: 'Bulgaria'
},
{
    pattern: '\\b(Cambodia|Cambodge|CAM)\\b',
    intent: 'Cambodia'
},
{
    pattern: '\\b(Canada|CAN)\\b',
    intent: 'Canada'
},
{
    pattern: '\\b(Chile|Chili|CHI)\\b',
    intent: 'Chile'
},
{
    pattern: '\\b(Croatia|Croatie|CRO)\\b',
    intent: 'Croatia'
},
{
    pattern: '\\b(Cuba|CUB)\\b',
    intent: 'Cuba'
},
{
    pattern: '\\b(Czech Republic|Cech Republic|Tchéquie|Rep. Tchèque|CZE)\\b',
    intent: 'Czech Republic'
},
{
    pattern: '\\b(Denmark|Danemark|DEN)\\b',
    intent: 'Denmark'
},
{
    pattern: '\\b(Dominican Republic|Dominican Rep|République Dominicaine|DOM)\\b',
    intent: 'Dominican Republic'
},
{
    pattern: '\\b(Egypt|Egypte|égypte|EGY)\\b',
    intent: 'Egypt'
},
{
    pattern: '\\b(Estonia|Estonie|EST)\\b',
    intent: 'Estonia'
},
{
    pattern: '\\b(Germany|Allemagne|GER)\\b',
    intent: 'Germany'
},
{
    pattern: '\\b(Greece|Grece|GRE)\\b',
    intent: 'Greece'
},
{
    pattern: '\\b(Hungary|Hongrie|Hungaria|HON)\\b',
    intent: 'Hungary'
},
{
    pattern: '\\b(India|Inde|IND)\\b',
    intent: 'India'
},
{
    pattern: '\\b(Indonesia|Indonesie|IDN)\\b',
    intent: 'Indonesia'
},
{
    pattern: '\\b(India|Inde|IND)\\b',
    intent: 'India'
},
{
    pattern: '\\b(Iran|IRN|IRA)\\b',
    intent: 'Iran'
},
{
    pattern: '\\b(Ireland|Irland|Irlande|IRL)\\b',
    intent: 'Ireland'
},
{
    pattern: '\\b(Italy|Italie|ITA)\\b',
    intent: 'Italy'
},
{
    pattern: '\\b(Japan|Japon|JAP)\\b',
    intent: 'Japan'
},
{
    pattern: '\\b(Jordan|Jordanie|Jordania|JOR)\\b',
    intent: 'Jordan'
},
{
    pattern: '\\b(Kazakhstan|Kazakstan|Khazakstan|KAZ)\\b',
    intent: 'Kazakhstan'
},
{
    pattern: '\\b(Kuweit|Koweit|KOW)\\b',
    intent: 'Kuweit'
},
{
    pattern: '\\b(Malaysia|Malaisie|MAL)\\b',
    intent: 'Malaysia'
},
{
    pattern: '\\b(Mexico|Mexique|MEX)\\b',
    intent: 'Mexico'
},
{
    pattern: '\\b(Netherlands|Holand|Holland|Pays-Bas|Hollande|NLD|NED)\\b',
    intent: 'Netherlands'
},
{
    pattern: '\\b(New Zealand|Nouvelle-Zélande|NZL)\\b',
    intent: 'New Zealand'
},
{
    pattern: '\\b(Norway|Norvège|NOR)\\b',
    intent: 'Norway'
},
{
    pattern: '\\b(Peru|Perou|PER)\\b',
    intent: 'Peru'
},
{
    pattern: '\\b(Philippines|PHL|PHI)\\b',
    intent: 'Philippines'
},
{
    pattern: '\\b(Poland|Pologne|POL)\\b',
    intent: 'Poland'
},
{
    pattern: '\\b(Portugal|POR)\\b',
    intent: 'Portugal'
},
{
    pattern: '\\b(Puerto Rico|PRI|PUR|PUE)\\b',
    intent: 'Puerto Rico'
},
{
    pattern: '\\b(Romania|Roumanie|ROU)\\b',
    intent: 'Romania'
},
{
    pattern: '\\b(Russia|Russie|RUS)\\b',
    intent: 'Russia'
},
{
    pattern: '\\b(Saudi Arabia|Arabie Saoudite|Arabie Saudite|Arabie|KSA|SAU)\\b',
    intent: 'Saudi Arabia'
},
{
    pattern: '\\b(Singapore|Singapour|SIN|SGP)\\b',
    intent: 'Singapore'
},
{
    pattern: '\\b(South Korea|Corée|Corée du Sud|Korea South|Korea|KOR|COR)\\b',
    intent: 'South Korea'
},
{
    pattern: '\\b(Spain|Espagne|ESP)\\b',
    intent: 'Spain'
},
{
    pattern: '\\b(Sweden|Suede|SWE|SUE)\\b',
    intent: 'Sweden'
},
{
    pattern: '\\b(Switzerland|Suisse|Swizerland|SUI|SWI)\\b',
    intent: 'Switzerland'
},
{
    pattern: '\\b(Thailand|Thailande|THA)\\b',
    intent: 'Thailand'
},
{
    pattern: '\\b(Tunisia|Tunisie|Tunis|TUN)\\b',
    intent: 'Tunisia'
},
{
    pattern: '\\b(Turkey|Turquey|Turquie|TUR)\\b',
    intent: 'Turkey'
},
{
    pattern: '\\b(Ukraine|UKR)\\b',
    intent: 'Ukraine'
},
{
    pattern: '\\b(United Kingdom|United-kingdom|Royaume Uni|Royaume-uni|Scotland|England|Wales|Angleterre|Ecosse|Pays de galles|Pays-de-galles|ENG|SCO|UK)\\b',
    intent: 'United Kingdom'
},
{
    pattern: '\\b(Vietnam|VIE|VNM)\\b',
    intent: 'Vietnam'
}
];
module.exports = patternDict;