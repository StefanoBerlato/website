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
  contentprovenance,
  automotive,
  postquantum,
  confidentialcomputing,
  privacyenhancingtechnologies,
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
          description: 'cryptographic access control, key management, secure cryptographic protocols and algorithms',
        }),
        authorization({
          level: 4,
          description: 'role- and attribute-based access control, attribute-based encryption, access control encryption',
        }),
        cloudnative({
          level: 3,
          description: 'microservices (Docker), orchestration (Kubernetes), sidecar proxies for cryptographic access control',
        }),
        privacyenhancingtechnologies({
          level: 3,
          description: 'Zero-Knowledge Proofs, Functional Encryption, privacy-preserving access control',
        }),
        contentprovenance({
          level: 2,
          description:
            'C2PA verification, provenance pipelines, testing frameworks for digital asset authenticity',
        })
      ],
    },
    {
      title: 'Will work on',
      skills: [
        confidentialcomputing({
          level: 3,
          description: 'Trusted Execution Environments, Hardware Security Modules',
        }),
        postquantum({
          level: 2,
          description: 'crypto-agility, Cryptographic Bill of Materials (CBOM)',
        })
      ],
    },
    {
      title: 'Worked on',
      skills: [
        cloud({
          level: 4,
          description: 'data security in the cloud, multi-objective optimization, Cloud-edge-IoT continuum',
        }),
        automotive({
          level: 3,
          description: 'cooperative, connected, and automated mobility (CCAM)',
        }),
        blockchain({
          level: 3,
          description: 'blockchains, Hyperledger Fabric, training for law enforcement (ECTEG)',
        }),
        authentication({
          level: 2,
          description: 'multi-factor authentication, OpenID Connect, FIDO',
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
          description: 'publish-subscribe protocols (MQTT)',
        }),
        devsecops({
          level: 1,
          description: 'securing containerized applications on distributed heterogeneous architectures',
        })
      ],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:it', name: 'Italian - native' },
        { icon: 'circle-flags:gb', name: 'English - C1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
