import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/


export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const appliedcryptography = createSkillFactory({
  name: 'Applied Cryptography',
  icon: 'streamline:device-database-encryption-1',
  iconColor: '#311C87',
});

export const authentication = createSkillFactory({
  name: 'Authentication',
  icon: 'material-symbols:id-card-outline',
  iconColor: '#FF5D01',
});

export const authorization = createSkillFactory({
  name: 'Authorization',
  icon: 'mdi:user-access-control',
  iconColor: '#319795',
});

export const reverseengineering = createSkillFactory({
  name: 'Reverse Engineering',
  icon: 'healthicons:magnifying-glass',
  iconColor: '#17202C',
});

export const devsecops = createSkillFactory({
  name: 'DevSecOps',
  icon: 'mdi:microsoft-azure-devops',
  iconColor: '#4B32C3',
});

export const cloudnative = createSkillFactory({
  name: 'Cloud Native',
  icon: 'mdi:cloud-cog-outline',
  iconColor: '#FFCA28',
});
  
export const automotive = createSkillFactory({
  name: 'Automotive',
  icon: 'carbon:vehicle-connected',
  iconColor: '#C21325',
});
  
export const internetofthings = createSkillFactory({
  name: 'Internet of Things',
  icon: 'clarity:internet-of-things-solid',
  iconColor: '#E0234E',
});
  
export const android = createSkillFactory({
  name: 'Android',
  icon: 'material-symbols:android',
  iconColor: '#47A248',
});
  
export const java = createSkillFactory({
  name: 'Java',
  icon: 'ri:java-fill',
  iconColor: '#000000',
});
  
export const apache = createSkillFactory({
  name: 'Apache',
  icon: 'simple-icons:apache',
  iconColor: '#F69220',
});
  
export const sql = createSkillFactory({
  name: 'SQL',
  icon: 'ph:file-sql',
  iconColor: '#47A248',
});

export const arduino = createSkillFactory({
  name: 'Arduino',
  icon: 'simple-icons:arduino',
  iconColor: '#F7B93E',
});
  
export const bluetooth = createSkillFactory({
  name: 'Bluetooth',
  icon: 'bi:bluetooth',
  iconColor: '#4169E1',
});

export const raspberry = createSkillFactory({
  name: 'Raspberry',
  icon: 'grommet-icons:raspberry',
  iconColor: '#CC6699',
});
  
export const python = createSkillFactory({
  name: 'Python',
  icon: 'teenyicons:python-outline',
  iconColor: '#3ECF8E',
});
  
export const kotlin = createSkillFactory({
  name: 'Kotlin',
  icon: 'cib:kotlin',
  iconColor: '#FF4154',
});
  
export const blockchain = createSkillFactory({
  name: 'Blockchain',
  icon: 'icon-park-twotone:blockchain',
  iconColor: '#FF4154',
});

export const cloud = createSkillFactory({
  name: 'Cloud',
  icon: 'material-symbols:cloud-outline',
  iconColor: '#CC6699',
});
 
export const attributeBasedEncryption = createSkillFactory({
  name: 'Attribute-based Encryption',
  icon: 'material-symbols:user-attributes-outline',
  iconColor: '#3ECF8E',
});

// # #06B6D4 #3178C6 #4FC08D
