import {
  BookOpen, GraduationCap, Layout, Table, Users, Code, Sparkles, Palette,
  Zap, ShieldCheck, RefreshCw, Headphones, Award, Smartphone,
  Star, ChevronRight, ChevronDown, ChevronUp, Menu, X, Check, ArrowRight,
  Clock, ShoppingBag, TrendingUp, Quote, Mail, Send, MapPin, Phone,
  Instagram, Youtube, Linkedin, Github, Twitter, Facebook,
  Play, FileText, Download, Gift, Truck, Lock, Eye,
  Tag, CreditCard, Banknote, QrCode, Globe,
  Flame, BadgeCheck, MessageCircle, Package,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  BookOpen, GraduationCap, Layout, Table, Users, Code, Sparkles, Palette,
  Zap, ShieldCheck, RefreshCw, Headphones, Award, Smartphone,
  Star, ChevronRight, ChevronDown, ChevronUp, Menu, X, Check, ArrowRight,
  Clock, ShoppingBag, TrendingUp, Quote, Mail, Send, MapPin, Phone,
  Instagram, Youtube, Linkedin, Github, Twitter, Facebook,
  Play, FileText, Download, Gift, Truck, Lock, Eye,
  Tag, CreditCard, Banknote, QrCode, Globe,
  Flame, BadgeCheck, MessageCircle, Package,
}

interface IconProps {
  name: string
  className?: string
  size?: number
}

export function Icon({ name, className, size = 20 }: IconProps) {
  const LucideIcon = iconMap[name]
  if (!LucideIcon) return null
  return <LucideIcon size={size} className={className} />
}
