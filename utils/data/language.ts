import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoPython,
} from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

export const Languages = [
  {
    name: 'javascript',
    text: 'JavaScript',
    icon: IoLogoJavascript({ size: 40, color: 'yellow' }),
  },
  {
    name: 'html',
    text: 'HTML',
    icon: IoLogoHtml5({ size: 40, color: 'orange' }),
  },
  {
    name: 'css',
    text: 'CSS',
    icon: IoLogoCss3({ size: 40, color: '#0061ff' }),
  },
  {
    name: 'typescript',
    text: 'TypeScript',
    icon: SiTypescript({ size: 40, color: '#0061ff' }),
  },
  {
    name: 'python',
    text: 'Python',
    icon: IoLogoPython({ size: 40, color: 'orange' }),
  },
  {
    name: 'java',
    text: 'Java',
    icon: FaJava({ size: 40, color: '#fff'  }),
  },
];
