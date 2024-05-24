import { AUDIT_PARTNER } from "../../utils/constants";
export default [
  {
    title: AUDIT_PARTNER.MENU.spanish.home,
    to: { name: 'root' },
    icon: { icon: 'tabler-smart-home' },
    meta: { requiresAuth: true },
  },
  {
    title: 'Second page',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
    meta: { requiresAuth: true },
  },
  {
    title: 'Produc',
    to: { name: 'products' },
    icon: { icon: 'tabler-file' },
    meta: { requiresAuth: true },
  },
]
