import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  Code,
  BarChart3,
  Lightbulb,
  Handshake,
  Trophy,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  ChevronDown,
  Eye,
  Plus,
  Edit3,
  Trash2,
  Settings,
  Activity,
  Globe,
  Calendar,
  Lock,
  UserCheck,
  Search,
  Filter,
  Download,
  FileText,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const iconMap = {
  // Service icons
  'chart-line': TrendingUp,
  'users': Users,
  'target': Target,
  'zap': Zap,
  'code': Code,
  'analytics': BarChart3,
  
  // Value icons
  'lightbulb': Lightbulb,
  'handshake': Handshake,
  'trophy': Trophy,
  
  // Contact icons
  'phone': Phone,
  'mail': Mail,
  'map-pin': MapPin,
  'clock': Clock,
  
  // UI icons
  'arrow-right': ArrowRight,
  'check-circle': CheckCircle,
  'star': Star,
  'chevron-down': ChevronDown,
  'eye': Eye,
  'plus': Plus,
  'edit': Edit3,
  'trash': Trash2,
  'settings': Settings,
  'activity': Activity,
  'globe': Globe,
  'calendar': Calendar,
  'lock': Lock,
  'user-check': UserCheck,
  'search': Search,
  'filter': Filter,
  'download': Download,
  'file-text': FileText,
  'help-circle': HelpCircle,
  'external-link': ExternalLink
} as const;

type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = "" }) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return <IconComponent size={size} className={className} />;
};

export type { IconName };