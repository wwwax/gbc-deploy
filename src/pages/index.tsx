import { LoginForm } from '@/components/LoginForm';
import { Hero } from '../components/Hero';

export default function Home() {
  return <Hero form={<LoginForm />} />;
}
