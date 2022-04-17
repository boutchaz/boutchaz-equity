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
  <>
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
  </>
);

export default Layout;
