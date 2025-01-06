import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  appliedcryptography,
  authentication,
  authorization,
  reverseengineering,
  devsecops,
  cloudnative,
  internetofthings,
  automotive,
  android,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Research Interests',
    slug: 'research',
    icon: 'fa6-solid:bars-progress',
    visible: true,
    showSelectedOnly: false,
  },
  skillSets: [
    {
      title: 'Working on',
      skills: [
        appliedcryptography({
          level: 5,
          description: 'Cryptographic access control, attribute-based encryption, key management, blockchain.',
        }),
        authorization({
          level: 4,
          description: 'Role- and attribute-based access control.',
        }),
        authentication({
          level: 3,
          description: 'Multi-factor authentication, OpenID Connect, FIDO.',
        }),
        cloudnative({
          level: 2,
          description: 'Container technologies, Docker, Kubernetes',
        }),
      ],
    },
    {
      title: 'Will work on',
      skills: [
        devsecops({
          level: 1,
        }),
      ],
    },
    {
      title: 'Worked on',
      skills: [
        internetofthings({
          level: 2,
        }),
        automotive({
          level: 3,
          description: 'Cooperative Connected and Automated Mobility (CCAM).',
        }),
        reverseengineering({
          level: 2,
          description: 'Android, Java, anti-debugging.',
        }),
        android({
          level: 3,
        }),
      ],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:it', name: 'Italian - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
