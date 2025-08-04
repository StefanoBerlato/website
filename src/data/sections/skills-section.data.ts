import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  appliedcryptography,
  authentication,
  authorization,
  reverseengineering,
  devsecops,
  cloud,
  cloudnative,
  riskassessment,
  internetofthings,
  automotive,
  postquantum,
  confidentialcomputing,
  blockchain,
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
          description: 'cryptographic access control, secure cryptographic protocols and algorithms',
        }),
        authorization({
          level: 4,
          description: 'role- and attribute-based access control, OPA/Rego',
        }),
        cloudnative({
          level: 3,
          description: 'microservices (Docker) and orchestration (Kubernetes)',
        }),
        authentication({
          level: 2,
          description: 'multi-factor authentication, OpenID Connect, FIDO',
        }),
        devsecops({
          level: 1,
          description: 'securing containerized applications on distributed heterogeneous architectures',
        })
      ],
    },
    {
      title: 'Will work on',
      skills: [
        confidentialcomputing({
          level: 3,
          description: 'based on hardware (TEEs, HSMs) and cryptography (SE, FE, HE)',
        }),
        postquantum({
          level: 2,
          description: 'crypto-agility',
        })
      ],
    },
    {
      title: 'Worked on',
      skills: [
        cloud({
          level: 4,
          description: 'data security in the cloud, AWS, Azure',
        }),
        automotive({
          level: 3,
          description: 'cooperative, connected, and automated mobility (CCAM)',
        }),
        blockchain({
          level: 3,
          description: 'blockchains, Hyperledger Fabric',
        }),
        reverseengineering({
          level: 2,
          description: 'Android, Java, anti-debugging',
        }),
        riskassessment({
          level: 2,
          description: 'threat modeling',
        }),
        internetofthings({
          level: 1,
          description: 'publish-subscribe protocols (MQTT(',
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
