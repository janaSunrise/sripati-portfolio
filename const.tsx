import { FiTwitter, FiInstagram, FiMail, FiBook } from 'react-icons/fi';

import type { Work, Research, Social } from './types';

const iconProps = {
  size: 24
};

export const socials: Social[] = [
  {
    name: 'Email',
    url: 'janasripati@gmail.com',
    copy: true,
    icon: <FiMail {...iconProps} />
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/jana_sripati',
    copy: false,
    icon: <FiTwitter {...iconProps} />
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/sripatijana',
    copy: false,
    icon: <FiInstagram {...iconProps} />
  },
  {
    name: 'Google scholar',
    url: 'https://scholar.google.com/citations?user=dK_K_C8AAAAJ&hl=en',
    copy: false,
    icon: <FiBook {...iconProps} />
  }
];

export const work: Work[] = [
  {
    place: 'Swiss Federal Institute of Technology Lausanne (EPFL), Switzerland',
    timeline: '2022 - present',
    position: 'Post-doctoral researcher in organic chemistry'
  },
  {
    place: 'Institut für Organische Chemie, RWTH Aachen University, Germany',
    timeline: '2018 - 2022',
    position: 'PhD in organic chemistry'
  },
  {
    place:
      'Research stay, Institute of Organic Chemistry, Polish Academy of Sciences, Poland',
    timeline: '2019 - 2020',
    position: 'Research stay'
  },
  {
    place: 'Indian Institute of Technology Kharagpur (IIT KGP), India',
    timeline: '2016 - 2018',
    position: 'MSc in chemistry'
  },
  {
    place: 'Ramakrishna Mission Vivekananda Centenary College, India',
    timeline: '2013 - 2016',
    position: 'BSc with honours in chemistry'
  }
];

export const research: Research[] = [
  {
    title:
      'Photochemical ring expansion reactions: synthesis of tetrahydrofuran derivatives and mechanism studies',
    authors: 'S. Jana, Y. Zhen, C. Pei, X. Xu, R. M. Koenigs',
    metadata: 'Chem. Sci. 2019, 10, 10129-10134.',
    link: '',
    imagePath: 'https://placehold.co/300x200'
  },
  {
    title:
      'Photoinduced proton transfer reactions for mild O-H functionalization reactions of unreactive alcohols',
    authors: 'S. Jana,+ Z. Yang,+ F. Li, C. Empel, J. Ho, R. M. Koenigs',
    metadata: 'Chem. Int. Ed. 2020, 59, 5562-5566. Chem., 2020, 132, 5608-5613',
    link: '',
    imagePath: 'https://placehold.co/300x200'
  },
  {
    title:
      'C-H Functionalization reactions of unprotected N-heterocycles by gold- catalyzed carbene transfer',
    authors:
      'S. Jana, C. Empel, C. Pei, P. Aseeva, T. V. Nguyen, R. M. Koenigs',
    metadata: 'ACS Catal. 2020, 10, 17, 9925-9931',
    link: '',
    imagePath: 'https://placehold.co/300x200'
  },
  {
    title:
      'Photochemical carbene transfer reactions of aryl/aryl diazoalkanes - experiment and theory',
    authors: 'S. Jana, C. Pei, C. Empel, R. M. Koenigs',
    metadata: 'Chem. Int. Ed. 2021, 60, 13271-13279',
    link: '',
    imagePath: 'https://placehold.co/300x200'
  },
  {
    title:
      'Photoinduced ruthenium-catalyzed alkyl-alkyl cross-coupling reactions',
    authors: 'S. Jana, C. Pei, S. B. Bahukhandi, R. M. Koenigs',
    metadata: 'Chem Catalysis 2021,1, 467-479.',
    link: '',
    imagePath: 'https://placehold.co/300x200'
  }
];
