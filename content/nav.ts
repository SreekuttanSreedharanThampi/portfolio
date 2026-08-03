// Anchor targets point at the home page (/#…) so the nav also works from
// the case-study routes, not just the one-pager itself.
// Shared by the inline desktop nav and the mobile dropdown.
export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];
