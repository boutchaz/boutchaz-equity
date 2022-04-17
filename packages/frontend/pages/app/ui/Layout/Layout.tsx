import { ReactNode } from 'react';
import Footer from '@/ui/theme/Footer/Footer';
import Header from '@/ui/theme/Header/Header';


enum VariantTypes {
    SECONDARY = 'secondary',
    IS_ACTIVE = 'is-active',
  }
  
interface LayoutInterface {
    variant?: VariantTypes;
    title?: string;
}
interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  showLinks?: boolean;
  backgroundColor?: string;
  showSidebars?: boolean;
}

const Layout: React.FC<LayoutProps & LayoutInterface> = ({
  variant,
  children,
  showFooter = true,
  showLinks = true,
  showSidebars,
  backgroundColor,
  title,
}) => (
  <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
    <Header
      {...{
        showSidebars,
        showLinks,
        variant,
        title,
      }}
    />
    <>{children}</>
    {showFooter && <Footer />}
  </div>
);

export default Layout;
