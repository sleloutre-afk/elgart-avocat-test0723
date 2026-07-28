export interface Article {
  slug: string
  titre: string
  description: string
  date: string
  categorie: string
  contenu: string
}

export const articles: Article[] = [
  {
    slug: 'baux-commerciaux-pieges-a-eviter',
    titre: 'Baux commerciaux : les 5 pièges à éviter avant de signer',
    description: 'Durée minimale, clause de cession, destination des lieux, indexation, charges récupérables — cinq points que tout preneur doit maîtriser avant de s\'engager sur un bail 3-6-9.',
    date: '2024-09-10',
    categorie: 'Baux d\'entreprise',
    contenu: `
## Pourquoi la négociation d'un bail commercial est décisive

Le bail commercial est l'un des engagements les plus structurants pour une entreprise. Signé pour une durée minimale de neuf ans, il lie le preneur à des obligations qui peuvent peser lourdement sur la trésorerie et la flexibilité opérationnelle si les clauses ne sont pas anticipées. Voici cinq points d'attention essentiels.

## 1. La destination des lieux

La destination contractuelle définit l'activité autorisée dans les locaux. Une formulation trop restrictive interdit d'étendre son activité sans autorisation du bailleur — voire entraîne la résiliation du bail. À l'inverse, une destination trop large peut se retourner contre le preneur si le bailleur refuse plus tard certains usages. Il est recommandé de négocier une destination couvrant l'activité actuelle et ses évolutions prévisibles.

## 2. La clause de cession et de sous-location

Le droit de céder son bail est fondamental en cas de cession de fonds de commerce. De nombreux baux contiennent des clauses restreignant la cession (accord préalable du bailleur, droit de préemption), pouvant bloquer ou retarder une opération. Ces clauses doivent être négociées en amont, pas lors de la vente.

## 3. L'indexation et la révision des loyers

Le bail commercial peut prévoir une indexation annuelle (généralement sur l'ILC ou l'ILAT). Une indexation mal négociée peut conduire à des hausses significatives. Il est également important de distinguer la révision triennale légale (plafonnée à la variation de l'indice) des clauses contractuelles de révision qui peuvent y déroger.

## 4. La répartition des charges et travaux

La loi Pinel a encadré la liste des charges récupérables sur le preneur, mais le contrat peut encore faire peser sur lui des postes non prévus par défaut (ravalement, toiture, mise en conformité). Un audit des charges et une rédaction précise de la clause de répartition sont indispensables.

## 5. Les conditions de sortie anticipée

Le preneur peut en principe résilier à chaque échéance triennale. Mais certains baux contiennent des clauses dérogatoires, comme une renonciation à la faculté de résiliation triennale ou une indemnité d'éviction réduite. Mieux vaut les identifier et les négocier dès l'entrée en relation.

---

*Maître Marie Elgart conseille preneurs et bailleurs dans la négociation, la rédaction et le contentieux de baux commerciaux. Pour toute question spécifique, [prenez rendez-vous](https://calendly.com/elgart-avocate/30min).*
    `.trim(),
  },
  {
    slug: 'cession-parts-sociales-sarl',
    titre: 'Cession de parts sociales dans une SARL : le guide pratique',
    description: 'Agrément des associés, droit de préemption, valorisation, garantie d\'actif et de passif — ce qu\'il faut savoir pour sécuriser une cession de parts dans une société à responsabilité limitée.',
    date: '2024-10-22',
    categorie: 'Droit des sociétés',
    contenu: `
## La cession de parts sociales dans une SARL : un cadre spécifique

Contrairement aux actions de SA ou de SAS, les parts sociales d'une SARL ne sont pas librement cessibles entre tiers. La loi impose une procédure d'agrément qui, si elle n'est pas respectée, peut entraîner la nullité de la cession.

## La procédure d'agrément

L'associé cédant doit notifier son projet de cession à la société et à chacun des associés. La gérance convoque ensuite une assemblée pour statuer sur l'agrément. Si la société refuse, elle est tenue soit de racheter elle-même les parts, soit de trouver un acquéreur agréé, soit de faire racheter les parts par les associés — le tout dans un délai de trois mois.

## La valorisation : un point de tension fréquent

La valeur des parts est souvent au cœur du désaccord. En l'absence d'accord amiable, l'article 1843-4 du Code civil prévoit la désignation d'un expert par le président du tribunal de commerce. Plusieurs méthodes coexistent (actif net corrigé, multiples d'EBITDA, DCF) et les statuts peuvent préciser une méthode de valorisation convenue à l'avance — ce qui sécurise la sortie.

## La garantie d'actif et de passif (GAP)

La GAP est la protection clé de l'acquéreur : elle engage le cédant à indemniser toute charge née antérieurement à la cession et non reflétée dans les comptes. Sa durée, son seuil de déclenchement, son plafond et les exclusions font l'objet de négociations serrées. Un cédant bien conseillé tentera de limiter la durée à 18–24 mois et de négocier un plafond raisonnable.

## Le protocole de cession

Le protocole formalise les conditions suspensives (financement de l'acquéreur, obtention d'autorisations réglementaires), le prix, les représentations et garanties, et la date de réalisation définitive. Il précède l'acte de cession proprement dit qui doit être enregistré auprès du service des impôts.

---

*Pour être accompagné dans votre cession ou acquisition de parts sociales, [contactez Maître Marie Elgart](https://calendly.com/elgart-avocate/30min).*
    `.trim(),
  },
  {
    slug: 'private-equity-lbo-structuration-juridique',
    titre: 'Private equity & LBO : la structuration juridique décryptée',
    description: 'SPV, management package, ratchet, garanties d\'actif et de passif — les principales notions juridiques à maîtriser dans une opération de leveraged buy-out.',
    date: '2024-11-14',
    categorie: 'M&A & Private equity',
    contenu: `
## Le LBO : une opération à fort enjeu juridique

Un leveraged buy-out est une acquisition financée en grande partie par de la dette, portée par une holding de reprise (SPV — Special Purpose Vehicle) qui s'endette pour acquérir la cible. Sa structuration juridique est au cœur de la négociation entre le fonds acquéreur, les managers et les prêteurs.

## La holding d'acquisition (SPV)

La société holding est constituée spécifiquement pour l'opération. Elle acquiert les titres de la cible, supporte la dette d'acquisition, et remonte les dividendes ou produits de cession pour la rembourser. Le choix de la forme juridique (SAS, SA) et de la domiciliation a des implications fiscales directes, notamment sur l'intégration fiscale.

## Le management package

Le management package (co-investissement des dirigeants) aligne les intérêts des managers sur ceux du fonds. Il prend généralement la forme d'actions de préférence, de BSA (bons de souscription d'actions), ou d'OCA (obligations convertibles). La structuration fiscale de ces instruments a fait l'objet d'une jurisprudence évolutive (arrêts du Conseil d'État de 2021), imposant une attention particulière à la qualification des gains réalisés.

## Le ratchet

Le ratchet est un mécanisme de réallocation de la valeur au profit des managers si certains seuils de TRI (taux de retour interne) sont atteints. Il doit être structuré pour éviter la requalification en salaire et pour respecter les règles d'émission des instruments financiers.

## La garantie d'actif et de passif (GAP)

Dans un LBO, la GAP protège la holding acquéreuse contre les passifs non révélés dans les comptes de la cible. Elle est négociée entre le vendeur (ou ses actionnaires) et la holding. Ses termes — durée, franchise, seuil de minimis, plafond, exclusions, mécanismes d'indemnisation — sont un point central de la documentation transactionnelle.

## Le pacte d'actionnaires

Le pacte entre le fonds et les managers organise la gouvernance, les droits de sortie (tag-along, drag-along), les droits de préemption et les clauses de lock-up. Il est indissociable des statuts de la holding.

---

*Maître Marie Elgart intervient en conseil sur les opérations de M&A et de private equity, de la phase de due diligence jusqu'à la documentation définitive. [Discutons de votre projet.](https://calendly.com/elgart-avocate/30min)*
    `.trim(),
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
